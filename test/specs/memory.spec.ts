import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";

type O = Ibdd_out<
  { Default: ['MemoryManager Test Suite'] },
  { Default: [] },
  {
    storeInteraction: [string, string];
    getContext: [string];
    scrapePage: [string];
    getStats: [];
    getScraped: [string?];
  },
  {
    verifyContextCount: [number];
    verifyContextContent: [string];
    verifyScrapeSuccess: [];
    verifyStats: [];
    verifyScrapedContent: [string?];
  }
>;

export const MemorySpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default('Core Operations', {
    emptyTest: Given.Default(
      ['Should start with empty memory'],
      [],
      [Then.verifyStats()]
    ),
    storeTest: Given.Default(
      ['Should store interactions'],
      [When.storeInteraction('hello', 'hi there')],
      [Then.verifyContextCount(1), Then.verifyContextContent('hello')]
    ),
    contextTest: Given.Default(
      ['Should retrieve context'],
      [
        When.storeInteraction('msg1', 'response1'),
        When.storeInteraction('msg2', 'response2'),
        When.getContext('test')
      ],
      [Then.verifyContextCount(2)]
    )
  }),
  Suite.Default('Web Scraping', {
    scrapeTest: Given.Default(
      ['Should scrape web pages'],
      [When.scrapePage('http://example.com')],
      [Then.verifyScrapeSuccess()]
    ),
    statsTest: Given.Default(
      ['Should get memory stats'],
      [When.getStats()],
      [Then.verifyStats()]
    ),
    contentTest: Given.Default(
      ['Should retrieve scraped content'],
      [
        When.scrapePage('http://example.com'),
        When.getScraped('http://example.com')
      ],
      [Then.verifyScrapedContent()]
    )
  })
];
