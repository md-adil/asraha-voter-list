const cheerio = require('cheerio');
const fs = require('fs');
const _ = require("lodash");

function load() {
    return cheerio.load(fs.readFileSync('./templates/nurchak.html'));
}

function scrap() {
    const $ = load();
    const data = [];
    const header = $('table#myTable thead th').map(function() {
        return $(this).text();
    }).toArray();

    $('table#myTable tbody tr').each(function() {
        const row = {};
        for (const i in header) {
            row[makeKey(header[i])] = $(this).find('td').eq(i).text();
        }
        data.push(row);
    });

    return data;
}

function saveData(data) {
    fs.writeFileSync('./public/nurchak.json', JSON.stringify(data));
}

function makeKey(title) {
    if (title === '#') {
        return 'id';
    }
    return _.snakeCase(title);
}

function main() {
    saveData(scrap());
}

main();