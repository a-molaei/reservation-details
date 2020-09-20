import * as AWS from "aws-sdk";
import * as uuid from "uuid/v4";
import { ReservationDetails } from "../models/reservationDetails";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function addReservationDetails(item: ReservationDetails) {
  item.id = uuid();
  const params = {
    TableName: "reservation-details",
    Item: item
  };
  try {
    const res = await dynamoDB
      .put(params)
      .promise();
    return res;
  } catch (err) {
    return err;
  }
}

export async function updateReservationDetails(item: ReservationDetails) {
  const params = {
    TableName: "reservation-details",
    Key: {
       id: item.id 
    },
    Item: item
  };
  try {
    const res = await dynamoDB
      .update(params)
      .promise();
    return res;
  } catch (err) {
    return err;
  }
}

export async function getReservationDetails(id: string) {
  const params = {
    TableName: "reservation-details",
    Key: {
      id
    }
  };
  try {
    const res = await dynamoDB
      .get(params)
      .promise();
    return res.Item;
  } catch (err) {
    return err;
  }
}
