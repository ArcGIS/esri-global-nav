import {$assign as $} from '../../shared/js/shared';

const prefix = 'esri-header-branding-stripe';

export default () => {
	const $target = $('div', {class: prefix, id: prefix});

	/* Brand: On Update
	/* ====================================================================== */
	$target.addEventListener('header:update:brand', ({detail}) => {
		$target.style.backgroundColor = detail.topStripe.color;
		$target.style.height = detail.topStripe.height;
		$target.style.top = `-${detail.topStripe.height}`;
		$target.classList.add('-visible');
	});

	return $target;
};

