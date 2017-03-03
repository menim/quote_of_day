				/* Initialize swipe*/
var mySwipe = Swipe(document.getElementById('slider'), {continuous: false});
document.getElementById('description-btn').onclick = mySwipe.prev;
document.getElementById('quote-btn').onclick = mySwipe.next;




var elements = function(){
	var quote = document.getElementById("quote"),
    	author = document.getElementsByClassName("author")[0],
    	author2 = document.getElementsByClassName("author")[1],
    	year = document.getElementById("year"),
   		description = document.getElementById("description"),
    	linkTo = document.getElementById("url"),
    	cover = document.getElementById("book-img"),
    	spreadUrl ='http://spreadsheets.google.com/feeds/list/17T8jqTsiOdfGXKhAg21cpJAfV6zSHzuMF-nXbk0ltHs/od6/public/values?alt=json',
											/* Get day of the full year 
													@return {number}
											*/
			getDateOfYear = function(){
				var now = new Date(),
						start = new Date(now.getFullYear(),0,0),
						diff = now-start,
						oneDay = 864e5; /* number of 24 hours day in seconds 86400000*/
	 			return Math.floor(diff/oneDay);
			}(),
											/* if word less than 3 letters, move to next line
															@param { string } str;
															@return { string }; 
											*/
			hangingWords = function(str){			
				var arr=str.split(" "),
						arrLen = arr.length;
				for(var i=0;i<arrLen;i++){
					arr[i]+=(arr[i].length<=3) ? "&nbsp;" : " ";
				}
				return arr.join("");
			},
												/* Get json from the server with xmlhttprequest
															@param {string} url
																		 {function} callback	 
												 */
			/*getJSON = function(url, callback){
				var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
				var xhr = new XHR();
				xhr.open("get", url, true);
				xhr.responseType = "json";
				xhr.onload = function(){
					var status = xhr.status;
					if(status == 200){
						callback(xhr.response);
					}
					else {
						callback(status);
					}
				};	
				xhr.send();
			};*/
		getJSON= function(url, successHandler, errorHandler) {
			var xhr = typeof XMLHttpRequest != 'undefined'
				? new XMLHttpRequest()
				: new ActiveXObject('Microsoft.XMLHTTP');
			xhr.open('get', url, true);
			xhr.onreadystatechange = function() {
				var status;
				var data;
				// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
				if (xhr.readyState == 4) { // `DONE`
					status = xhr.status;
					if (status == 200) {
						data = JSON.parse(xhr.responseText);
						successHandler && successHandler(data);
					} else {
						errorHandler && errorHandler(status);
					}
				}
			};
			xhr.send();
		};

	return {
		quote: quote,
		author: author,
		author2: author2,
		year: year,
		description: description,
		cover: cover,
		linkTo: linkTo,
		spreadUrl: spreadUrl,
		getDateOfYear: getDateOfYear,
		hangingWords: hangingWords,
		getJSON: getJSON
	}
}();



function init(elements){

							/*Get day of year and equals to spreadsheet length 
								@param {Number} datalen;
								@return {Number} day;
							*/
	function getDay(dataLen){
		var day = 0;
		if((elements.getDateOfYear-dataLen)>dataLen){
			day = elements.getDateOfYear-dataLen*2;
		}
		else {
			day = (elements.getDateOfYear<=dataLen) ? elements.getDateOfYear : elements.getDateOfYear - dataLen;
		}

		return day;
	}

			/* Function that set data to dom elements 
						@param {Object} data;
 			*/

	function initData(data){
		var spreadsheetData = data.feed.entry,
				spreadsheetDataLen = spreadsheetData.length-1,
				day = getDay(spreadsheetDataLen);
				elements.quote.innerHTML = elements.hangingWords(spreadsheetData[day].gsx$qoute.$t);
				elements.author.innerHTML = elements.author2.innerHTML = spreadsheetData[day].gsx$author.$t;
				elements.year.innerHTML = spreadsheetData[day].gsx$years.$t;
				elements.description.innerHTML = elements.hangingWords(spreadsheetData[day].gsx$authordescription.$t);
				elements.cover.src = 'pictures/' + spreadsheetData[day].gsx$cover.$t;
				elements.linkTo.href = spreadsheetData[day].gsx$linktolitress.$t;
		}
	
	if(""){
		fetch(elements.spreadUrl, {method: 'get'})
		.then(function(response){
			if(response.ok){
				return response.json();
			}
			throw new Error('Network response not work ok');
		})
		.then(initData)
		.catch(function(error){
			console.log('There has been a error with fetch:'+error.message);
		});
	}
	else {
		elements.getJSON(elements.spreadUrl, initData);
	}
}

init(elements);
