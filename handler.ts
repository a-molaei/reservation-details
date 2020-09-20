import { APIGatewayEvent, Context, Handler } from "aws-lambda";

import * as dbHandler from "./db-actions";
import { ReservationDetails } from "./models/reservationDetails";

export const respond = (fulfillmentText: any, statusCode: number): any => {
  return {
    statusCode,
    body: JSON.stringify(fulfillmentText),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};

export const addReservationDetails: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const item: ReservationDetails = JSON.parse(event.body);
  try {
   const res = await dbHandler.addReservationDetails(item);

    return respond(res, 201);
  } catch (err) {
    return respond(err, 400);
  }
};

export const updateReservationDetails: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const item: ReservationDetails = JSON.parse(event.body);

  try {
   const res = await dbHandler.updateReservationDetails(item);

    return respond(res, 201);
  } catch (err) {
    return respond(err, 400);
  }
};

export const getReservationDetails: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const id: string = event.pathParameters.id;

  try {
    const item = await dbHandler.getReservationDetails(id);

    return respond(item, 200);
  } catch (err) {
    return respond(err, 404);
  }
};
