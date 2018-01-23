function loadCSV(targetFile) {
    /* 読み込むデータを格納する配列 */
    var data = [];

    /* XMLHttpRequest */
    var request = new XMLHttpRequest();
    request.open("get", targetFile, false);
    request.send(null);

    /* CSVデータ */
    var csvData = request.responseText;

    /* CSVの全行を取得しちゃう */
    var lines = csvData.split("\n");

    for (var i = 0; i < lines.length; i++) {
        var wordSet = lines[i].split(",");
        var wordData = {
            name: wordSet[0],
            age: wordSet[1],
        };
        data.push(wordData);
    }
    document.write(lines[0]);
}

window.onload = function () {
    loadCSV("data.csv")
}