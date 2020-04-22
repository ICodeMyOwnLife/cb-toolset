export type CheckedTargetEvent = TargetEvent<{ checked: boolean }>;

export type FilesTargetEvent = TargetEvent<{ files: FileList | null }>;

export interface TargetEvent<TTarget> {
  target: TTarget;
}

export type ValueTargetEvent<TValue = any> = TargetEvent<{ value: TValue }>;

export type ValueTargetEventHandler<TValue = any> = (
  e: ValueTargetEvent<TValue>,
) => void;
