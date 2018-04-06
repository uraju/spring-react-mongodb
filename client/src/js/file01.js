function getSelectionCharOffsetsWithin(element) {
    var start = 0, end = 0, text='';
    var sel, range, priorRange;
    if (typeof window.getSelection != "undefined") {
        range = window.getSelection().getRangeAt(0);
        priorRange = range.cloneRange();
        priorRange.selectNodeContents(element);
        priorRange.setEnd(range.startContainer, range.startOffset);
        start = priorRange.toString().length;
        end = start + range.toString().length;
        text = range.toString();
    } else if (typeof document.selection != "undefined" &&
            (sel = document.selection).type != "Control") {
        range = sel.createRange();
        priorRange = document.body.createTextRange();
        priorRange.moveToElementText(element);
        priorRange.setEndPoint("EndToStart", range);
        start = priorRange.text.length;
        end = start + range.text.length;
        text = range.text;
    }
    return {
        start: start,
        end: end,
        text: text
    };
}

function alertSelection() {
    var mainDiv = document.getElementById("slipsum");
    var sel = getSelectionCharOffsetsWithin(mainDiv);
    //alert();
    var pval = document.getElementById("result");
    pval.innerText = sel.start + ": " + sel.end + ": '" + sel.text + "'";
}
