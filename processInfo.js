console.log("Version: " + process.version);
console.log("Platform: " + process.platform);
console.log("Process ID: " + process.pid);
setInterval(() => {
	console.log(process.memoryUsage()); 
}, 5000);
