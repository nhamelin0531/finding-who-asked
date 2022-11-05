// JS dev moment
import fetch from 'node-fetch'
const search = fetch
import * as cheerio from 'cheerio'
// end imports

// if god had wanted you to live he would not have created me
let whoAsked = async (statement) => {
    let unalteredStatement = statement
    statement = statement.trim().replace(' ', '%20')
    const response = await search(`https://www.reddit.com/search/?q=${statement}&source=recent&include_over_18=1`)
    const html = await response.text()

    const $ = cheerio.load(html)

    console.log(`The statement is: ${unalteredStatement}`)

    let filtered = $('._1MTbwSHIISfMYM16YhZ8kN').find('div').toArray().filter(text => $(text).text().toUpperCase().includes(unalteredStatement.toUpperCase().trim()))

    console.log(`${filtered.length} people asked`)
}

// This is where the fun begins
whoAsked('hello there')