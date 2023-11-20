/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type PerformerEventAssignmentCreateFormInputValues = {
    timespan?: string;
};
export declare type PerformerEventAssignmentCreateFormValidationValues = {
    timespan?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformerEventAssignmentCreateFormOverridesProps = {
    PerformerEventAssignmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timespan?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PerformerEventAssignmentCreateFormProps = React.PropsWithChildren<{
    overrides?: PerformerEventAssignmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PerformerEventAssignmentCreateFormInputValues) => PerformerEventAssignmentCreateFormInputValues;
    onSuccess?: (fields: PerformerEventAssignmentCreateFormInputValues) => void;
    onError?: (fields: PerformerEventAssignmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerformerEventAssignmentCreateFormInputValues) => PerformerEventAssignmentCreateFormInputValues;
    onValidate?: PerformerEventAssignmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function PerformerEventAssignmentCreateForm(props: PerformerEventAssignmentCreateFormProps): React.ReactElement;
