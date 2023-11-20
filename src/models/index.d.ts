import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum PerformerEventTimespan {
  FIFTEEN_MINUTE = "FIFTEEN_MINUTE",
  TWENTY_MINUTE = "TWENTY_MINUTE",
  THIRTY_MINUTE = "THIRTY_MINUTE",
  HOUR = "HOUR",
  HOUR_AND_A_HALF = "HOUR_AND_A_HALF",
  TWO_HOUR = "TWO_HOUR"
}



type EagerPerformerEventAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PerformerEventAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Event?: Event | null;
  readonly Performer?: Event | null;
  readonly timespan?: PerformerEventTimespan | keyof typeof PerformerEventTimespan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly performerEventAssignmentEventId?: string | null;
  readonly performerEventAssignmentPerformerId?: string | null;
}

type LazyPerformerEventAssignment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PerformerEventAssignment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Event: AsyncItem<Event | undefined>;
  readonly Performer: AsyncItem<Event | undefined>;
  readonly timespan?: PerformerEventTimespan | keyof typeof PerformerEventTimespan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly performerEventAssignmentEventId?: string | null;
  readonly performerEventAssignmentPerformerId?: string | null;
}

export declare type PerformerEventAssignment = LazyLoading extends LazyLoadingDisabled ? EagerPerformerEventAssignment : LazyPerformerEventAssignment

export declare const PerformerEventAssignment: (new (init: ModelInit<PerformerEventAssignment>) => PerformerEventAssignment) & {
  copyOf(source: PerformerEventAssignment, mutator: (draft: MutableModel<PerformerEventAssignment>) => MutableModel<PerformerEventAssignment> | void): PerformerEventAssignment;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startTime?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startTime?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerPerformer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Performer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly djName?: string | null;
  readonly furName?: string | null;
  readonly performerDescribedGenres?: (string | null)[] | null;
  readonly discordId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerformer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Performer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly djName?: string | null;
  readonly furName?: string | null;
  readonly performerDescribedGenres?: (string | null)[] | null;
  readonly discordId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Performer = LazyLoading extends LazyLoadingDisabled ? EagerPerformer : LazyPerformer

export declare const Performer: (new (init: ModelInit<Performer>) => Performer) & {
  copyOf(source: Performer, mutator: (draft: MutableModel<Performer>) => MutableModel<Performer> | void): Performer;
}