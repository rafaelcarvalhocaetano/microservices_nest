export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  FlightQueue = 'flights',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USERS',
  DELETE = 'DELETE_USERS',
  VALID = 'VALID_USERS',
}

export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGERS',
  DELETE = 'DELETE_PASSENGERS',
  VALID = 'VALID_PASSENGERS',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_FLIGHT',
  UPDATE = 'UPDATE_FLIGHTS',
  DELETE = 'DELETE_FLIGHTS',
  VALID = 'VALID_FLIGHTS',
}
