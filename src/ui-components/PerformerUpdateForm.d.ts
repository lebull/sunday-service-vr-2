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
    djName?: string;
    furName?: string;
    performerDescribedGenres?: string[];
    discordId?: string;
};
export declare type PerformerUpdateFormValidationValues = {
    djName?: ValidationFunction<string>;
    furName?: ValidationFunction<string>;
    performerDescribedGenres?: ValidationFunction<string>;
    discordId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerformerUpdateFormOverridesProps = {
    PerformerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    djName?: PrimitiveOverrideProps<TextFieldProps>;
    furName?: PrimitiveOverrideProps<TextFieldProps>;
    performerDescribedGenres?: PrimitiveOverrideProps<TextFieldProps>;
    discordId?: PrimitiveOverrideProps<TextFieldProps>;
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
