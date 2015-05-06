chrome.browserAction.onClicked.addListener(function(activeTab)
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', chrome.extension.getURL('ips.txt'), true);
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
		{
			//... The content has been read in xhr.responseText
			urls = xhr.responseText.split("\n");
			total = urls.length;
			if (total > 0)
			{
				choice = getRandomArbitrary(0, total-1);
				var google_ip = "http://" + urls[choice];
				chrome.tabs.create({url: google_ip});
			}
		}
	};
	xhr.send();
});

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    var choice = Math.random() * (max - min) + min;
    return parseInt(choice);
}
