const baseUnit = 8;

const unit = (n) => {
	return (
		n * baseUnit + "px"
	)
}

const size = {
	// ----- Global Units -----
	unit:					unit(1),
	line:					unit(.375),
	border:					unit(.25),
	columns:				12,
	inherit:				'inherit',

	marginLargest:			unit(5),
	marginLarger:			unit(4),
	margin:					unit(3),
	marginSmaller:			unit(2),
	marginSmallest:			unit(1),

	// ----- Container -----
	containerLargest:		unit(320),
	containerLarger:		unit(240),
	container:				unit(160),
	containerSmaller:		unit(120),
	containerSmallest:		unit(80),

	// ----- Font Sizes -----
	// Headlines:
	h1:					 	unit(7),
	h2:					 	unit(6),
	h3:					 	unit(5),
	h4:					 	unit(4),
	h5:					 	unit(3),
	h6:					 	unit(2),

	h1LineHeight:		   	1.14, // unit(8)
	h2LineHeight:		   	1.17, // unit(7)
	h3LineHeight:		   	1.20, // unit(6)
	h4LineHeight:		   	1.25, // unit(5)
	h5LineHeight:		   	1.33, // unit(4)
	h6LineHeight:		   	1.50, // unit(3)

	// Paragraph:
	pLargest:			   	unit(2.5),
	pLarger:				unit(2.25),
	p:					  	unit(2),
	pSmaller:			   	unit(1.75),
	pSmallest:			  	unit(1.5),

	pLargestLineHeight:	 	1.50,
	pLargerLineHeight:	  	1.56,
	pLineHeight:			1.50,
	pSmallerLineHeight:	 	1.43,
	pSmallestLineHeight:	1.50,

	// ----- Components -----
	header: 				unit(9)
}

const weight = {
	// ----- Font Weights -----
	bold:				   	700,
	regular:				400
}

//for docz compatibility
module.exports = {
	size: size,
	weight: weight,
	unit: unit
};
