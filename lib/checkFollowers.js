module.exports = { checkFollowerCount };

function checkFollowerCount(content) {
  return content.replace(
    /<!-- follower-counter -->(\d+)<!-- \/follower-counter -->/,
    (_content, counter) =>
      `<!-- follower-counter -->${Number(counter) + 1}<!-- /follower-counter -->`
  );
}