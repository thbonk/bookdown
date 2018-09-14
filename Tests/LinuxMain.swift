import XCTest

import bookdownTests

var tests = [XCTestCaseEntry]()
tests += bookdownTests.allTests()
XCTMain(tests)