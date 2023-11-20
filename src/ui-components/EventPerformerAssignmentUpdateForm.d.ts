/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventPerformerAssignment } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventPerformerAssignmentUpdateFormInputValues = {
    slot_index?: number;
    slot_length?: string;
};
export declare type EventPerformerAssignmentUpdateFormValidationValues = {
    slot_index?: ValidationFunction<number>;
    slot_length?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventPerformerAssignmentUpdateFormOverridesProps = {
    EventPerformerAssignmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    slot_index?: PrimitiveOverrideProps<TextFieldProps>;
    slot_length?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type EventPerformerAssignmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventPerformerAssignmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventPerformerAssignment?: EventPerformerAssignment;
    onSubmit?: (fields: EventPerformerAssignmentUpdateFormInputValues) => EventPerformerAssignmentUpdateFormInputValues;
    onSuccess?: (fields: EventPerformerAssignmentUpdateFormInputValues) => void;
    onError?: (fields: EventPerformerAssignmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventPerformerAssignmentUpdateFormInputValues) => EventPerformerAssignmentUpdateFormInputValues;
    onValidate?: EventPerformerAssignmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventPerformerAssignmentUpdateForm(props: EventPerformerAssignmentUpdateFormProps): React.ReactElement;
