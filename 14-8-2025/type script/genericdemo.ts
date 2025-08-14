function printData<T>(data: T): void {
  console.log(data);
}
printData<string>("Hello, World!");
printData<number>(42);