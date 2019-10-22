function safeCall(f) {
  try {
    f();

    return true;
  } catch (error) {

    return false;
  }
}

console.log(safeCall(() => false));
