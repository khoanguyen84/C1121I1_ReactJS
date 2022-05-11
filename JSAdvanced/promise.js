// Tỉnh thành phố
    // Quận huyện
        // Phường xã

// - hiển thị được danh sách TTP            2s
    // - hiển thị danh sách QH theo TTPID   3s
        // - hiển thị phường/xã theo QHId   1.5s

// đồng bộ/ bất đồng bộ (sync/async)
// callback hell

// promise chain (chuổi promise)
const promise = new Promise(
    // logic/ nghiệp vụ
    // excutor
    function(resolve, reject){
        resolve(0)
        // reject("Thất bại")
    }
)

promise
    .then(function(data){
        data += 1;
        console.log('step 1: ', data)
        return data;
    })
    .then(function(data){
        data += 1;
        console.log('step 2: ', data)
        return data;
    })
    .then(function(data){
        data += 1;
        console.log('step 2: ', data)
        return data;
    })
    .then(function(data){
        data += 1;
        console.log('step 2: ', data)
        return data;
    })
    .then(function(data){
        data += 1;
        console.log('step 2: ', data)
        return data;
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("Done")
    })