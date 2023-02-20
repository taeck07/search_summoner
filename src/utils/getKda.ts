export const getKda = (kills:number, assists:number, deaths:number) => {
	if (!deaths) return 0;
	return ((kills + assists) / deaths).toFixed(2);
};