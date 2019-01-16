var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let set = new Set();
    for (let j = 0; j <= s.length; j++) {
        if (set.has(s[j])) {
          (set.size > maxLength) && (maxLength = set.size);
          set = new Set();
        }
        set.add(s[j]);
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
