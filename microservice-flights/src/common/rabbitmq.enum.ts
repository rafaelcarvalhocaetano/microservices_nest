export enum RabbitMQ {
  FlightQueue = 'flights',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_FLIGHT',
  UPDATE = 'UPDATE_FLIGHTS',
  DELETE = 'DELETE_FLIGHTS',
  VALID = 'VALID_FLIGHTS',
  ADD_PASSENGER='ADD_PASSENGER'
}
