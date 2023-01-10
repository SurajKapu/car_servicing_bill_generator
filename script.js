let cars = document.getElementById("cars");  

let basic_servicing = document.getElementById("Basic_Servicing");  
let engine_fixing = document.getElementById("Engine_Fixing");  
let clutch_fixing = document.getElementById("Clutch_Fixing");  
let brake_fixing = document.getElementById("Brake_Fixing");  
let gear_fixing = document.getElementById("Gear_Fixing"); 

let bill_body = document.getElementById("bill_body");


function generate_bill() {
    let new_bill = get_bill_obj();
    let used_services = get_used_services();
    display_bill(new_bill, used_services)
}

function display_bill(new_bill, used_services) {
    let bill_data = "<tr>"
    let index = 0
    used_services.map(service => {
        let serial = index + 1;
        let service_price = new_bill.add_service(service)
        bill_data += `<td>${serial}</td>`
        bill_data += `<td>${used_services[index]}</td>`
        bill_data += `<td>${service_price}</td>`
        bill_data += '</tr>'
        index++
    })
    let total_bill = new_bill.get_bill()
    let provide_cleaning = check_cleaning(total_bill);
    if(provide_cleaning)
        bill_data += `<tr>
            <td>${index+1}</td>
            <td>Cleaning</td>
            <td>0</td>
        <tr>`
    bill_data += `
    <tr>
        <td></td>
        <td>TOTAL</td>
        <td>${total_bill}</td>
    </tr>
    `
    bill_body.innerHTML = bill_data
}

function check_cleaning(total_bill) {
    return total_bill > 10000;
}

function get_car() {
    return cars.value;
}

function get_bill_obj() {
    let car = get_car();
    let new_bill;

    if(car == "Hatchback")
        new_bill = new Bill(Hatchback);
    
    if(car == "Sedan")
        new_bill = new Bill(Sedan);
        
    if(car == "SUV")
        new_bill = new Bill(SUV);
    
    return new_bill
}

function get_used_services() {
    let used_services= []
    let services = new Services()
    basic_servicing.checked ? used_services.push(services.use_basic_servicing()) : "";
    engine_fixing.checked ? used_services.push(services.use_engine_fixing()) : "";
    clutch_fixing.checked ? used_services.push(services.use_clutch_fixing()) : "";
    brake_fixing.checked ? used_services.push(services.use_brake_fixing()) : "";
    gear_fixing.checked ? used_services.push(services.use_gear_fixing()) : "";
    return used_services
}