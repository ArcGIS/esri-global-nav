import {$assign as $, $dispatch, $replaceAll, $renderSvgOrImg} from '../../shared/js/shared';

const prefix = 'esri-header-brand';

export default () => {
	const $target = $('a', {class: prefix, id: prefix});

	// On Click
	$target.addEventListener('click', (event) => {
		$dispatch($target, 'header:click:brand', {event});
	});

	/* Brand: On Update
	/* ====================================================================== */
	$target.addEventListener('header:update:brand', ({detail}) => {
		$($target, {href: detail.href, aria: {label: detail.label}});
		$renderSvgOrImg({imgDef: detail.image, imgClass: `${prefix}-image`, imgWidth: detail.width, imgHeight:detail.height, $targetElm:$target});
	});

	return $target;
};
