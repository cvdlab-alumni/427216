function fibonacci (i) {
	fibonacci[0]=0;
	fibonacci[1]=1;

  if (!(i in fibonacci)) {
    fibonacci[i] = fibonacci(i-2) + fibonacci(i - 1);
  }
  return fibonacci[i];
}