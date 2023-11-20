// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PerformerEventTimespan = {
  "FIFTEEN_MINUTE": "FIFTEEN_MINUTE",
  "TWENTY_MINUTE": "TWENTY_MINUTE",
  "THIRTY_MINUTE": "THIRTY_MINUTE",
  "HOUR": "HOUR",
  "HOUR_AND_A_HALF": "HOUR_AND_A_HALF",
  "TWO_HOUR": "TWO_HOUR"
};

const { PerformerEventAssignment, Event, Performer } = initSchema(schema);

export {
  PerformerEventAssignment,
  Event,
  Performer,
  PerformerEventTimespan
};