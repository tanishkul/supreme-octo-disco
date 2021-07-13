# supreme-octo-disco 
This repository consists of the solutions of some problems. The solutions are basically in Javascript using Nodejs.
- **Shuffle Array-**
    The problem is that there is an array of length 2n {a1, a2, a3, ..., an, b1, b2, b3, ..., bn}, hope to sort {a1, b1, a2, b2, ..., an, bn}, Please Consider the       solution of time complexity o(n) and space complexity 0(1).
    
    **Solution**: https://github.com/tanishkul/supreme-octo-disco/blob/main/src/shuffleArray.js
   
- **HTTP API in Nodejs using promises-**
    Write an HTTP GET method to retrieve information from a particular articles database. Complete the function in the editor, it has one parameter: a string           author. The function must perform the following tasks:

    Query https://jsonmock.hackerrank.com/api/articles?author=author&page=page (where author is the value of author). The query response from the website is a JSON     response with the following five fields:
  •   page: The current page.
  •   per_page: The maximum number of results per page.
  •   total: The total number of such movies having the substring author in their title.
  •   total_pages: The total number of pages which must be queried to get all the results.
    • data: An array of JSON objects containing movie information where the Title field denotes the title of the article. Note that this field is paginated so, in         order to incorporate pagination, you must query https://jsonmock.hackerrank.com/api/articles?author=author&page=pageNumber, where pageNumber is an
      integer denoting the page you would like to view (e.g., 1, 2, etc.).

    Create an array of strings named titles to store total elements. For each page of results, store the Title of each article in the titles array. Sort titles in       ascending order and return it as your answer.
    Input:  saintamh
            coloneltcb
            epaga
    
    **Solution**: https://github.com/tanishkul/supreme-octo-disco/blob/main/src/httpsApi.js

- **House Robber Problem-**
    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

    Example 1:

    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.

    Example 2:

    Input: nums = [2,7,9,3,1]
    Output: 12
    Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
    Total amount you can rob = 2 + 9 + 1 = 12.

    Constraints:

    1 <= nums.length <= 100
    0 <= nums[i] <= 400

    **Solution**: https://github.com/tanishkul/supreme-octo-disco/blob/main/src/houseRobber.js