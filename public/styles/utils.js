import { size, unit } from "./";

// ----- Text Utils -----
const blcParagraphSize = (size_name) => {
	switch (size_name) {
	case "largest":
		return size.pLargest
	case "larger":
		return size.pLarger
	case "smaller":
		return size.pSmaller
	case "smallest":
		return size.pSmallest
	case "inherit":
		return size.inherit
	default:
		return size.p
	}
}

const blcParagraphLineHeight = (size_name) => {
	switch (size_name) {
	case "largest":
		return size.pLargestLineHeight
	case "larger":
		return size.pLargerLineHeight
	case "smaller":
		return size.pSmallerLineHeight
	case "smallest":
		return size.pSmallestLineHeight
	case "inherit":
		return size.inherit
	default:
		return size.pLineHeight
	}
}

// ----- Icon Utils -----
const blcIconSize = (size_name) => {
	switch (size_name) {
	case "largest":
		return size.iconLargest
	case "larger":
		return size.iconLarger
	case "smaller":
		return size.iconSmaller
	case "smallest":
		return size.iconSmallest
	case "inherit":
		return '100%'
	default:
		return size.icon
	}
}

// ----- Button Utils -----
const blcButtonSize = (size_name) => {
	switch (size_name) {
	case "largest":
		return size.pLargest
	case "larger":
		return size.pLarger
	case "smaller":
		return size.pSmaller
	case "smallest":
		return size.pSmallest
	default:
		return size.p
	}
}

const blcButtonPadding = (size_name) => {
	switch (size_name) {
	case "largest":
		return unit(2.5) + ' ' + size.marginLargest
	case "larger":
		return unit(2.125) + ' ' + size.marginLarger
	case "smaller":
		return unit(.875) + ' ' + size.marginSmaller
	case "smallest":
		return unit(.5) + ' ' + size.marginSmallest
	default:
		return unit(1.75) + ' ' + size.margin
	}
}

const blcButtonRadius = (size_name) => {
	switch (size_name) {
	case "largest":
		return unit(4)
	case "larger":
		return unit(3.5)
	case "smaller":
		return unit(2)
	case "smallest":
		return unit(1.5)
	default:
		return unit(3)
	}
}

// ----- Grid Utils -----
const blcContainerSize = (size_name) => {
	switch (size_name) {
	case "largest":
		return size.containerLargest
	case "larger":
		return size.containerLarger
	case "smaller":
		return size.containerSmaller
	case "smallest":
		return size.containerSmallest
	default:
		return size.container
	}
}

const blcColumnGutter = (size_name) => {
	switch (size_name) {
	case "largest":
		return 40
	case "larger":
		return 32
	case "smaller":
		return 16
	case "smallest":
		return 8
	case "inherit":
		return 0
	default:
		return 24
	}
}

const util = {
	blcParagraphSize,
	blcParagraphLineHeight,
	blcIconSize,
	blcButtonSize,
	blcButtonPadding,
	blcButtonRadius,
	blcContainerSize,
	blcColumnGutter
}

export default util
