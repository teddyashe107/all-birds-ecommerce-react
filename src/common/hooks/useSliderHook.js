import {useState, useCallback, useRef} from 'react'

const useSliderHook = (scroller) => {
    const [active, setActive] = useState(0);
    const previousIndex = useRef(0)

    	const prev = useCallback((index) => {
		console.log('prev is called');
		const scrollLeft = scroller.current.scrollLeft;
		const itemWidth = parseInt(
			getComputedStyle(scroller.current.children[0]).width
		);

		scroller.current.scrollLeft = scrollLeft - itemWidth * index;
	}, []);

    	const next = (index) => {
		console.log('next is called with index', index);
		requestAnimationFrame(() => {
			const scrollLeft = scroller.current.scrollLeft;
			const itemWidth = parseInt(
				getComputedStyle(scroller.current.children[0]).width
			);
			console.log(scrollLeft);
			console.log(itemWidth, 'item width');
			scroller.current.scrollLeft = scrollLeft + itemWidth * index;
		});
	};


	const slide = (index) => {
		if (index === previousIndex.current) return;
		if (index > previousIndex.current) {
			next(index);
			previousIndex.current = index;
		} else {
			if (index === 0) {
				prev(2);
			}
			prev(index);
			previousIndex.current = index;
		}
	};

    	const handleSlider = (index) => {
		setActive(index);
		slide(index);
	};

    return {
        prev,
        next,
        handleSlider,
        active,
    }
}

export default useSliderHook;