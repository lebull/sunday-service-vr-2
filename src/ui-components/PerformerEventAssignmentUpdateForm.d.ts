/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { PerformerEventAssignment } from "../models";
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
export declare type PerformerEventAssignmentUpdateFormInputValues = {
    timespan?: string;
};
export declare type PerformerEventAssignmentUpdateFormValidationValues = {
    timespan?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformerEventAssignmentUpdateFormOverridesProps = {
    PerformerEventAssignmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timespan?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PerformerEventAssignmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: PerformerEventAssignmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    performerEventAssignment?: PerformerEventAssignment;
    onSubmit?: (fields: PerformerEventAssignmentUpdateFormInputValues) => PerformerEventAssignmentUpdateFormInputValues;
    onSuccess?: (fields: PerformerEventAssignmentUpdateFormInputValues) => void;
    onError?: (fields: PerformerEventAssignmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerformerEventAssignmentUpdateFormInputValues) => PerformerEventAssignmentUpdateFormInputValues;
    onValidate?: PerformerEventAssignmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PerformerEventAssignmentUpdateForm(props: PerformerEventAssignmentUpdateFormProps): React.ReactElement;
