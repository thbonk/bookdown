import XCTest
@testable import bookdown

final class bookdownTests: XCTestCase {
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
        XCTAssertEqual(bookdown().text, "Hello, World!")
    }


    static var allTests = [
        ("testExample", testExample),
    ]
}
