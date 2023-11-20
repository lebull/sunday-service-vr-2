/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Performer } from "../models";
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
export declare type PerformerUpdateFormInputValues = {
    dj_name?: string;
    fur_name?: string;
};
export declare type PerformerUpdateFormValidationValues = {
    dj_name?: ValidationFunction<string>;
    fur_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformerUpdateFormOverridesProps = {
    PerformerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dj_name?: PrimitiveOverrideProps<TextFieldProps>;
    fur_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PerformerUpdateFormProps = React.PropsWithChildren<{
    overrides?: PerformerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    performer?: Performer;
    onSubmit?: (fields: PerformerUpdateFormInputValues) => PerformerUpdateFormInputValues;
    onSuccess?: (fields: PerformerUpdateFormInputValues) => void;
    onError?: (fields: PerformerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerformerUpdateFormInputValues) => PerformerUpdateFormInputValues;
    onValidate?: PerformerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PerformerUpdateForm(props: PerformerUpdateFormProps): React.ReactElement;
