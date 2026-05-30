const clusterCarseConfig = { serverId: 4790, active: true };

const clusterCarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4790() {
    return clusterCarseConfig.active ? "OK" : "ERR";
}

console.log("Module clusterCarse loaded successfully.");