const Sedan = {
    basic_servicing : 4000,
    engine_fixing : 8000,
    clutch_fixing : 4000,
    brake_fixing : 1500,
    gear_fixing : 6000,
}
const Hatchback = {
    basic_servicing : 2000,
    engine_fixing : 5000,
    clutch_fixing : 2000,
    brake_fixing : 1000,
    gear_fixing : 3000,
}
const SUV = {
    basic_servicing : 5000,
    engine_fixing : 10000,
    clutch_fixing : 6000,
    brake_fixing : 2500,
    gear_fixing : 8000,
}

Object.freeze(SUV)
Object.freeze(Sedan)
Object.freeze(Hatchback)