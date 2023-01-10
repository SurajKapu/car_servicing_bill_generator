class Bill {

    constructor(obj) {
        this.bill = 0
        this.BS01 = obj.basic_servicing
        this.EF01 = obj.engine_fixing
        this.CF01 = obj.clutch_fixing
        this.BF01 = obj.brake_fixing
        this.GF01 = obj.gear_fixing 
    }

    add_service(service) {
        let service_price = 0
        service == "BS01" ? service_price = this.BS01 : "" 
        service == "EF01" ? service_price = this.EF01 : "" 
        service == "CF01" ? service_price = this.CF01 : "" 
        service == "BF01" ? service_price = this.BF01 : "" 
        service == "GF01" ? service_price = this.GF01 : "" 
        this.bill += service_price
        return service_price
    }

    get_bill() {
        return this.bill
    }
}