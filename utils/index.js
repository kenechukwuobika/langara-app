class Utils {

	static getNameInitial(name) {
		let initials = name.match(/\b\w/g) || [];
		return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
	}

	static getRouteInfo(navTree, path) {
		if( navTree.path === path ){
		  return navTree;
		}
		let route; 
		for (let p in navTree) {
		  if( navTree.hasOwnProperty(p) && typeof navTree[p] === 'object' ) {
				route = this.getRouteInfo(navTree[p], path);
				if(route){
					return route;
				}
		  }
		}
		return route;
	}	

	static getColorContrast(hex){
		if(!hex) {
			return 'dark'
		}
		const threshold = 130;
		const hRed = hexToR(hex);
		const hGreen = hexToG(hex);
		const hBlue = hexToB(hex);
		function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
		function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
		function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
		function cutHex(h) {return (h.charAt(0) === '#') ? h.substring(1,7):h}
		const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
		if (cBrightness > threshold){
			return 'dark'
		} else { 
			return 'light'
		}	
	}

	static shadeColor(color, percent) {
		let R = parseInt(color.substring(1,3),16);
		let G = parseInt(color.substring(3,5),16);
		let B = parseInt(color.substring(5,7),16);
		R = parseInt(R * (100 + percent) / 100);
		G = parseInt(G * (100 + percent) / 100);
		B = parseInt(B * (100 + percent) / 100);
		R = (R<255)?R:255;  
		G = (G<255)?G:255;  
		B = (B<255)?B:255;  
		const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
		const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
		const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));
		return `#${RR}${GG}${BB}`; 
	}

	static rgbaToHex(rgba) {
		const trim = str => (str.replace(/^\s+|\s+$/gm,''))
		const inParts = rgba.substring(rgba.indexOf("(")).split(","),
			r = parseInt(trim(inParts[0].substring(1)), 10),
			g = parseInt(trim(inParts[1]), 10),
			b = parseInt(trim(inParts[2]), 10),
			a = parseFloat(trim(inParts[3].substring(0, inParts[3].length - 1))).toFixed(2);
			const outParts = [
			r.toString(16),
			g.toString(16),
			b.toString(16),
			Math.round(a * 255).toString(16).substring(0, 2)
		];

		outParts.forEach(function (part, i) {
			if (part.length === 1) {
				outParts[i] = '0' + part;
			}
		})
		return (`#${outParts.join('')}`);
	}

	static getSignNum(number, positive, negative) {
		if (number > 0) {
			return positive
		}
		if (number < 0) {
			return negative
		}
		return null
	}

	static antdTableSorter(a, b, key) {
		if(typeof a[key] === 'number' && typeof b[key] === 'number') {
			return a[key] - b[key]
		}

		if(typeof a[key] === 'string' && typeof b[key] === 'string') {
			a = a[key].toLowerCase();
			b = b[key].toLowerCase();
			return a > b ? -1 : b > a ? 1 : 0;
		}
		return
	}

	static filterArray(list, key, value) {
		let data = list
		if(list) {
			data = list.filter(item => item[key] === value)
		}
		return data
	}

	static deleteArrayRow(list, key, value) {
		let data = list
		if(list) {
			data = list.filter(item => item[key] !== value)
		}
		return data
	}

	static wildCardSearch(list, input) {
		const searchText = (item) => {
			for (let key in item) {
				if (item[key] == null) {
					continue;
				}
				if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
					return true;
				}
			}
		};
		list = list.filter(value => searchText(value));
		return list;
	}

	static getBreakPoint(screens) {
		let breakpoints = []
		for (const key in screens) {
			if (screens.hasOwnProperty(key)) {
				const element = screens[key];
				if (element) {
					breakpoints.push(key)
				}
			}
		}
		return breakpoints
	}

	static formatNumber = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	static titleCase = (string) => {
		return string.replace(
			/\w\S*/g,
			function(txt) {
			  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		);
	}

	static concat() {
		let str = '';
		for(let i=0; i < arguments.length; i++) {
		  str += '&'+arguments[i];
		}
		return str;
	  }
}

export default Utils;