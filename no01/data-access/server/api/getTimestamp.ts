export default defineEventHandler(
	(event) => {
        const now = new Date();
		return {
            timestamp: now.toLocaleString()
        };
	}
);
