var n = 0;

function takeANumber(katzDeliLine) {
  n++;
  katzDeliLine.push(n);
  return n;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
	var line = "The line is currently: 1. " + katzDeliLine.slice(0,1);
	if (katzDeliLine.length === 1) {
		return line;
  } else if (katzDeliLine.length > 1) {
		for (var c = 1; c < katzDeliLine.length; c++) {
			line = line + ", " + (c+1) + ". " + katzDeliLine.slice(c, c+1);
        }
		return line;
  } else {
		return "The line is currently empty."
  }
}