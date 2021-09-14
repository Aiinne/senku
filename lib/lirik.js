const puppeteer = require('puppeteer')


async function Lirik(search) {
        if (!search) {
            return {
                status: false,
                creator: 'Takayui',
                message: 'Silahkan isi query search, contoh ?search=mitis moments'
            }
        }

        const keyword = search.replace(/ /g, '+')
        const url = `https://lirik.web.id/results/?q=${keyword}`

        const browser = await puppeteer.launch({
            headers: {
                'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'
            },
            options: { 
                args: ["--proxy-server='direct://'", '--proxy-bypass-list=*', '--no-sandbox', '--disable-setuid-sandbox'], 
                headless: true 
            }
        })

        try {
            const page = await browser.newPage()
            await page.goto(url)
            const xpathResult = '//div[@id="siteloader"]'
            await page.waitForXPath(xpathResult)
            const [elementsResult] = await page.$x(xpathResult)
            const firstResultUrl = await page.evaluate((element) => {
                const searchResult = element.querySelectorAll('p')
                if (searchResult.length === 0) {
                    return null
                }
                // return first result
                return searchResult[0].querySelector('a').getAttribute('href')
            }, elementsResult)

            if (firstResultUrl) {
                await page.goto(firstResultUrl)

                const xpathMainContent = '//div[@class="entry-content"]'
                await page.waitForXPath(xpathMainContent)
                const [elementsMainContent] = await page.$x(xpathMainContent)
                const mainContentResult = await page.evaluate((element) => {
                    const lyricParagraph = element.querySelectorAll('p')
                    const title = element.querySelector('h1.entry-title').innerText

                    const temp = []
                    // minus 1, because no need last element
                    for (let i = 0; i < (lyricParagraph.length - 1); i++) {
                        temp.push(lyricParagraph[i].innerText)
                    }

                    return { title, lyric: temp }
                }, elementsMainContent)
                await browser.close();
                return mainContentResult
            }

            return {
                status: false,
                creator: 'Takayui',
                message: 'Maaf, tidak ada hasil untuk mu'
            }
        } catch (err) {
            return {
                status: false,
                creator: 'Takayui',
                message: err.message
            }
        }
    }

module.exports = Lirik
