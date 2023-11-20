/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PerformerCreateFormInputValues = {
    djName?: string;
    furName?: string;
    performerDescribedGenres?: string[];
    discordId?: string;
};
export declare type PerformerCreateFormValidationValues = {
    djName?: ValidationFunction<string>;
    furName?: ValidationFunction<string>;
    performerDescribedGenres?: ValidationFunction<string>;
    discordId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformerCreateFormOverridesProps = {
    PerformerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    djName?: PrimitiveOverrideProps<TextFieldProps>;
    furName?: PrimitiveOverrideProps<TextFieldProps>;
    performerDescribedGenres?: PrimitiveOverrideProps<TextFieldProps>;
    discordId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PerformerCreateFormProps = React.PropsWithChildren<{
    overrides?: PerformerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PerformerCreateFormInputValues) => PerformerCreateFormInputValues;
    onSuccess?: (fields: PerformerCreateFormInputValues) => void;
    onError?: (fields: PerformerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerformerCreateFormInputValues) => PerformerCreateFormInputValues;
    onValidate?: PerformerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PerformerCreateForm(props: PerformerCreateFormProps): React.ReactElement;
