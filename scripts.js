const isCurrentGridMethodAreas = () => {
	const currentGridMethod = document.body.getAttribute('data-grid-method');
	
	return 'areas' === currentGridMethod;
};

const updateGridMethodCurrentState = (
	currentGridMethodIsAreas
) => {
	const gridMethodCurrentState = document.getElementById('gridMethodCurrentState');
	
	if (true === currentGridMethodIsAreas)
	{
		gridMethodCurrentState.innerHTML = 'Currently using Grid-Areas';
	}
	else
	{
		gridMethodCurrentState.innerHTML = 'Currently using Grid-Columns';
	}
};

const handleToggleGridMethodButtonClicked = (
	event
) => {
	event.preventDefault();
	event.stopPropagation();
	
	const currentGridMethodIsAreas = isCurrentGridMethodAreas();
	
	if (true === currentGridMethodIsAreas)
	{
		document.body.setAttribute(
			'data-grid-method',
			'columns'
		);
		updateGridMethodCurrentState(!currentGridMethodIsAreas);
	}
	else
	{
		document.body.setAttribute(
			'data-grid-method',
			'areas'
		);
		updateGridMethodCurrentState(!currentGridMethodIsAreas);
	}
};


updateGridMethodCurrentState(
	isCurrentGridMethodAreas()
);