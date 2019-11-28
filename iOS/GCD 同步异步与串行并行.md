# GCD 同步异步与串行并行

不论是同步异步，还是串行并行，单独讲一个，意义都不大。在实际开发中，只有将他们进行各式各样的组合，才能更好地完成我们的需求，本篇文章中就会对他们之间的组合进行举例~

## 名词解释

在学习之前，我们需要先了解一些名词： 

**线程：** 程序执行任务的最小调度单位  
**任务：** 我们要完成的工作，可以是一个方法也可以是一个 `block`  
**队列：** 用于保存“任务”的数组  

**同步执行：** 不能开启新线程，任务创建后，必须执行完才可以继续后面的操作  
**异步执行：** 可以开启新线程，任务创建后，可以继续执行后面的操作，不必等待任务完成  

**串行队列：** 底层只维护一个线程，队列中的任务只能串行按顺序执行  
**并行队列：** 底层使用线程池维护多个线程，队列中的任务可以并发执行

## 实践出真知

### 同步执行 + 串行队列

```objc
dispatch_queue_t queue = dispatch_queue_create("blog.zhangpeng.site", DISPATCH_QUEUE_SERIAL);
NSLog(@"---start---%@", [NSThread currentThread]);
dispatch_sync(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
控制台输出：
---start---<NSThread: 0x6000000741c0>{number = 1, name = main}
任务1---<NSThread: 0x6000000741c0>{number = 1, name = main}
任务2---<NSThread: 0x6000000741c0>{number = 1, name = main}
任务3---<NSThread: 0x6000000741c0>{number = 1, name = main}
---end---<NSThread: 0x6000000741c0>{number = 1, name = main}
 */
```

**结论：**  
同步执行：没有开启新线程，任务都在主线程中执行  
串行队列：任务是按顺序进行

### 同步执行 + 并行队列

```objc
dispatch_queue_t queue = dispatch_queue_create("blog.zhangpeng.site", DISPATCH_QUEUE_CONCURRENT);
NSLog(@"---start---%@", [NSThread currentThread]);
//使用同步函数封装三个任务
dispatch_sync(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
---start---<NSThread: 0x604000070240>{number = 1, name = main}
任务1---<NSThread: 0x604000070240>{number = 1, name = main}
任务2---<NSThread: 0x604000070240>{number = 1, name = main}
任务3---<NSThread: 0x604000070240>{number = 1, name = main}
---end---<NSThread: 0x604000070240>{number = 1, name = main}
 */
```

**结论：**  
同步执行：没有开启新线程，任务都在主线程中执行  
并行队列：任务是按顺序进行

虽然是并行队列，但是因为是同步执行，没有开启新线程，所以所有任务都在主线程执行，所以即使是并行队列，任务也需要按顺序依次执行

### 异步执行 + 串行队列

```objc
dispatch_queue_t queue = dispatch_queue_create("blog.zhangpeng.site", DISPATCH_QUEUE_SERIAL);
NSLog(@"---start---%@", [NSThread currentThread]);
dispatch_async(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
---start---<NSThread: 0x60400007ec40>{number = 1, name = main}
---end---<NSThread: 0x60400007ec40>{number = 1, name = main}
任务1---<NSThread: 0x60000047ab00>{number = 3, name = (null)}
任务2---<NSThread: 0x60000047ab00>{number = 3, name = (null)}
任务3---<NSThread: 0x60000047ab00>{number = 3, name = (null)}
 */
```

**结论：**  
异步执行：开启了一条新的子线程  
串行队列：任务按顺序执行

异步执行，可以先跳过当前添加的任务，执行后面的任务，因此打印顺序: start -> end -> 任务1 -> 任务2 -> 任务3

### 异步执行 + 并行队列

```objc
dispatch_queue_t queue = dispatch_queue_create("blog.zhangpeng.site", DISPATCH_QUEUE_CONCURRENT);
NSLog(@"---start---%@", [NSThread currentThread]);
dispatch_async(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
---start---<NSThread: 0x600000069e80>{number = 1, name = main}
---end---<NSThread: 0x600000069e80>{number = 1, name = main}
任务3---<NSThread: 0x60000026c640>{number = 3, name = (null)}
任务2---<NSThread: 0x60400026f5c0>{number = 4, name = (null)}
任务1---<NSThread: 0x60000026c880>{number = 5, name = (null)}
 */
```

**结论：**  
异步执行：开启了新线程  
并行队列：任务按顺序开始执行，并且可以同时执行

### 同步执行 + 主队列

```objc
dispatch_queue_t queue = dispatch_get_main_queue();
NSLog(@"---start---%@", [NSThread currentThread]);
dispatch_sync(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_sync(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
---start---<NSThread: 0x600000063a40>{number = 1, name = main}
 */
```

**结论：**  
死锁。

`任务1` 需要等待主队列中所有的任务都执行完毕才可以执行，但是因为是同步执行，要执行完 `任务1` 才能执行主队列中的其他任务，最后互相等待，造成了死锁。这边其实与 `任务2` 和 `任务3` 并没有什么关系。QAQ，不知道为什么其他人的博客都说和任务2和3有关。。

### 异步执行 + 主队列

```objc
dispatch_queue_t queue = dispatch_get_main_queue();
NSLog(@"---start---%@", [NSThread currentThread]);
dispatch_async(queue, ^{
    sleep(5);
    NSLog(@"任务1---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(3);
    NSLog(@"任务2---%@", [NSThread currentThread]);
});
dispatch_async(queue, ^{
    sleep(1);
    NSLog(@"任务3---%@", [NSThread currentThread]);
});
NSLog(@"---end---%@", [NSThread currentThread]);

/**
---start---<NSThread: 0x60400007e180>{number = 1, name = main}
---end---<NSThread: 0x60400007e180>{number = 1, name = main}
任务1---<NSThread: 0x60400007e180>{number = 1, name = main}
任务2---<NSThread: 0x60400007e180>{number = 1, name = main}
任务3---<NSThread: 0x60400007e180>{number = 1, name = main}
 */
```

**结论：**  
没有开启新线程，任务按顺序进行

因为是异步执行，所以可以先跳过当前任务，执行后面的任务。因此打印顺序是：start -> end -> 任务1 -> 任务2 -> 任务3。  
虽然是异步，但是主队列中的任务是在主线程中执行，因此没有开启新的线程执行任务，任务按顺序执行。

## 结束语

上面简单的对了同步异步执行与串行并行队列的几种组合方式进行了举例，而我们的日常工作中要比上述举例复杂的多，但是本质还是不变的，我们一定可以找到一种合理的组合方式解决我们遇上的问题的。

---

> Title: GCD 同步异步与串行并行
>
> Date: 2018.05.29
>
> Author: zhangpeng
>
> Github: <https://github.com/fullstack-zhangpeng>
