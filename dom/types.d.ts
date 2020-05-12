import { GenericFunction } from '../function';
export declare type CheckedTargetEvent = TargetEvent<{
    checked: boolean;
}>;
export declare type EventHandler<TEvent> = GenericFunction<[TEvent]>;
export declare type FilesTargetEvent = TargetEvent<{
    files: FileList | null;
}>;
export interface TargetEvent<TTarget> {
    target: TTarget;
}
export declare type ValueTargetEvent<TValue = any> = TargetEvent<{
    value: TValue;
}>;
export declare type ValueTargetEventHandler<TValue = any> = (e: ValueTargetEvent<TValue>) => void;
