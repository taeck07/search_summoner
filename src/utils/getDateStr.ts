import moment from "moment";

export const getDateKoStr = (timestamp: number) => {
	const targetDate = moment.unix(timestamp);
	const today = moment(new Date());
	const diffDays = today.diff(targetDate, "days");
	if (!diffDays) {
		const diffMins = today.diff(targetDate, "minutes");
		if (diffMins<60) {
			return `${diffMins}분 전`;
		}
		const diffHours = today.diff(targetDate, "hours");
		return `${diffHours}시간 전`;
	}
	if (diffDays === 1) {
		return "하루전";
	}
	if (diffDays <= 30) {
		return `${diffDays}일 전`;
	}
	const diffMonths = today.diff(targetDate, "months");
	return `${diffMonths}달 전`;
};

export const getTimeKoStr = (sec: number) => {
	let targetSec = sec;
	let timeStr = "";
	if (targetSec > 60*60) {
		timeStr += `${Math.floor(targetSec / (60*60))}시간`;
		targetSec = targetSec % (60*60);
	}
	if (targetSec > 60) {
		timeStr += ` ${Math.floor(targetSec / (60))}분`;
		targetSec = targetSec % (60);
	}
	targetSec && (timeStr += ` ${targetSec}초`);
	return timeStr;
};