function basicOp(operation, value1, value2)
{
  // Code
  switch (operation){
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return "operation must be one of + - * /";
  }
}

function basicOp(o, a, b) {
    return eval(a+o+b);
  }