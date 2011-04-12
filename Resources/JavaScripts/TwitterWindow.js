// thanks: http://gihyo.jp/dev/serial/01/titanium

var win = Ti.UI.currentWindow;
var data = [];
var tableView = Ti.UI.createTableView({
	data:data
    });

function updateTimeline (timeline) {
    var currentData = [];
    for (var i=0;i<timeline.length;i++) {
        var tweet = timeline[i];
        var row = Ti.UI.createTableViewRow(
					   {
					       height: 150,
					       layout: 'vertical'
					   }
					   );

	var imageView = Ti.UI.createImageView(
					      {
						  image: tweet.user.profile_image_url,
						  width: 48,
						  height: 48,
						  top: 5,
						  left: 5
					      }
					      );
        row.add(imageView);

        var nameLabel = Ti.UI.createLabel(
					  {
					      width: 120,
					      height: 12,
					      left: 58,
					      top: -48,
					      fontSize: 6,
					      fontWeight: 'bold',
					      color: '#2b4771'
					  }
					  );
        nameLabel.text = tweet.user.screen_name;
        row.add(nameLabel);

        var commentLabel = Ti.UI.createLabel(
					     {
						 width: 257,
						 left: 58,
						 top: 1,
						 height: 100,
						 fontSize: 8
					     }
					     );
        commentLabel.text = tweet.text;
        row.add(commentLabel);

        var dateLabel = Ti.UI.createLabel(
					  {
					      width: 200,
					      height: 12,
					      left: 58,
					      top: 5,
					      fontSize: 6
					  }
					  );
        dateLabel.text = tweet.created_at;
        row.add(dateLabel);

        currentData.push(row);
    }
    tableView.setData(currentData);
}

var xhr = Ti.Network.createHTTPClient();
var user = 'tsuda';
var url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + user;
xhr.open('GET', url);
xhr.onload = function() {
    var timeline = JSON.parse(this.responseText);
    updateTimeline(timeline);
};
xhr.send();

win.add(tableView);
