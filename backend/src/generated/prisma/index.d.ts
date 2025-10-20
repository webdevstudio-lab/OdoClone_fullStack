
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Devis
 * 
 */
export type Devis = $Result.DefaultSelection<Prisma.$DevisPayload>
/**
 * Model Facture
 * 
 */
export type Facture = $Result.DefaultSelection<Prisma.$FacturePayload>
/**
 * Model ItemsFacture
 * 
 */
export type ItemsFacture = $Result.DefaultSelection<Prisma.$ItemsFacturePayload>
/**
 * Model ItemsDevis
 * 
 */
export type ItemsDevis = $Result.DefaultSelection<Prisma.$ItemsDevisPayload>
/**
 * Model BonDeLivraison
 * 
 */
export type BonDeLivraison = $Result.DefaultSelection<Prisma.$BonDeLivraisonPayload>
/**
 * Model ItemsBl
 * 
 */
export type ItemsBl = $Result.DefaultSelection<Prisma.$ItemsBlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devis`: Exposes CRUD operations for the **Devis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devis
    * const devis = await prisma.devis.findMany()
    * ```
    */
  get devis(): Prisma.DevisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facture`: Exposes CRUD operations for the **Facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factures
    * const factures = await prisma.facture.findMany()
    * ```
    */
  get facture(): Prisma.FactureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemsFacture`: Exposes CRUD operations for the **ItemsFacture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsFactures
    * const itemsFactures = await prisma.itemsFacture.findMany()
    * ```
    */
  get itemsFacture(): Prisma.ItemsFactureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemsDevis`: Exposes CRUD operations for the **ItemsDevis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsDevis
    * const itemsDevis = await prisma.itemsDevis.findMany()
    * ```
    */
  get itemsDevis(): Prisma.ItemsDevisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bonDeLivraison`: Exposes CRUD operations for the **BonDeLivraison** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BonDeLivraisons
    * const bonDeLivraisons = await prisma.bonDeLivraison.findMany()
    * ```
    */
  get bonDeLivraison(): Prisma.BonDeLivraisonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemsBl`: Exposes CRUD operations for the **ItemsBl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemsBls
    * const itemsBls = await prisma.itemsBl.findMany()
    * ```
    */
  get itemsBl(): Prisma.ItemsBlDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    Devis: 'Devis',
    Facture: 'Facture',
    ItemsFacture: 'ItemsFacture',
    ItemsDevis: 'ItemsDevis',
    BonDeLivraison: 'BonDeLivraison',
    ItemsBl: 'ItemsBl'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "devis" | "facture" | "itemsFacture" | "itemsDevis" | "bonDeLivraison" | "itemsBl"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Devis: {
        payload: Prisma.$DevisPayload<ExtArgs>
        fields: Prisma.DevisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          findFirst: {
            args: Prisma.DevisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          findMany: {
            args: Prisma.DevisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          create: {
            args: Prisma.DevisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          createMany: {
            args: Prisma.DevisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          delete: {
            args: Prisma.DevisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          update: {
            args: Prisma.DevisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          deleteMany: {
            args: Prisma.DevisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          upsert: {
            args: Prisma.DevisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          aggregate: {
            args: Prisma.DevisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevis>
          }
          groupBy: {
            args: Prisma.DevisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevisGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevisCountArgs<ExtArgs>
            result: $Utils.Optional<DevisCountAggregateOutputType> | number
          }
        }
      }
      Facture: {
        payload: Prisma.$FacturePayload<ExtArgs>
        fields: Prisma.FactureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findFirst: {
            args: Prisma.FactureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          findMany: {
            args: Prisma.FactureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          create: {
            args: Prisma.FactureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          createMany: {
            args: Prisma.FactureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          delete: {
            args: Prisma.FactureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          update: {
            args: Prisma.FactureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          deleteMany: {
            args: Prisma.FactureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>[]
          }
          upsert: {
            args: Prisma.FactureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturePayload>
          }
          aggregate: {
            args: Prisma.FactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture>
          }
          groupBy: {
            args: Prisma.FactureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactureCountArgs<ExtArgs>
            result: $Utils.Optional<FactureCountAggregateOutputType> | number
          }
        }
      }
      ItemsFacture: {
        payload: Prisma.$ItemsFacturePayload<ExtArgs>
        fields: Prisma.ItemsFactureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFactureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFactureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          findFirst: {
            args: Prisma.ItemsFactureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFactureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          findMany: {
            args: Prisma.ItemsFactureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>[]
          }
          create: {
            args: Prisma.ItemsFactureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          createMany: {
            args: Prisma.ItemsFactureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsFactureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>[]
          }
          delete: {
            args: Prisma.ItemsFactureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          update: {
            args: Prisma.ItemsFactureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          deleteMany: {
            args: Prisma.ItemsFactureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsFactureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsFactureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>[]
          }
          upsert: {
            args: Prisma.ItemsFactureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsFacturePayload>
          }
          aggregate: {
            args: Prisma.ItemsFactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemsFacture>
          }
          groupBy: {
            args: Prisma.ItemsFactureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsFactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsFactureCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsFactureCountAggregateOutputType> | number
          }
        }
      }
      ItemsDevis: {
        payload: Prisma.$ItemsDevisPayload<ExtArgs>
        fields: Prisma.ItemsDevisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsDevisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsDevisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          findFirst: {
            args: Prisma.ItemsDevisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsDevisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          findMany: {
            args: Prisma.ItemsDevisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>[]
          }
          create: {
            args: Prisma.ItemsDevisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          createMany: {
            args: Prisma.ItemsDevisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsDevisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>[]
          }
          delete: {
            args: Prisma.ItemsDevisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          update: {
            args: Prisma.ItemsDevisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDevisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsDevisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsDevisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>[]
          }
          upsert: {
            args: Prisma.ItemsDevisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsDevisPayload>
          }
          aggregate: {
            args: Prisma.ItemsDevisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemsDevis>
          }
          groupBy: {
            args: Prisma.ItemsDevisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsDevisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsDevisCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsDevisCountAggregateOutputType> | number
          }
        }
      }
      BonDeLivraison: {
        payload: Prisma.$BonDeLivraisonPayload<ExtArgs>
        fields: Prisma.BonDeLivraisonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BonDeLivraisonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BonDeLivraisonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          findFirst: {
            args: Prisma.BonDeLivraisonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BonDeLivraisonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          findMany: {
            args: Prisma.BonDeLivraisonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>[]
          }
          create: {
            args: Prisma.BonDeLivraisonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          createMany: {
            args: Prisma.BonDeLivraisonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BonDeLivraisonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>[]
          }
          delete: {
            args: Prisma.BonDeLivraisonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          update: {
            args: Prisma.BonDeLivraisonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          deleteMany: {
            args: Prisma.BonDeLivraisonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BonDeLivraisonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BonDeLivraisonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>[]
          }
          upsert: {
            args: Prisma.BonDeLivraisonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonDeLivraisonPayload>
          }
          aggregate: {
            args: Prisma.BonDeLivraisonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBonDeLivraison>
          }
          groupBy: {
            args: Prisma.BonDeLivraisonGroupByArgs<ExtArgs>
            result: $Utils.Optional<BonDeLivraisonGroupByOutputType>[]
          }
          count: {
            args: Prisma.BonDeLivraisonCountArgs<ExtArgs>
            result: $Utils.Optional<BonDeLivraisonCountAggregateOutputType> | number
          }
        }
      }
      ItemsBl: {
        payload: Prisma.$ItemsBlPayload<ExtArgs>
        fields: Prisma.ItemsBlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsBlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsBlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          findFirst: {
            args: Prisma.ItemsBlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsBlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          findMany: {
            args: Prisma.ItemsBlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>[]
          }
          create: {
            args: Prisma.ItemsBlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          createMany: {
            args: Prisma.ItemsBlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsBlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>[]
          }
          delete: {
            args: Prisma.ItemsBlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          update: {
            args: Prisma.ItemsBlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          deleteMany: {
            args: Prisma.ItemsBlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsBlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsBlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>[]
          }
          upsert: {
            args: Prisma.ItemsBlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsBlPayload>
          }
          aggregate: {
            args: Prisma.ItemsBlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemsBl>
          }
          groupBy: {
            args: Prisma.ItemsBlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsBlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsBlCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsBlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    devis?: DevisOmit
    facture?: FactureOmit
    itemsFacture?: ItemsFactureOmit
    itemsDevis?: ItemsDevisOmit
    bonDeLivraison?: BonDeLivraisonOmit
    itemsBl?: ItemsBlOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    devis: number
    facture: number
    bonDeLivraison: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devis?: boolean | ClientCountOutputTypeCountDevisArgs
    facture?: boolean | ClientCountOutputTypeCountFactureArgs
    bonDeLivraison?: boolean | ClientCountOutputTypeCountBonDeLivraisonArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDevisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevisWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountFactureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBonDeLivraisonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonDeLivraisonWhereInput
  }


  /**
   * Count Type DevisCountOutputType
   */

  export type DevisCountOutputType = {
    devisItem: number
  }

  export type DevisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devisItem?: boolean | DevisCountOutputTypeCountDevisItemArgs
  }

  // Custom InputTypes
  /**
   * DevisCountOutputType without action
   */
  export type DevisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevisCountOutputType
     */
    select?: DevisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DevisCountOutputType without action
   */
  export type DevisCountOutputTypeCountDevisItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsDevisWhereInput
  }


  /**
   * Count Type FactureCountOutputType
   */

  export type FactureCountOutputType = {
    factureItem: number
  }

  export type FactureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureItem?: boolean | FactureCountOutputTypeCountFactureItemArgs
  }

  // Custom InputTypes
  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureCountOutputType
     */
    select?: FactureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeCountFactureItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsFactureWhereInput
  }


  /**
   * Count Type BonDeLivraisonCountOutputType
   */

  export type BonDeLivraisonCountOutputType = {
    blItem: number
  }

  export type BonDeLivraisonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blItem?: boolean | BonDeLivraisonCountOutputTypeCountBlItemArgs
  }

  // Custom InputTypes
  /**
   * BonDeLivraisonCountOutputType without action
   */
  export type BonDeLivraisonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraisonCountOutputType
     */
    select?: BonDeLivraisonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BonDeLivraisonCountOutputType without action
   */
  export type BonDeLivraisonCountOutputTypeCountBlItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsBlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    verifCode: string | null
    isVerify: boolean | null
    refresToken: string | null
    lastLogin: Date | null
    passUpdateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    verifCode: string | null
    isVerify: boolean | null
    refresToken: string | null
    lastLogin: Date | null
    passUpdateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    createAt: number
    updateAt: number
    verifCode: number
    isVerify: number
    refresToken: number
    lastLogin: number
    passUpdateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createAt?: true
    updateAt?: true
    verifCode?: true
    isVerify?: true
    refresToken?: true
    lastLogin?: true
    passUpdateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createAt?: true
    updateAt?: true
    verifCode?: true
    isVerify?: true
    refresToken?: true
    lastLogin?: true
    passUpdateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createAt?: true
    updateAt?: true
    verifCode?: true
    isVerify?: true
    refresToken?: true
    lastLogin?: true
    passUpdateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    role: string
    password: string
    createAt: Date
    updateAt: Date
    verifCode: string
    isVerify: boolean
    refresToken: string
    lastLogin: Date
    passUpdateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    verifCode?: boolean
    isVerify?: boolean
    refresToken?: boolean
    lastLogin?: boolean
    passUpdateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    verifCode?: boolean
    isVerify?: boolean
    refresToken?: boolean
    lastLogin?: boolean
    passUpdateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    verifCode?: boolean
    isVerify?: boolean
    refresToken?: boolean
    lastLogin?: boolean
    passUpdateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    verifCode?: boolean
    isVerify?: boolean
    refresToken?: boolean
    lastLogin?: boolean
    passUpdateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "password" | "createAt" | "updateAt" | "verifCode" | "isVerify" | "refresToken" | "lastLogin" | "passUpdateAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: string
      password: string
      createAt: Date
      updateAt: Date
      verifCode: string
      isVerify: boolean
      refresToken: string
      lastLogin: Date
      passUpdateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly verifCode: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly refresToken: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly passUpdateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    codeClient: string | null
    createAt: Date | null
    updateAt: Date | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    logo: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    codeClient: string | null
    createAt: Date | null
    updateAt: Date | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    logo: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    codeClient: number
    createAt: number
    updateAt: number
    name: number
    phone: number
    email: number
    address: number
    logo: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    codeClient?: true
    createAt?: true
    updateAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    logo?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    codeClient?: true
    createAt?: true
    updateAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    logo?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    codeClient?: true
    createAt?: true
    updateAt?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    logo?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    codeClient: string
    createAt: Date
    updateAt: Date
    name: string
    phone: string
    email: string
    address: string
    logo: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codeClient?: boolean
    createAt?: boolean
    updateAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    logo?: boolean
    devis?: boolean | Client$devisArgs<ExtArgs>
    facture?: boolean | Client$factureArgs<ExtArgs>
    bonDeLivraison?: boolean | Client$bonDeLivraisonArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codeClient?: boolean
    createAt?: boolean
    updateAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    logo?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codeClient?: boolean
    createAt?: boolean
    updateAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    logo?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    codeClient?: boolean
    createAt?: boolean
    updateAt?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    logo?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codeClient" | "createAt" | "updateAt" | "name" | "phone" | "email" | "address" | "logo", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devis?: boolean | Client$devisArgs<ExtArgs>
    facture?: boolean | Client$factureArgs<ExtArgs>
    bonDeLivraison?: boolean | Client$bonDeLivraisonArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      devis: Prisma.$DevisPayload<ExtArgs>[]
      facture: Prisma.$FacturePayload<ExtArgs>[]
      bonDeLivraison: Prisma.$BonDeLivraisonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codeClient: string
      createAt: Date
      updateAt: Date
      name: string
      phone: string
      email: string
      address: string
      logo: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devis<T extends Client$devisArgs<ExtArgs> = {}>(args?: Subset<T, Client$devisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facture<T extends Client$factureArgs<ExtArgs> = {}>(args?: Subset<T, Client$factureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bonDeLivraison<T extends Client$bonDeLivraisonArgs<ExtArgs> = {}>(args?: Subset<T, Client$bonDeLivraisonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly codeClient: FieldRef<"Client", 'String'>
    readonly createAt: FieldRef<"Client", 'DateTime'>
    readonly updateAt: FieldRef<"Client", 'DateTime'>
    readonly name: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly logo: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.devis
   */
  export type Client$devisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    where?: DevisWhereInput
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    cursor?: DevisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Client.facture
   */
  export type Client$factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    cursor?: FactureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Client.bonDeLivraison
   */
  export type Client$bonDeLivraisonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    where?: BonDeLivraisonWhereInput
    orderBy?: BonDeLivraisonOrderByWithRelationInput | BonDeLivraisonOrderByWithRelationInput[]
    cursor?: BonDeLivraisonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BonDeLivraisonScalarFieldEnum | BonDeLivraisonScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Devis
   */

  export type AggregateDevis = {
    _count: DevisCountAggregateOutputType | null
    _avg: DevisAvgAggregateOutputType | null
    _sum: DevisSumAggregateOutputType | null
    _min: DevisMinAggregateOutputType | null
    _max: DevisMaxAggregateOutputType | null
  }

  export type DevisAvgAggregateOutputType = {
    total: number | null
  }

  export type DevisSumAggregateOutputType = {
    total: number | null
  }

  export type DevisMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numDevis: string | null
    total: number | null
    description: string | null
    clientId: string | null
  }

  export type DevisMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numDevis: string | null
    total: number | null
    description: string | null
    clientId: string | null
  }

  export type DevisCountAggregateOutputType = {
    id: number
    createAt: number
    updateAt: number
    numDevis: number
    total: number
    description: number
    clientId: number
    _all: number
  }


  export type DevisAvgAggregateInputType = {
    total?: true
  }

  export type DevisSumAggregateInputType = {
    total?: true
  }

  export type DevisMinAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numDevis?: true
    total?: true
    description?: true
    clientId?: true
  }

  export type DevisMaxAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numDevis?: true
    total?: true
    description?: true
    clientId?: true
  }

  export type DevisCountAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numDevis?: true
    total?: true
    description?: true
    clientId?: true
    _all?: true
  }

  export type DevisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devis to aggregate.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devis
    **/
    _count?: true | DevisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevisMaxAggregateInputType
  }

  export type GetDevisAggregateType<T extends DevisAggregateArgs> = {
        [P in keyof T & keyof AggregateDevis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevis[P]>
      : GetScalarType<T[P], AggregateDevis[P]>
  }




  export type DevisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevisWhereInput
    orderBy?: DevisOrderByWithAggregationInput | DevisOrderByWithAggregationInput[]
    by: DevisScalarFieldEnum[] | DevisScalarFieldEnum
    having?: DevisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevisCountAggregateInputType | true
    _avg?: DevisAvgAggregateInputType
    _sum?: DevisSumAggregateInputType
    _min?: DevisMinAggregateInputType
    _max?: DevisMaxAggregateInputType
  }

  export type DevisGroupByOutputType = {
    id: string
    createAt: Date
    updateAt: Date
    numDevis: string
    total: number
    description: string
    clientId: string
    _count: DevisCountAggregateOutputType | null
    _avg: DevisAvgAggregateOutputType | null
    _sum: DevisSumAggregateOutputType | null
    _min: DevisMinAggregateOutputType | null
    _max: DevisMaxAggregateOutputType | null
  }

  type GetDevisGroupByPayload<T extends DevisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevisGroupByOutputType[P]>
            : GetScalarType<T[P], DevisGroupByOutputType[P]>
        }
      >
    >


  export type DevisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numDevis?: boolean
    total?: boolean
    description?: boolean
    clientId?: boolean
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
    devisItem?: boolean | Devis$devisItemArgs<ExtArgs>
    _count?: boolean | DevisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numDevis?: boolean
    total?: boolean
    description?: boolean
    clientId?: boolean
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numDevis?: boolean
    total?: boolean
    description?: boolean
    clientId?: boolean
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectScalar = {
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numDevis?: boolean
    total?: boolean
    description?: boolean
    clientId?: boolean
  }

  export type DevisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createAt" | "updateAt" | "numDevis" | "total" | "description" | "clientId", ExtArgs["result"]["devis"]>
  export type DevisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
    devisItem?: boolean | Devis$devisItemArgs<ExtArgs>
    _count?: boolean | DevisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DevisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DevisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientDevis?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DevisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devis"
    objects: {
      clientDevis: Prisma.$ClientPayload<ExtArgs>
      devisItem: Prisma.$ItemsDevisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createAt: Date
      updateAt: Date
      numDevis: string
      total: number
      description: string
      clientId: string
    }, ExtArgs["result"]["devis"]>
    composites: {}
  }

  type DevisGetPayload<S extends boolean | null | undefined | DevisDefaultArgs> = $Result.GetResult<Prisma.$DevisPayload, S>

  type DevisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevisCountAggregateInputType | true
    }

  export interface DevisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devis'], meta: { name: 'Devis' } }
    /**
     * Find zero or one Devis that matches the filter.
     * @param {DevisFindUniqueArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevisFindUniqueArgs>(args: SelectSubset<T, DevisFindUniqueArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevisFindUniqueOrThrowArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevisFindUniqueOrThrowArgs>(args: SelectSubset<T, DevisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindFirstArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevisFindFirstArgs>(args?: SelectSubset<T, DevisFindFirstArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindFirstOrThrowArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevisFindFirstOrThrowArgs>(args?: SelectSubset<T, DevisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devis
     * const devis = await prisma.devis.findMany()
     * 
     * // Get first 10 Devis
     * const devis = await prisma.devis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devisWithIdOnly = await prisma.devis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevisFindManyArgs>(args?: SelectSubset<T, DevisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devis.
     * @param {DevisCreateArgs} args - Arguments to create a Devis.
     * @example
     * // Create one Devis
     * const Devis = await prisma.devis.create({
     *   data: {
     *     // ... data to create a Devis
     *   }
     * })
     * 
     */
    create<T extends DevisCreateArgs>(args: SelectSubset<T, DevisCreateArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devis.
     * @param {DevisCreateManyArgs} args - Arguments to create many Devis.
     * @example
     * // Create many Devis
     * const devis = await prisma.devis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevisCreateManyArgs>(args?: SelectSubset<T, DevisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devis and returns the data saved in the database.
     * @param {DevisCreateManyAndReturnArgs} args - Arguments to create many Devis.
     * @example
     * // Create many Devis
     * const devis = await prisma.devis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devis and only return the `id`
     * const devisWithIdOnly = await prisma.devis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevisCreateManyAndReturnArgs>(args?: SelectSubset<T, DevisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devis.
     * @param {DevisDeleteArgs} args - Arguments to delete one Devis.
     * @example
     * // Delete one Devis
     * const Devis = await prisma.devis.delete({
     *   where: {
     *     // ... filter to delete one Devis
     *   }
     * })
     * 
     */
    delete<T extends DevisDeleteArgs>(args: SelectSubset<T, DevisDeleteArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devis.
     * @param {DevisUpdateArgs} args - Arguments to update one Devis.
     * @example
     * // Update one Devis
     * const devis = await prisma.devis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevisUpdateArgs>(args: SelectSubset<T, DevisUpdateArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devis.
     * @param {DevisDeleteManyArgs} args - Arguments to filter Devis to delete.
     * @example
     * // Delete a few Devis
     * const { count } = await prisma.devis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevisDeleteManyArgs>(args?: SelectSubset<T, DevisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devis
     * const devis = await prisma.devis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevisUpdateManyArgs>(args: SelectSubset<T, DevisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devis and returns the data updated in the database.
     * @param {DevisUpdateManyAndReturnArgs} args - Arguments to update many Devis.
     * @example
     * // Update many Devis
     * const devis = await prisma.devis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devis and only return the `id`
     * const devisWithIdOnly = await prisma.devis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevisUpdateManyAndReturnArgs>(args: SelectSubset<T, DevisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devis.
     * @param {DevisUpsertArgs} args - Arguments to update or create a Devis.
     * @example
     * // Update or create a Devis
     * const devis = await prisma.devis.upsert({
     *   create: {
     *     // ... data to create a Devis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devis we want to update
     *   }
     * })
     */
    upsert<T extends DevisUpsertArgs>(args: SelectSubset<T, DevisUpsertArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisCountArgs} args - Arguments to filter Devis to count.
     * @example
     * // Count the number of Devis
     * const count = await prisma.devis.count({
     *   where: {
     *     // ... the filter for the Devis we want to count
     *   }
     * })
    **/
    count<T extends DevisCountArgs>(
      args?: Subset<T, DevisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevisAggregateArgs>(args: Subset<T, DevisAggregateArgs>): Prisma.PrismaPromise<GetDevisAggregateType<T>>

    /**
     * Group by Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevisGroupByArgs['orderBy'] }
        : { orderBy?: DevisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devis model
   */
  readonly fields: DevisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientDevis<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devisItem<T extends Devis$devisItemArgs<ExtArgs> = {}>(args?: Subset<T, Devis$devisItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Devis model
   */
  interface DevisFieldRefs {
    readonly id: FieldRef<"Devis", 'String'>
    readonly createAt: FieldRef<"Devis", 'DateTime'>
    readonly updateAt: FieldRef<"Devis", 'DateTime'>
    readonly numDevis: FieldRef<"Devis", 'String'>
    readonly total: FieldRef<"Devis", 'Float'>
    readonly description: FieldRef<"Devis", 'String'>
    readonly clientId: FieldRef<"Devis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Devis findUnique
   */
  export type DevisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis findUniqueOrThrow
   */
  export type DevisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis findFirst
   */
  export type DevisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devis.
     */
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis findFirstOrThrow
   */
  export type DevisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devis.
     */
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis findMany
   */
  export type DevisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis create
   */
  export type DevisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The data needed to create a Devis.
     */
    data: XOR<DevisCreateInput, DevisUncheckedCreateInput>
  }

  /**
   * Devis createMany
   */
  export type DevisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devis.
     */
    data: DevisCreateManyInput | DevisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devis createManyAndReturn
   */
  export type DevisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * The data used to create many Devis.
     */
    data: DevisCreateManyInput | DevisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devis update
   */
  export type DevisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The data needed to update a Devis.
     */
    data: XOR<DevisUpdateInput, DevisUncheckedUpdateInput>
    /**
     * Choose, which Devis to update.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis updateMany
   */
  export type DevisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devis.
     */
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyInput>
    /**
     * Filter which Devis to update
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to update.
     */
    limit?: number
  }

  /**
   * Devis updateManyAndReturn
   */
  export type DevisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * The data used to update Devis.
     */
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyInput>
    /**
     * Filter which Devis to update
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devis upsert
   */
  export type DevisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The filter to search for the Devis to update in case it exists.
     */
    where: DevisWhereUniqueInput
    /**
     * In case the Devis found by the `where` argument doesn't exist, create a new Devis with this data.
     */
    create: XOR<DevisCreateInput, DevisUncheckedCreateInput>
    /**
     * In case the Devis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevisUpdateInput, DevisUncheckedUpdateInput>
  }

  /**
   * Devis delete
   */
  export type DevisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter which Devis to delete.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis deleteMany
   */
  export type DevisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devis to delete
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to delete.
     */
    limit?: number
  }

  /**
   * Devis.devisItem
   */
  export type Devis$devisItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    where?: ItemsDevisWhereInput
    orderBy?: ItemsDevisOrderByWithRelationInput | ItemsDevisOrderByWithRelationInput[]
    cursor?: ItemsDevisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsDevisScalarFieldEnum | ItemsDevisScalarFieldEnum[]
  }

  /**
   * Devis without action
   */
  export type DevisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
  }


  /**
   * Model Facture
   */

  export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  export type FactureAvgAggregateOutputType = {
    total: number | null
  }

  export type FactureSumAggregateOutputType = {
    total: number | null
  }

  export type FactureMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numFacture: string | null
    total: number | null
    description: string | null
    etat: string | null
    numDevis: string | null
    clientId: string | null
  }

  export type FactureMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numFacture: string | null
    total: number | null
    description: string | null
    etat: string | null
    numDevis: string | null
    clientId: string | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    createAt: number
    updateAt: number
    numFacture: number
    total: number
    description: number
    etat: number
    numDevis: number
    clientId: number
    _all: number
  }


  export type FactureAvgAggregateInputType = {
    total?: true
  }

  export type FactureSumAggregateInputType = {
    total?: true
  }

  export type FactureMinAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numFacture?: true
    total?: true
    description?: true
    etat?: true
    numDevis?: true
    clientId?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numFacture?: true
    total?: true
    description?: true
    etat?: true
    numDevis?: true
    clientId?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numFacture?: true
    total?: true
    description?: true
    etat?: true
    numDevis?: true
    clientId?: true
    _all?: true
  }

  export type FactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facture to aggregate.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Factures
    **/
    _count?: true | FactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureMaxAggregateInputType
  }

  export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture[P]>
      : GetScalarType<T[P], AggregateFacture[P]>
  }




  export type FactureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureWhereInput
    orderBy?: FactureOrderByWithAggregationInput | FactureOrderByWithAggregationInput[]
    by: FactureScalarFieldEnum[] | FactureScalarFieldEnum
    having?: FactureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureCountAggregateInputType | true
    _avg?: FactureAvgAggregateInputType
    _sum?: FactureSumAggregateInputType
    _min?: FactureMinAggregateInputType
    _max?: FactureMaxAggregateInputType
  }

  export type FactureGroupByOutputType = {
    id: string
    createAt: Date
    updateAt: Date
    numFacture: string
    total: number
    description: string
    etat: string
    numDevis: string
    clientId: string
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  type GetFactureGroupByPayload<T extends FactureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureGroupByOutputType[P]>
            : GetScalarType<T[P], FactureGroupByOutputType[P]>
        }
      >
    >


  export type FactureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numFacture?: boolean
    total?: boolean
    description?: boolean
    etat?: boolean
    numDevis?: boolean
    clientId?: boolean
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
    factureItem?: boolean | Facture$factureItemArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numFacture?: boolean
    total?: boolean
    description?: boolean
    etat?: boolean
    numDevis?: boolean
    clientId?: boolean
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numFacture?: boolean
    total?: boolean
    description?: boolean
    etat?: boolean
    numDevis?: boolean
    clientId?: boolean
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type FactureSelectScalar = {
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numFacture?: boolean
    total?: boolean
    description?: boolean
    etat?: boolean
    numDevis?: boolean
    clientId?: boolean
  }

  export type FactureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createAt" | "updateAt" | "numFacture" | "total" | "description" | "etat" | "numDevis" | "clientId", ExtArgs["result"]["facture"]>
  export type FactureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
    factureItem?: boolean | Facture$factureItemArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FactureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type FactureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientFacture?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $FacturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facture"
    objects: {
      clientFacture: Prisma.$ClientPayload<ExtArgs>
      factureItem: Prisma.$ItemsFacturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createAt: Date
      updateAt: Date
      numFacture: string
      total: number
      description: string
      etat: string
      numDevis: string
      clientId: string
    }, ExtArgs["result"]["facture"]>
    composites: {}
  }

  type FactureGetPayload<S extends boolean | null | undefined | FactureDefaultArgs> = $Result.GetResult<Prisma.$FacturePayload, S>

  type FactureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureCountAggregateInputType | true
    }

  export interface FactureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facture'], meta: { name: 'Facture' } }
    /**
     * Find zero or one Facture that matches the filter.
     * @param {FactureFindUniqueArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactureFindUniqueArgs>(args: SelectSubset<T, FactureFindUniqueArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactureFindUniqueOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactureFindUniqueOrThrowArgs>(args: SelectSubset<T, FactureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactureFindFirstArgs>(args?: SelectSubset<T, FactureFindFirstArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindFirstOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactureFindFirstOrThrowArgs>(args?: SelectSubset<T, FactureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factures
     * const factures = await prisma.facture.findMany()
     * 
     * // Get first 10 Factures
     * const factures = await prisma.facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureWithIdOnly = await prisma.facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactureFindManyArgs>(args?: SelectSubset<T, FactureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facture.
     * @param {FactureCreateArgs} args - Arguments to create a Facture.
     * @example
     * // Create one Facture
     * const Facture = await prisma.facture.create({
     *   data: {
     *     // ... data to create a Facture
     *   }
     * })
     * 
     */
    create<T extends FactureCreateArgs>(args: SelectSubset<T, FactureCreateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factures.
     * @param {FactureCreateManyArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactureCreateManyArgs>(args?: SelectSubset<T, FactureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factures and returns the data saved in the database.
     * @param {FactureCreateManyAndReturnArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactureCreateManyAndReturnArgs>(args?: SelectSubset<T, FactureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facture.
     * @param {FactureDeleteArgs} args - Arguments to delete one Facture.
     * @example
     * // Delete one Facture
     * const Facture = await prisma.facture.delete({
     *   where: {
     *     // ... filter to delete one Facture
     *   }
     * })
     * 
     */
    delete<T extends FactureDeleteArgs>(args: SelectSubset<T, FactureDeleteArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facture.
     * @param {FactureUpdateArgs} args - Arguments to update one Facture.
     * @example
     * // Update one Facture
     * const facture = await prisma.facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactureUpdateArgs>(args: SelectSubset<T, FactureUpdateArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factures.
     * @param {FactureDeleteManyArgs} args - Arguments to filter Factures to delete.
     * @example
     * // Delete a few Factures
     * const { count } = await prisma.facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactureDeleteManyArgs>(args?: SelectSubset<T, FactureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactureUpdateManyArgs>(args: SelectSubset<T, FactureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures and returns the data updated in the database.
     * @param {FactureUpdateManyAndReturnArgs} args - Arguments to update many Factures.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FactureUpdateManyAndReturnArgs>(args: SelectSubset<T, FactureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facture.
     * @param {FactureUpsertArgs} args - Arguments to update or create a Facture.
     * @example
     * // Update or create a Facture
     * const facture = await prisma.facture.upsert({
     *   create: {
     *     // ... data to create a Facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture we want to update
     *   }
     * })
     */
    upsert<T extends FactureUpsertArgs>(args: SelectSubset<T, FactureUpsertArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureCountArgs} args - Arguments to filter Factures to count.
     * @example
     * // Count the number of Factures
     * const count = await prisma.facture.count({
     *   where: {
     *     // ... the filter for the Factures we want to count
     *   }
     * })
    **/
    count<T extends FactureCountArgs>(
      args?: Subset<T, FactureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactureAggregateArgs>(args: Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>

    /**
     * Group by Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FactureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactureGroupByArgs['orderBy'] }
        : { orderBy?: FactureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FactureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facture model
   */
  readonly fields: FactureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientFacture<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    factureItem<T extends Facture$factureItemArgs<ExtArgs> = {}>(args?: Subset<T, Facture$factureItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facture model
   */
  interface FactureFieldRefs {
    readonly id: FieldRef<"Facture", 'String'>
    readonly createAt: FieldRef<"Facture", 'DateTime'>
    readonly updateAt: FieldRef<"Facture", 'DateTime'>
    readonly numFacture: FieldRef<"Facture", 'String'>
    readonly total: FieldRef<"Facture", 'Float'>
    readonly description: FieldRef<"Facture", 'String'>
    readonly etat: FieldRef<"Facture", 'String'>
    readonly numDevis: FieldRef<"Facture", 'String'>
    readonly clientId: FieldRef<"Facture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Facture findUnique
   */
  export type FactureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findUniqueOrThrow
   */
  export type FactureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture findFirst
   */
  export type FactureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findFirstOrThrow
   */
  export type FactureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Facture to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture findMany
   */
  export type FactureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter, which Factures to fetch.
     */
    where?: FactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factures to fetch.
     */
    orderBy?: FactureOrderByWithRelationInput | FactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Factures.
     */
    cursor?: FactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factures.
     */
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Facture create
   */
  export type FactureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to create a Facture.
     */
    data: XOR<FactureCreateInput, FactureUncheckedCreateInput>
  }

  /**
   * Facture createMany
   */
  export type FactureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facture createManyAndReturn
   */
  export type FactureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to create many Factures.
     */
    data: FactureCreateManyInput | FactureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture update
   */
  export type FactureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The data needed to update a Facture.
     */
    data: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
    /**
     * Choose, which Facture to update.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture updateMany
   */
  export type FactureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
  }

  /**
   * Facture updateManyAndReturn
   */
  export type FactureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * The data used to update Factures.
     */
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyInput>
    /**
     * Filter which Factures to update
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Facture upsert
   */
  export type FactureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * The filter to search for the Facture to update in case it exists.
     */
    where: FactureWhereUniqueInput
    /**
     * In case the Facture found by the `where` argument doesn't exist, create a new Facture with this data.
     */
    create: XOR<FactureCreateInput, FactureUncheckedCreateInput>
    /**
     * In case the Facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactureUpdateInput, FactureUncheckedUpdateInput>
  }

  /**
   * Facture delete
   */
  export type FactureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
    /**
     * Filter which Facture to delete.
     */
    where: FactureWhereUniqueInput
  }

  /**
   * Facture deleteMany
   */
  export type FactureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factures to delete
     */
    where?: FactureWhereInput
    /**
     * Limit how many Factures to delete.
     */
    limit?: number
  }

  /**
   * Facture.factureItem
   */
  export type Facture$factureItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    where?: ItemsFactureWhereInput
    orderBy?: ItemsFactureOrderByWithRelationInput | ItemsFactureOrderByWithRelationInput[]
    cursor?: ItemsFactureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsFactureScalarFieldEnum | ItemsFactureScalarFieldEnum[]
  }

  /**
   * Facture without action
   */
  export type FactureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: FactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facture
     */
    omit?: FactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactureInclude<ExtArgs> | null
  }


  /**
   * Model ItemsFacture
   */

  export type AggregateItemsFacture = {
    _count: ItemsFactureCountAggregateOutputType | null
    _avg: ItemsFactureAvgAggregateOutputType | null
    _sum: ItemsFactureSumAggregateOutputType | null
    _min: ItemsFactureMinAggregateOutputType | null
    _max: ItemsFactureMaxAggregateOutputType | null
  }

  export type ItemsFactureAvgAggregateOutputType = {
    quantity: number | null
    unitePrice: number | null
    total: number | null
  }

  export type ItemsFactureSumAggregateOutputType = {
    quantity: number | null
    unitePrice: number | null
    total: number | null
  }

  export type ItemsFactureMinAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    quantity: number | null
    unite: string | null
    unitePrice: number | null
    total: number | null
    factureId: string | null
  }

  export type ItemsFactureMaxAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    quantity: number | null
    unite: string | null
    unitePrice: number | null
    total: number | null
    factureId: string | null
  }

  export type ItemsFactureCountAggregateOutputType = {
    itemId: number
    createAt: number
    updateAt: number
    description: number
    quantity: number
    unite: number
    unitePrice: number
    total: number
    factureId: number
    _all: number
  }


  export type ItemsFactureAvgAggregateInputType = {
    quantity?: true
    unitePrice?: true
    total?: true
  }

  export type ItemsFactureSumAggregateInputType = {
    quantity?: true
    unitePrice?: true
    total?: true
  }

  export type ItemsFactureMinAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    quantity?: true
    unite?: true
    unitePrice?: true
    total?: true
    factureId?: true
  }

  export type ItemsFactureMaxAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    quantity?: true
    unite?: true
    unitePrice?: true
    total?: true
    factureId?: true
  }

  export type ItemsFactureCountAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    quantity?: true
    unite?: true
    unitePrice?: true
    total?: true
    factureId?: true
    _all?: true
  }

  export type ItemsFactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsFacture to aggregate.
     */
    where?: ItemsFactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsFactures to fetch.
     */
    orderBy?: ItemsFactureOrderByWithRelationInput | ItemsFactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsFactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsFactures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsFactures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemsFactures
    **/
    _count?: true | ItemsFactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsFactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsFactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsFactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsFactureMaxAggregateInputType
  }

  export type GetItemsFactureAggregateType<T extends ItemsFactureAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsFacture[P]>
      : GetScalarType<T[P], AggregateItemsFacture[P]>
  }




  export type ItemsFactureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsFactureWhereInput
    orderBy?: ItemsFactureOrderByWithAggregationInput | ItemsFactureOrderByWithAggregationInput[]
    by: ItemsFactureScalarFieldEnum[] | ItemsFactureScalarFieldEnum
    having?: ItemsFactureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsFactureCountAggregateInputType | true
    _avg?: ItemsFactureAvgAggregateInputType
    _sum?: ItemsFactureSumAggregateInputType
    _min?: ItemsFactureMinAggregateInputType
    _max?: ItemsFactureMaxAggregateInputType
  }

  export type ItemsFactureGroupByOutputType = {
    itemId: string
    createAt: Date
    updateAt: Date
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
    factureId: string
    _count: ItemsFactureCountAggregateOutputType | null
    _avg: ItemsFactureAvgAggregateOutputType | null
    _sum: ItemsFactureSumAggregateOutputType | null
    _min: ItemsFactureMinAggregateOutputType | null
    _max: ItemsFactureMaxAggregateOutputType | null
  }

  type GetItemsFactureGroupByPayload<T extends ItemsFactureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsFactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsFactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsFactureGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsFactureGroupByOutputType[P]>
        }
      >
    >


  export type ItemsFactureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    quantity?: boolean
    unite?: boolean
    unitePrice?: boolean
    total?: boolean
    factureId?: boolean
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsFacture"]>

  export type ItemsFactureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    quantity?: boolean
    unite?: boolean
    unitePrice?: boolean
    total?: boolean
    factureId?: boolean
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsFacture"]>

  export type ItemsFactureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    quantity?: boolean
    unite?: boolean
    unitePrice?: boolean
    total?: boolean
    factureId?: boolean
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsFacture"]>

  export type ItemsFactureSelectScalar = {
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    quantity?: boolean
    unite?: boolean
    unitePrice?: boolean
    total?: boolean
    factureId?: boolean
  }

  export type ItemsFactureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "createAt" | "updateAt" | "description" | "quantity" | "unite" | "unitePrice" | "total" | "factureId", ExtArgs["result"]["itemsFacture"]>
  export type ItemsFactureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type ItemsFactureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }
  export type ItemsFactureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureItem?: boolean | FactureDefaultArgs<ExtArgs>
  }

  export type $ItemsFacturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemsFacture"
    objects: {
      factureItem: Prisma.$FacturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: string
      createAt: Date
      updateAt: Date
      description: string
      quantity: number
      unite: string
      unitePrice: number
      total: number
      factureId: string
    }, ExtArgs["result"]["itemsFacture"]>
    composites: {}
  }

  type ItemsFactureGetPayload<S extends boolean | null | undefined | ItemsFactureDefaultArgs> = $Result.GetResult<Prisma.$ItemsFacturePayload, S>

  type ItemsFactureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsFactureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsFactureCountAggregateInputType | true
    }

  export interface ItemsFactureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemsFacture'], meta: { name: 'ItemsFacture' } }
    /**
     * Find zero or one ItemsFacture that matches the filter.
     * @param {ItemsFactureFindUniqueArgs} args - Arguments to find a ItemsFacture
     * @example
     * // Get one ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsFactureFindUniqueArgs>(args: SelectSubset<T, ItemsFactureFindUniqueArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemsFacture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsFactureFindUniqueOrThrowArgs} args - Arguments to find a ItemsFacture
     * @example
     * // Get one ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsFactureFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsFactureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsFacture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureFindFirstArgs} args - Arguments to find a ItemsFacture
     * @example
     * // Get one ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsFactureFindFirstArgs>(args?: SelectSubset<T, ItemsFactureFindFirstArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsFacture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureFindFirstOrThrowArgs} args - Arguments to find a ItemsFacture
     * @example
     * // Get one ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsFactureFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsFactureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemsFactures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsFactures
     * const itemsFactures = await prisma.itemsFacture.findMany()
     * 
     * // Get first 10 ItemsFactures
     * const itemsFactures = await prisma.itemsFacture.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsFactureWithItemIdOnly = await prisma.itemsFacture.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemsFactureFindManyArgs>(args?: SelectSubset<T, ItemsFactureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemsFacture.
     * @param {ItemsFactureCreateArgs} args - Arguments to create a ItemsFacture.
     * @example
     * // Create one ItemsFacture
     * const ItemsFacture = await prisma.itemsFacture.create({
     *   data: {
     *     // ... data to create a ItemsFacture
     *   }
     * })
     * 
     */
    create<T extends ItemsFactureCreateArgs>(args: SelectSubset<T, ItemsFactureCreateArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemsFactures.
     * @param {ItemsFactureCreateManyArgs} args - Arguments to create many ItemsFactures.
     * @example
     * // Create many ItemsFactures
     * const itemsFacture = await prisma.itemsFacture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsFactureCreateManyArgs>(args?: SelectSubset<T, ItemsFactureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemsFactures and returns the data saved in the database.
     * @param {ItemsFactureCreateManyAndReturnArgs} args - Arguments to create many ItemsFactures.
     * @example
     * // Create many ItemsFactures
     * const itemsFacture = await prisma.itemsFacture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemsFactures and only return the `itemId`
     * const itemsFactureWithItemIdOnly = await prisma.itemsFacture.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsFactureCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsFactureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemsFacture.
     * @param {ItemsFactureDeleteArgs} args - Arguments to delete one ItemsFacture.
     * @example
     * // Delete one ItemsFacture
     * const ItemsFacture = await prisma.itemsFacture.delete({
     *   where: {
     *     // ... filter to delete one ItemsFacture
     *   }
     * })
     * 
     */
    delete<T extends ItemsFactureDeleteArgs>(args: SelectSubset<T, ItemsFactureDeleteArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemsFacture.
     * @param {ItemsFactureUpdateArgs} args - Arguments to update one ItemsFacture.
     * @example
     * // Update one ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsFactureUpdateArgs>(args: SelectSubset<T, ItemsFactureUpdateArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemsFactures.
     * @param {ItemsFactureDeleteManyArgs} args - Arguments to filter ItemsFactures to delete.
     * @example
     * // Delete a few ItemsFactures
     * const { count } = await prisma.itemsFacture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsFactureDeleteManyArgs>(args?: SelectSubset<T, ItemsFactureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsFactures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsFactures
     * const itemsFacture = await prisma.itemsFacture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsFactureUpdateManyArgs>(args: SelectSubset<T, ItemsFactureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsFactures and returns the data updated in the database.
     * @param {ItemsFactureUpdateManyAndReturnArgs} args - Arguments to update many ItemsFactures.
     * @example
     * // Update many ItemsFactures
     * const itemsFacture = await prisma.itemsFacture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemsFactures and only return the `itemId`
     * const itemsFactureWithItemIdOnly = await prisma.itemsFacture.updateManyAndReturn({
     *   select: { itemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemsFactureUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsFactureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemsFacture.
     * @param {ItemsFactureUpsertArgs} args - Arguments to update or create a ItemsFacture.
     * @example
     * // Update or create a ItemsFacture
     * const itemsFacture = await prisma.itemsFacture.upsert({
     *   create: {
     *     // ... data to create a ItemsFacture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsFacture we want to update
     *   }
     * })
     */
    upsert<T extends ItemsFactureUpsertArgs>(args: SelectSubset<T, ItemsFactureUpsertArgs<ExtArgs>>): Prisma__ItemsFactureClient<$Result.GetResult<Prisma.$ItemsFacturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemsFactures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureCountArgs} args - Arguments to filter ItemsFactures to count.
     * @example
     * // Count the number of ItemsFactures
     * const count = await prisma.itemsFacture.count({
     *   where: {
     *     // ... the filter for the ItemsFactures we want to count
     *   }
     * })
    **/
    count<T extends ItemsFactureCountArgs>(
      args?: Subset<T, ItemsFactureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsFactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsFacture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsFactureAggregateArgs>(args: Subset<T, ItemsFactureAggregateArgs>): Prisma.PrismaPromise<GetItemsFactureAggregateType<T>>

    /**
     * Group by ItemsFacture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFactureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsFactureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsFactureGroupByArgs['orderBy'] }
        : { orderBy?: ItemsFactureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsFactureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemsFacture model
   */
  readonly fields: ItemsFactureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemsFacture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsFactureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factureItem<T extends FactureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FactureDefaultArgs<ExtArgs>>): Prisma__FactureClient<$Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemsFacture model
   */
  interface ItemsFactureFieldRefs {
    readonly itemId: FieldRef<"ItemsFacture", 'String'>
    readonly createAt: FieldRef<"ItemsFacture", 'DateTime'>
    readonly updateAt: FieldRef<"ItemsFacture", 'DateTime'>
    readonly description: FieldRef<"ItemsFacture", 'String'>
    readonly quantity: FieldRef<"ItemsFacture", 'Int'>
    readonly unite: FieldRef<"ItemsFacture", 'String'>
    readonly unitePrice: FieldRef<"ItemsFacture", 'Int'>
    readonly total: FieldRef<"ItemsFacture", 'Int'>
    readonly factureId: FieldRef<"ItemsFacture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemsFacture findUnique
   */
  export type ItemsFactureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter, which ItemsFacture to fetch.
     */
    where: ItemsFactureWhereUniqueInput
  }

  /**
   * ItemsFacture findUniqueOrThrow
   */
  export type ItemsFactureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter, which ItemsFacture to fetch.
     */
    where: ItemsFactureWhereUniqueInput
  }

  /**
   * ItemsFacture findFirst
   */
  export type ItemsFactureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter, which ItemsFacture to fetch.
     */
    where?: ItemsFactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsFactures to fetch.
     */
    orderBy?: ItemsFactureOrderByWithRelationInput | ItemsFactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsFactures.
     */
    cursor?: ItemsFactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsFactures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsFactures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsFactures.
     */
    distinct?: ItemsFactureScalarFieldEnum | ItemsFactureScalarFieldEnum[]
  }

  /**
   * ItemsFacture findFirstOrThrow
   */
  export type ItemsFactureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter, which ItemsFacture to fetch.
     */
    where?: ItemsFactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsFactures to fetch.
     */
    orderBy?: ItemsFactureOrderByWithRelationInput | ItemsFactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsFactures.
     */
    cursor?: ItemsFactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsFactures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsFactures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsFactures.
     */
    distinct?: ItemsFactureScalarFieldEnum | ItemsFactureScalarFieldEnum[]
  }

  /**
   * ItemsFacture findMany
   */
  export type ItemsFactureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter, which ItemsFactures to fetch.
     */
    where?: ItemsFactureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsFactures to fetch.
     */
    orderBy?: ItemsFactureOrderByWithRelationInput | ItemsFactureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemsFactures.
     */
    cursor?: ItemsFactureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsFactures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsFactures.
     */
    skip?: number
    distinct?: ItemsFactureScalarFieldEnum | ItemsFactureScalarFieldEnum[]
  }

  /**
   * ItemsFacture create
   */
  export type ItemsFactureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemsFacture.
     */
    data: XOR<ItemsFactureCreateInput, ItemsFactureUncheckedCreateInput>
  }

  /**
   * ItemsFacture createMany
   */
  export type ItemsFactureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemsFactures.
     */
    data: ItemsFactureCreateManyInput | ItemsFactureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemsFacture createManyAndReturn
   */
  export type ItemsFactureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * The data used to create many ItemsFactures.
     */
    data: ItemsFactureCreateManyInput | ItemsFactureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsFacture update
   */
  export type ItemsFactureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemsFacture.
     */
    data: XOR<ItemsFactureUpdateInput, ItemsFactureUncheckedUpdateInput>
    /**
     * Choose, which ItemsFacture to update.
     */
    where: ItemsFactureWhereUniqueInput
  }

  /**
   * ItemsFacture updateMany
   */
  export type ItemsFactureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemsFactures.
     */
    data: XOR<ItemsFactureUpdateManyMutationInput, ItemsFactureUncheckedUpdateManyInput>
    /**
     * Filter which ItemsFactures to update
     */
    where?: ItemsFactureWhereInput
    /**
     * Limit how many ItemsFactures to update.
     */
    limit?: number
  }

  /**
   * ItemsFacture updateManyAndReturn
   */
  export type ItemsFactureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * The data used to update ItemsFactures.
     */
    data: XOR<ItemsFactureUpdateManyMutationInput, ItemsFactureUncheckedUpdateManyInput>
    /**
     * Filter which ItemsFactures to update
     */
    where?: ItemsFactureWhereInput
    /**
     * Limit how many ItemsFactures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsFacture upsert
   */
  export type ItemsFactureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemsFacture to update in case it exists.
     */
    where: ItemsFactureWhereUniqueInput
    /**
     * In case the ItemsFacture found by the `where` argument doesn't exist, create a new ItemsFacture with this data.
     */
    create: XOR<ItemsFactureCreateInput, ItemsFactureUncheckedCreateInput>
    /**
     * In case the ItemsFacture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsFactureUpdateInput, ItemsFactureUncheckedUpdateInput>
  }

  /**
   * ItemsFacture delete
   */
  export type ItemsFactureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
    /**
     * Filter which ItemsFacture to delete.
     */
    where: ItemsFactureWhereUniqueInput
  }

  /**
   * ItemsFacture deleteMany
   */
  export type ItemsFactureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsFactures to delete
     */
    where?: ItemsFactureWhereInput
    /**
     * Limit how many ItemsFactures to delete.
     */
    limit?: number
  }

  /**
   * ItemsFacture without action
   */
  export type ItemsFactureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsFacture
     */
    select?: ItemsFactureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsFacture
     */
    omit?: ItemsFactureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsFactureInclude<ExtArgs> | null
  }


  /**
   * Model ItemsDevis
   */

  export type AggregateItemsDevis = {
    _count: ItemsDevisCountAggregateOutputType | null
    _avg: ItemsDevisAvgAggregateOutputType | null
    _sum: ItemsDevisSumAggregateOutputType | null
    _min: ItemsDevisMinAggregateOutputType | null
    _max: ItemsDevisMaxAggregateOutputType | null
  }

  export type ItemsDevisAvgAggregateOutputType = {
    quantity: number | null
    unitePrice: number | null
    total: number | null
  }

  export type ItemsDevisSumAggregateOutputType = {
    quantity: number | null
    unitePrice: number | null
    total: number | null
  }

  export type ItemsDevisMinAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    unite: string | null
    quantity: number | null
    unitePrice: number | null
    total: number | null
    devisId: string | null
  }

  export type ItemsDevisMaxAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    unite: string | null
    quantity: number | null
    unitePrice: number | null
    total: number | null
    devisId: string | null
  }

  export type ItemsDevisCountAggregateOutputType = {
    itemId: number
    createAt: number
    updateAt: number
    description: number
    unite: number
    quantity: number
    unitePrice: number
    total: number
    devisId: number
    _all: number
  }


  export type ItemsDevisAvgAggregateInputType = {
    quantity?: true
    unitePrice?: true
    total?: true
  }

  export type ItemsDevisSumAggregateInputType = {
    quantity?: true
    unitePrice?: true
    total?: true
  }

  export type ItemsDevisMinAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    unitePrice?: true
    total?: true
    devisId?: true
  }

  export type ItemsDevisMaxAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    unitePrice?: true
    total?: true
    devisId?: true
  }

  export type ItemsDevisCountAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    unitePrice?: true
    total?: true
    devisId?: true
    _all?: true
  }

  export type ItemsDevisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsDevis to aggregate.
     */
    where?: ItemsDevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsDevis to fetch.
     */
    orderBy?: ItemsDevisOrderByWithRelationInput | ItemsDevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsDevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsDevis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsDevis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemsDevis
    **/
    _count?: true | ItemsDevisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsDevisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsDevisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsDevisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsDevisMaxAggregateInputType
  }

  export type GetItemsDevisAggregateType<T extends ItemsDevisAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsDevis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsDevis[P]>
      : GetScalarType<T[P], AggregateItemsDevis[P]>
  }




  export type ItemsDevisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsDevisWhereInput
    orderBy?: ItemsDevisOrderByWithAggregationInput | ItemsDevisOrderByWithAggregationInput[]
    by: ItemsDevisScalarFieldEnum[] | ItemsDevisScalarFieldEnum
    having?: ItemsDevisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsDevisCountAggregateInputType | true
    _avg?: ItemsDevisAvgAggregateInputType
    _sum?: ItemsDevisSumAggregateInputType
    _min?: ItemsDevisMinAggregateInputType
    _max?: ItemsDevisMaxAggregateInputType
  }

  export type ItemsDevisGroupByOutputType = {
    itemId: string
    createAt: Date
    updateAt: Date
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
    devisId: string
    _count: ItemsDevisCountAggregateOutputType | null
    _avg: ItemsDevisAvgAggregateOutputType | null
    _sum: ItemsDevisSumAggregateOutputType | null
    _min: ItemsDevisMinAggregateOutputType | null
    _max: ItemsDevisMaxAggregateOutputType | null
  }

  type GetItemsDevisGroupByPayload<T extends ItemsDevisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsDevisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsDevisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsDevisGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsDevisGroupByOutputType[P]>
        }
      >
    >


  export type ItemsDevisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    unitePrice?: boolean
    total?: boolean
    devisId?: boolean
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsDevis"]>

  export type ItemsDevisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    unitePrice?: boolean
    total?: boolean
    devisId?: boolean
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsDevis"]>

  export type ItemsDevisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    unitePrice?: boolean
    total?: boolean
    devisId?: boolean
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsDevis"]>

  export type ItemsDevisSelectScalar = {
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    unitePrice?: boolean
    total?: boolean
    devisId?: boolean
  }

  export type ItemsDevisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "createAt" | "updateAt" | "description" | "unite" | "quantity" | "unitePrice" | "total" | "devisId", ExtArgs["result"]["itemsDevis"]>
  export type ItemsDevisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }
  export type ItemsDevisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }
  export type ItemsDevisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devisItem?: boolean | DevisDefaultArgs<ExtArgs>
  }

  export type $ItemsDevisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemsDevis"
    objects: {
      devisItem: Prisma.$DevisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: string
      createAt: Date
      updateAt: Date
      description: string
      unite: string
      quantity: number
      unitePrice: number
      total: number
      devisId: string
    }, ExtArgs["result"]["itemsDevis"]>
    composites: {}
  }

  type ItemsDevisGetPayload<S extends boolean | null | undefined | ItemsDevisDefaultArgs> = $Result.GetResult<Prisma.$ItemsDevisPayload, S>

  type ItemsDevisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsDevisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsDevisCountAggregateInputType | true
    }

  export interface ItemsDevisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemsDevis'], meta: { name: 'ItemsDevis' } }
    /**
     * Find zero or one ItemsDevis that matches the filter.
     * @param {ItemsDevisFindUniqueArgs} args - Arguments to find a ItemsDevis
     * @example
     * // Get one ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsDevisFindUniqueArgs>(args: SelectSubset<T, ItemsDevisFindUniqueArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemsDevis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsDevisFindUniqueOrThrowArgs} args - Arguments to find a ItemsDevis
     * @example
     * // Get one ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsDevisFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsDevisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsDevis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisFindFirstArgs} args - Arguments to find a ItemsDevis
     * @example
     * // Get one ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsDevisFindFirstArgs>(args?: SelectSubset<T, ItemsDevisFindFirstArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsDevis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisFindFirstOrThrowArgs} args - Arguments to find a ItemsDevis
     * @example
     * // Get one ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsDevisFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsDevisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemsDevis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findMany()
     * 
     * // Get first 10 ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsDevisWithItemIdOnly = await prisma.itemsDevis.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemsDevisFindManyArgs>(args?: SelectSubset<T, ItemsDevisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemsDevis.
     * @param {ItemsDevisCreateArgs} args - Arguments to create a ItemsDevis.
     * @example
     * // Create one ItemsDevis
     * const ItemsDevis = await prisma.itemsDevis.create({
     *   data: {
     *     // ... data to create a ItemsDevis
     *   }
     * })
     * 
     */
    create<T extends ItemsDevisCreateArgs>(args: SelectSubset<T, ItemsDevisCreateArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemsDevis.
     * @param {ItemsDevisCreateManyArgs} args - Arguments to create many ItemsDevis.
     * @example
     * // Create many ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsDevisCreateManyArgs>(args?: SelectSubset<T, ItemsDevisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemsDevis and returns the data saved in the database.
     * @param {ItemsDevisCreateManyAndReturnArgs} args - Arguments to create many ItemsDevis.
     * @example
     * // Create many ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemsDevis and only return the `itemId`
     * const itemsDevisWithItemIdOnly = await prisma.itemsDevis.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsDevisCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsDevisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemsDevis.
     * @param {ItemsDevisDeleteArgs} args - Arguments to delete one ItemsDevis.
     * @example
     * // Delete one ItemsDevis
     * const ItemsDevis = await prisma.itemsDevis.delete({
     *   where: {
     *     // ... filter to delete one ItemsDevis
     *   }
     * })
     * 
     */
    delete<T extends ItemsDevisDeleteArgs>(args: SelectSubset<T, ItemsDevisDeleteArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemsDevis.
     * @param {ItemsDevisUpdateArgs} args - Arguments to update one ItemsDevis.
     * @example
     * // Update one ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsDevisUpdateArgs>(args: SelectSubset<T, ItemsDevisUpdateArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemsDevis.
     * @param {ItemsDevisDeleteManyArgs} args - Arguments to filter ItemsDevis to delete.
     * @example
     * // Delete a few ItemsDevis
     * const { count } = await prisma.itemsDevis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsDevisDeleteManyArgs>(args?: SelectSubset<T, ItemsDevisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsDevis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsDevisUpdateManyArgs>(args: SelectSubset<T, ItemsDevisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsDevis and returns the data updated in the database.
     * @param {ItemsDevisUpdateManyAndReturnArgs} args - Arguments to update many ItemsDevis.
     * @example
     * // Update many ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemsDevis and only return the `itemId`
     * const itemsDevisWithItemIdOnly = await prisma.itemsDevis.updateManyAndReturn({
     *   select: { itemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemsDevisUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsDevisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemsDevis.
     * @param {ItemsDevisUpsertArgs} args - Arguments to update or create a ItemsDevis.
     * @example
     * // Update or create a ItemsDevis
     * const itemsDevis = await prisma.itemsDevis.upsert({
     *   create: {
     *     // ... data to create a ItemsDevis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsDevis we want to update
     *   }
     * })
     */
    upsert<T extends ItemsDevisUpsertArgs>(args: SelectSubset<T, ItemsDevisUpsertArgs<ExtArgs>>): Prisma__ItemsDevisClient<$Result.GetResult<Prisma.$ItemsDevisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemsDevis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisCountArgs} args - Arguments to filter ItemsDevis to count.
     * @example
     * // Count the number of ItemsDevis
     * const count = await prisma.itemsDevis.count({
     *   where: {
     *     // ... the filter for the ItemsDevis we want to count
     *   }
     * })
    **/
    count<T extends ItemsDevisCountArgs>(
      args?: Subset<T, ItemsDevisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsDevisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsDevis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsDevisAggregateArgs>(args: Subset<T, ItemsDevisAggregateArgs>): Prisma.PrismaPromise<GetItemsDevisAggregateType<T>>

    /**
     * Group by ItemsDevis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsDevisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsDevisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsDevisGroupByArgs['orderBy'] }
        : { orderBy?: ItemsDevisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsDevisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsDevisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemsDevis model
   */
  readonly fields: ItemsDevisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemsDevis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsDevisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devisItem<T extends DevisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DevisDefaultArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemsDevis model
   */
  interface ItemsDevisFieldRefs {
    readonly itemId: FieldRef<"ItemsDevis", 'String'>
    readonly createAt: FieldRef<"ItemsDevis", 'DateTime'>
    readonly updateAt: FieldRef<"ItemsDevis", 'DateTime'>
    readonly description: FieldRef<"ItemsDevis", 'String'>
    readonly unite: FieldRef<"ItemsDevis", 'String'>
    readonly quantity: FieldRef<"ItemsDevis", 'Int'>
    readonly unitePrice: FieldRef<"ItemsDevis", 'Int'>
    readonly total: FieldRef<"ItemsDevis", 'Int'>
    readonly devisId: FieldRef<"ItemsDevis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemsDevis findUnique
   */
  export type ItemsDevisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter, which ItemsDevis to fetch.
     */
    where: ItemsDevisWhereUniqueInput
  }

  /**
   * ItemsDevis findUniqueOrThrow
   */
  export type ItemsDevisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter, which ItemsDevis to fetch.
     */
    where: ItemsDevisWhereUniqueInput
  }

  /**
   * ItemsDevis findFirst
   */
  export type ItemsDevisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter, which ItemsDevis to fetch.
     */
    where?: ItemsDevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsDevis to fetch.
     */
    orderBy?: ItemsDevisOrderByWithRelationInput | ItemsDevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsDevis.
     */
    cursor?: ItemsDevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsDevis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsDevis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsDevis.
     */
    distinct?: ItemsDevisScalarFieldEnum | ItemsDevisScalarFieldEnum[]
  }

  /**
   * ItemsDevis findFirstOrThrow
   */
  export type ItemsDevisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter, which ItemsDevis to fetch.
     */
    where?: ItemsDevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsDevis to fetch.
     */
    orderBy?: ItemsDevisOrderByWithRelationInput | ItemsDevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsDevis.
     */
    cursor?: ItemsDevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsDevis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsDevis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsDevis.
     */
    distinct?: ItemsDevisScalarFieldEnum | ItemsDevisScalarFieldEnum[]
  }

  /**
   * ItemsDevis findMany
   */
  export type ItemsDevisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter, which ItemsDevis to fetch.
     */
    where?: ItemsDevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsDevis to fetch.
     */
    orderBy?: ItemsDevisOrderByWithRelationInput | ItemsDevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemsDevis.
     */
    cursor?: ItemsDevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsDevis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsDevis.
     */
    skip?: number
    distinct?: ItemsDevisScalarFieldEnum | ItemsDevisScalarFieldEnum[]
  }

  /**
   * ItemsDevis create
   */
  export type ItemsDevisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemsDevis.
     */
    data: XOR<ItemsDevisCreateInput, ItemsDevisUncheckedCreateInput>
  }

  /**
   * ItemsDevis createMany
   */
  export type ItemsDevisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemsDevis.
     */
    data: ItemsDevisCreateManyInput | ItemsDevisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemsDevis createManyAndReturn
   */
  export type ItemsDevisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * The data used to create many ItemsDevis.
     */
    data: ItemsDevisCreateManyInput | ItemsDevisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsDevis update
   */
  export type ItemsDevisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemsDevis.
     */
    data: XOR<ItemsDevisUpdateInput, ItemsDevisUncheckedUpdateInput>
    /**
     * Choose, which ItemsDevis to update.
     */
    where: ItemsDevisWhereUniqueInput
  }

  /**
   * ItemsDevis updateMany
   */
  export type ItemsDevisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemsDevis.
     */
    data: XOR<ItemsDevisUpdateManyMutationInput, ItemsDevisUncheckedUpdateManyInput>
    /**
     * Filter which ItemsDevis to update
     */
    where?: ItemsDevisWhereInput
    /**
     * Limit how many ItemsDevis to update.
     */
    limit?: number
  }

  /**
   * ItemsDevis updateManyAndReturn
   */
  export type ItemsDevisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * The data used to update ItemsDevis.
     */
    data: XOR<ItemsDevisUpdateManyMutationInput, ItemsDevisUncheckedUpdateManyInput>
    /**
     * Filter which ItemsDevis to update
     */
    where?: ItemsDevisWhereInput
    /**
     * Limit how many ItemsDevis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsDevis upsert
   */
  export type ItemsDevisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemsDevis to update in case it exists.
     */
    where: ItemsDevisWhereUniqueInput
    /**
     * In case the ItemsDevis found by the `where` argument doesn't exist, create a new ItemsDevis with this data.
     */
    create: XOR<ItemsDevisCreateInput, ItemsDevisUncheckedCreateInput>
    /**
     * In case the ItemsDevis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsDevisUpdateInput, ItemsDevisUncheckedUpdateInput>
  }

  /**
   * ItemsDevis delete
   */
  export type ItemsDevisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
    /**
     * Filter which ItemsDevis to delete.
     */
    where: ItemsDevisWhereUniqueInput
  }

  /**
   * ItemsDevis deleteMany
   */
  export type ItemsDevisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsDevis to delete
     */
    where?: ItemsDevisWhereInput
    /**
     * Limit how many ItemsDevis to delete.
     */
    limit?: number
  }

  /**
   * ItemsDevis without action
   */
  export type ItemsDevisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsDevis
     */
    select?: ItemsDevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsDevis
     */
    omit?: ItemsDevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsDevisInclude<ExtArgs> | null
  }


  /**
   * Model BonDeLivraison
   */

  export type AggregateBonDeLivraison = {
    _count: BonDeLivraisonCountAggregateOutputType | null
    _min: BonDeLivraisonMinAggregateOutputType | null
    _max: BonDeLivraisonMaxAggregateOutputType | null
  }

  export type BonDeLivraisonMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numBon: string | null
    description: string | null
    etat: string | null
    clientId: string | null
  }

  export type BonDeLivraisonMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updateAt: Date | null
    numBon: string | null
    description: string | null
    etat: string | null
    clientId: string | null
  }

  export type BonDeLivraisonCountAggregateOutputType = {
    id: number
    createAt: number
    updateAt: number
    numBon: number
    description: number
    etat: number
    clientId: number
    _all: number
  }


  export type BonDeLivraisonMinAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numBon?: true
    description?: true
    etat?: true
    clientId?: true
  }

  export type BonDeLivraisonMaxAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numBon?: true
    description?: true
    etat?: true
    clientId?: true
  }

  export type BonDeLivraisonCountAggregateInputType = {
    id?: true
    createAt?: true
    updateAt?: true
    numBon?: true
    description?: true
    etat?: true
    clientId?: true
    _all?: true
  }

  export type BonDeLivraisonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonDeLivraison to aggregate.
     */
    where?: BonDeLivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonDeLivraisons to fetch.
     */
    orderBy?: BonDeLivraisonOrderByWithRelationInput | BonDeLivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BonDeLivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonDeLivraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonDeLivraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BonDeLivraisons
    **/
    _count?: true | BonDeLivraisonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BonDeLivraisonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BonDeLivraisonMaxAggregateInputType
  }

  export type GetBonDeLivraisonAggregateType<T extends BonDeLivraisonAggregateArgs> = {
        [P in keyof T & keyof AggregateBonDeLivraison]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonDeLivraison[P]>
      : GetScalarType<T[P], AggregateBonDeLivraison[P]>
  }




  export type BonDeLivraisonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonDeLivraisonWhereInput
    orderBy?: BonDeLivraisonOrderByWithAggregationInput | BonDeLivraisonOrderByWithAggregationInput[]
    by: BonDeLivraisonScalarFieldEnum[] | BonDeLivraisonScalarFieldEnum
    having?: BonDeLivraisonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BonDeLivraisonCountAggregateInputType | true
    _min?: BonDeLivraisonMinAggregateInputType
    _max?: BonDeLivraisonMaxAggregateInputType
  }

  export type BonDeLivraisonGroupByOutputType = {
    id: string
    createAt: Date
    updateAt: Date
    numBon: string
    description: string
    etat: string
    clientId: string
    _count: BonDeLivraisonCountAggregateOutputType | null
    _min: BonDeLivraisonMinAggregateOutputType | null
    _max: BonDeLivraisonMaxAggregateOutputType | null
  }

  type GetBonDeLivraisonGroupByPayload<T extends BonDeLivraisonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BonDeLivraisonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BonDeLivraisonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BonDeLivraisonGroupByOutputType[P]>
            : GetScalarType<T[P], BonDeLivraisonGroupByOutputType[P]>
        }
      >
    >


  export type BonDeLivraisonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numBon?: boolean
    description?: boolean
    etat?: boolean
    clientId?: boolean
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
    blItem?: boolean | BonDeLivraison$blItemArgs<ExtArgs>
    _count?: boolean | BonDeLivraisonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonDeLivraison"]>

  export type BonDeLivraisonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numBon?: boolean
    description?: boolean
    etat?: boolean
    clientId?: boolean
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonDeLivraison"]>

  export type BonDeLivraisonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numBon?: boolean
    description?: boolean
    etat?: boolean
    clientId?: boolean
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonDeLivraison"]>

  export type BonDeLivraisonSelectScalar = {
    id?: boolean
    createAt?: boolean
    updateAt?: boolean
    numBon?: boolean
    description?: boolean
    etat?: boolean
    clientId?: boolean
  }

  export type BonDeLivraisonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createAt" | "updateAt" | "numBon" | "description" | "etat" | "clientId", ExtArgs["result"]["bonDeLivraison"]>
  export type BonDeLivraisonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
    blItem?: boolean | BonDeLivraison$blItemArgs<ExtArgs>
    _count?: boolean | BonDeLivraisonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BonDeLivraisonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type BonDeLivraisonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientBonDeLivraison?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $BonDeLivraisonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BonDeLivraison"
    objects: {
      clientBonDeLivraison: Prisma.$ClientPayload<ExtArgs>
      blItem: Prisma.$ItemsBlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createAt: Date
      updateAt: Date
      numBon: string
      description: string
      etat: string
      clientId: string
    }, ExtArgs["result"]["bonDeLivraison"]>
    composites: {}
  }

  type BonDeLivraisonGetPayload<S extends boolean | null | undefined | BonDeLivraisonDefaultArgs> = $Result.GetResult<Prisma.$BonDeLivraisonPayload, S>

  type BonDeLivraisonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BonDeLivraisonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BonDeLivraisonCountAggregateInputType | true
    }

  export interface BonDeLivraisonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BonDeLivraison'], meta: { name: 'BonDeLivraison' } }
    /**
     * Find zero or one BonDeLivraison that matches the filter.
     * @param {BonDeLivraisonFindUniqueArgs} args - Arguments to find a BonDeLivraison
     * @example
     * // Get one BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BonDeLivraisonFindUniqueArgs>(args: SelectSubset<T, BonDeLivraisonFindUniqueArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BonDeLivraison that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BonDeLivraisonFindUniqueOrThrowArgs} args - Arguments to find a BonDeLivraison
     * @example
     * // Get one BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BonDeLivraisonFindUniqueOrThrowArgs>(args: SelectSubset<T, BonDeLivraisonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BonDeLivraison that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonFindFirstArgs} args - Arguments to find a BonDeLivraison
     * @example
     * // Get one BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BonDeLivraisonFindFirstArgs>(args?: SelectSubset<T, BonDeLivraisonFindFirstArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BonDeLivraison that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonFindFirstOrThrowArgs} args - Arguments to find a BonDeLivraison
     * @example
     * // Get one BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BonDeLivraisonFindFirstOrThrowArgs>(args?: SelectSubset<T, BonDeLivraisonFindFirstOrThrowArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BonDeLivraisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BonDeLivraisons
     * const bonDeLivraisons = await prisma.bonDeLivraison.findMany()
     * 
     * // Get first 10 BonDeLivraisons
     * const bonDeLivraisons = await prisma.bonDeLivraison.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bonDeLivraisonWithIdOnly = await prisma.bonDeLivraison.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BonDeLivraisonFindManyArgs>(args?: SelectSubset<T, BonDeLivraisonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BonDeLivraison.
     * @param {BonDeLivraisonCreateArgs} args - Arguments to create a BonDeLivraison.
     * @example
     * // Create one BonDeLivraison
     * const BonDeLivraison = await prisma.bonDeLivraison.create({
     *   data: {
     *     // ... data to create a BonDeLivraison
     *   }
     * })
     * 
     */
    create<T extends BonDeLivraisonCreateArgs>(args: SelectSubset<T, BonDeLivraisonCreateArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BonDeLivraisons.
     * @param {BonDeLivraisonCreateManyArgs} args - Arguments to create many BonDeLivraisons.
     * @example
     * // Create many BonDeLivraisons
     * const bonDeLivraison = await prisma.bonDeLivraison.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BonDeLivraisonCreateManyArgs>(args?: SelectSubset<T, BonDeLivraisonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BonDeLivraisons and returns the data saved in the database.
     * @param {BonDeLivraisonCreateManyAndReturnArgs} args - Arguments to create many BonDeLivraisons.
     * @example
     * // Create many BonDeLivraisons
     * const bonDeLivraison = await prisma.bonDeLivraison.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BonDeLivraisons and only return the `id`
     * const bonDeLivraisonWithIdOnly = await prisma.bonDeLivraison.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BonDeLivraisonCreateManyAndReturnArgs>(args?: SelectSubset<T, BonDeLivraisonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BonDeLivraison.
     * @param {BonDeLivraisonDeleteArgs} args - Arguments to delete one BonDeLivraison.
     * @example
     * // Delete one BonDeLivraison
     * const BonDeLivraison = await prisma.bonDeLivraison.delete({
     *   where: {
     *     // ... filter to delete one BonDeLivraison
     *   }
     * })
     * 
     */
    delete<T extends BonDeLivraisonDeleteArgs>(args: SelectSubset<T, BonDeLivraisonDeleteArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BonDeLivraison.
     * @param {BonDeLivraisonUpdateArgs} args - Arguments to update one BonDeLivraison.
     * @example
     * // Update one BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BonDeLivraisonUpdateArgs>(args: SelectSubset<T, BonDeLivraisonUpdateArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BonDeLivraisons.
     * @param {BonDeLivraisonDeleteManyArgs} args - Arguments to filter BonDeLivraisons to delete.
     * @example
     * // Delete a few BonDeLivraisons
     * const { count } = await prisma.bonDeLivraison.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BonDeLivraisonDeleteManyArgs>(args?: SelectSubset<T, BonDeLivraisonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BonDeLivraisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BonDeLivraisons
     * const bonDeLivraison = await prisma.bonDeLivraison.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BonDeLivraisonUpdateManyArgs>(args: SelectSubset<T, BonDeLivraisonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BonDeLivraisons and returns the data updated in the database.
     * @param {BonDeLivraisonUpdateManyAndReturnArgs} args - Arguments to update many BonDeLivraisons.
     * @example
     * // Update many BonDeLivraisons
     * const bonDeLivraison = await prisma.bonDeLivraison.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BonDeLivraisons and only return the `id`
     * const bonDeLivraisonWithIdOnly = await prisma.bonDeLivraison.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BonDeLivraisonUpdateManyAndReturnArgs>(args: SelectSubset<T, BonDeLivraisonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BonDeLivraison.
     * @param {BonDeLivraisonUpsertArgs} args - Arguments to update or create a BonDeLivraison.
     * @example
     * // Update or create a BonDeLivraison
     * const bonDeLivraison = await prisma.bonDeLivraison.upsert({
     *   create: {
     *     // ... data to create a BonDeLivraison
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BonDeLivraison we want to update
     *   }
     * })
     */
    upsert<T extends BonDeLivraisonUpsertArgs>(args: SelectSubset<T, BonDeLivraisonUpsertArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BonDeLivraisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonCountArgs} args - Arguments to filter BonDeLivraisons to count.
     * @example
     * // Count the number of BonDeLivraisons
     * const count = await prisma.bonDeLivraison.count({
     *   where: {
     *     // ... the filter for the BonDeLivraisons we want to count
     *   }
     * })
    **/
    count<T extends BonDeLivraisonCountArgs>(
      args?: Subset<T, BonDeLivraisonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BonDeLivraisonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BonDeLivraison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BonDeLivraisonAggregateArgs>(args: Subset<T, BonDeLivraisonAggregateArgs>): Prisma.PrismaPromise<GetBonDeLivraisonAggregateType<T>>

    /**
     * Group by BonDeLivraison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonDeLivraisonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BonDeLivraisonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BonDeLivraisonGroupByArgs['orderBy'] }
        : { orderBy?: BonDeLivraisonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BonDeLivraisonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBonDeLivraisonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BonDeLivraison model
   */
  readonly fields: BonDeLivraisonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BonDeLivraison.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BonDeLivraisonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientBonDeLivraison<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blItem<T extends BonDeLivraison$blItemArgs<ExtArgs> = {}>(args?: Subset<T, BonDeLivraison$blItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BonDeLivraison model
   */
  interface BonDeLivraisonFieldRefs {
    readonly id: FieldRef<"BonDeLivraison", 'String'>
    readonly createAt: FieldRef<"BonDeLivraison", 'DateTime'>
    readonly updateAt: FieldRef<"BonDeLivraison", 'DateTime'>
    readonly numBon: FieldRef<"BonDeLivraison", 'String'>
    readonly description: FieldRef<"BonDeLivraison", 'String'>
    readonly etat: FieldRef<"BonDeLivraison", 'String'>
    readonly clientId: FieldRef<"BonDeLivraison", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BonDeLivraison findUnique
   */
  export type BonDeLivraisonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter, which BonDeLivraison to fetch.
     */
    where: BonDeLivraisonWhereUniqueInput
  }

  /**
   * BonDeLivraison findUniqueOrThrow
   */
  export type BonDeLivraisonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter, which BonDeLivraison to fetch.
     */
    where: BonDeLivraisonWhereUniqueInput
  }

  /**
   * BonDeLivraison findFirst
   */
  export type BonDeLivraisonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter, which BonDeLivraison to fetch.
     */
    where?: BonDeLivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonDeLivraisons to fetch.
     */
    orderBy?: BonDeLivraisonOrderByWithRelationInput | BonDeLivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonDeLivraisons.
     */
    cursor?: BonDeLivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonDeLivraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonDeLivraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonDeLivraisons.
     */
    distinct?: BonDeLivraisonScalarFieldEnum | BonDeLivraisonScalarFieldEnum[]
  }

  /**
   * BonDeLivraison findFirstOrThrow
   */
  export type BonDeLivraisonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter, which BonDeLivraison to fetch.
     */
    where?: BonDeLivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonDeLivraisons to fetch.
     */
    orderBy?: BonDeLivraisonOrderByWithRelationInput | BonDeLivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonDeLivraisons.
     */
    cursor?: BonDeLivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonDeLivraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonDeLivraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonDeLivraisons.
     */
    distinct?: BonDeLivraisonScalarFieldEnum | BonDeLivraisonScalarFieldEnum[]
  }

  /**
   * BonDeLivraison findMany
   */
  export type BonDeLivraisonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter, which BonDeLivraisons to fetch.
     */
    where?: BonDeLivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonDeLivraisons to fetch.
     */
    orderBy?: BonDeLivraisonOrderByWithRelationInput | BonDeLivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BonDeLivraisons.
     */
    cursor?: BonDeLivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonDeLivraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonDeLivraisons.
     */
    skip?: number
    distinct?: BonDeLivraisonScalarFieldEnum | BonDeLivraisonScalarFieldEnum[]
  }

  /**
   * BonDeLivraison create
   */
  export type BonDeLivraisonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * The data needed to create a BonDeLivraison.
     */
    data: XOR<BonDeLivraisonCreateInput, BonDeLivraisonUncheckedCreateInput>
  }

  /**
   * BonDeLivraison createMany
   */
  export type BonDeLivraisonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BonDeLivraisons.
     */
    data: BonDeLivraisonCreateManyInput | BonDeLivraisonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BonDeLivraison createManyAndReturn
   */
  export type BonDeLivraisonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * The data used to create many BonDeLivraisons.
     */
    data: BonDeLivraisonCreateManyInput | BonDeLivraisonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BonDeLivraison update
   */
  export type BonDeLivraisonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * The data needed to update a BonDeLivraison.
     */
    data: XOR<BonDeLivraisonUpdateInput, BonDeLivraisonUncheckedUpdateInput>
    /**
     * Choose, which BonDeLivraison to update.
     */
    where: BonDeLivraisonWhereUniqueInput
  }

  /**
   * BonDeLivraison updateMany
   */
  export type BonDeLivraisonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BonDeLivraisons.
     */
    data: XOR<BonDeLivraisonUpdateManyMutationInput, BonDeLivraisonUncheckedUpdateManyInput>
    /**
     * Filter which BonDeLivraisons to update
     */
    where?: BonDeLivraisonWhereInput
    /**
     * Limit how many BonDeLivraisons to update.
     */
    limit?: number
  }

  /**
   * BonDeLivraison updateManyAndReturn
   */
  export type BonDeLivraisonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * The data used to update BonDeLivraisons.
     */
    data: XOR<BonDeLivraisonUpdateManyMutationInput, BonDeLivraisonUncheckedUpdateManyInput>
    /**
     * Filter which BonDeLivraisons to update
     */
    where?: BonDeLivraisonWhereInput
    /**
     * Limit how many BonDeLivraisons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BonDeLivraison upsert
   */
  export type BonDeLivraisonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * The filter to search for the BonDeLivraison to update in case it exists.
     */
    where: BonDeLivraisonWhereUniqueInput
    /**
     * In case the BonDeLivraison found by the `where` argument doesn't exist, create a new BonDeLivraison with this data.
     */
    create: XOR<BonDeLivraisonCreateInput, BonDeLivraisonUncheckedCreateInput>
    /**
     * In case the BonDeLivraison was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BonDeLivraisonUpdateInput, BonDeLivraisonUncheckedUpdateInput>
  }

  /**
   * BonDeLivraison delete
   */
  export type BonDeLivraisonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
    /**
     * Filter which BonDeLivraison to delete.
     */
    where: BonDeLivraisonWhereUniqueInput
  }

  /**
   * BonDeLivraison deleteMany
   */
  export type BonDeLivraisonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonDeLivraisons to delete
     */
    where?: BonDeLivraisonWhereInput
    /**
     * Limit how many BonDeLivraisons to delete.
     */
    limit?: number
  }

  /**
   * BonDeLivraison.blItem
   */
  export type BonDeLivraison$blItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    where?: ItemsBlWhereInput
    orderBy?: ItemsBlOrderByWithRelationInput | ItemsBlOrderByWithRelationInput[]
    cursor?: ItemsBlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsBlScalarFieldEnum | ItemsBlScalarFieldEnum[]
  }

  /**
   * BonDeLivraison without action
   */
  export type BonDeLivraisonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonDeLivraison
     */
    select?: BonDeLivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonDeLivraison
     */
    omit?: BonDeLivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonDeLivraisonInclude<ExtArgs> | null
  }


  /**
   * Model ItemsBl
   */

  export type AggregateItemsBl = {
    _count: ItemsBlCountAggregateOutputType | null
    _avg: ItemsBlAvgAggregateOutputType | null
    _sum: ItemsBlSumAggregateOutputType | null
    _min: ItemsBlMinAggregateOutputType | null
    _max: ItemsBlMaxAggregateOutputType | null
  }

  export type ItemsBlAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ItemsBlSumAggregateOutputType = {
    quantity: number | null
  }

  export type ItemsBlMinAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    unite: string | null
    quantity: number | null
    BonLivId: string | null
  }

  export type ItemsBlMaxAggregateOutputType = {
    itemId: string | null
    createAt: Date | null
    updateAt: Date | null
    description: string | null
    unite: string | null
    quantity: number | null
    BonLivId: string | null
  }

  export type ItemsBlCountAggregateOutputType = {
    itemId: number
    createAt: number
    updateAt: number
    description: number
    unite: number
    quantity: number
    BonLivId: number
    _all: number
  }


  export type ItemsBlAvgAggregateInputType = {
    quantity?: true
  }

  export type ItemsBlSumAggregateInputType = {
    quantity?: true
  }

  export type ItemsBlMinAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    BonLivId?: true
  }

  export type ItemsBlMaxAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    BonLivId?: true
  }

  export type ItemsBlCountAggregateInputType = {
    itemId?: true
    createAt?: true
    updateAt?: true
    description?: true
    unite?: true
    quantity?: true
    BonLivId?: true
    _all?: true
  }

  export type ItemsBlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsBl to aggregate.
     */
    where?: ItemsBlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsBls to fetch.
     */
    orderBy?: ItemsBlOrderByWithRelationInput | ItemsBlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsBlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsBls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsBls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemsBls
    **/
    _count?: true | ItemsBlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsBlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsBlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsBlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsBlMaxAggregateInputType
  }

  export type GetItemsBlAggregateType<T extends ItemsBlAggregateArgs> = {
        [P in keyof T & keyof AggregateItemsBl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemsBl[P]>
      : GetScalarType<T[P], AggregateItemsBl[P]>
  }




  export type ItemsBlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsBlWhereInput
    orderBy?: ItemsBlOrderByWithAggregationInput | ItemsBlOrderByWithAggregationInput[]
    by: ItemsBlScalarFieldEnum[] | ItemsBlScalarFieldEnum
    having?: ItemsBlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsBlCountAggregateInputType | true
    _avg?: ItemsBlAvgAggregateInputType
    _sum?: ItemsBlSumAggregateInputType
    _min?: ItemsBlMinAggregateInputType
    _max?: ItemsBlMaxAggregateInputType
  }

  export type ItemsBlGroupByOutputType = {
    itemId: string
    createAt: Date
    updateAt: Date
    description: string
    unite: string
    quantity: number
    BonLivId: string
    _count: ItemsBlCountAggregateOutputType | null
    _avg: ItemsBlAvgAggregateOutputType | null
    _sum: ItemsBlSumAggregateOutputType | null
    _min: ItemsBlMinAggregateOutputType | null
    _max: ItemsBlMaxAggregateOutputType | null
  }

  type GetItemsBlGroupByPayload<T extends ItemsBlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsBlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsBlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsBlGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsBlGroupByOutputType[P]>
        }
      >
    >


  export type ItemsBlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    BonLivId?: boolean
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsBl"]>

  export type ItemsBlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    BonLivId?: boolean
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsBl"]>

  export type ItemsBlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    BonLivId?: boolean
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemsBl"]>

  export type ItemsBlSelectScalar = {
    itemId?: boolean
    createAt?: boolean
    updateAt?: boolean
    description?: boolean
    unite?: boolean
    quantity?: boolean
    BonLivId?: boolean
  }

  export type ItemsBlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itemId" | "createAt" | "updateAt" | "description" | "unite" | "quantity" | "BonLivId", ExtArgs["result"]["itemsBl"]>
  export type ItemsBlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }
  export type ItemsBlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }
  export type ItemsBlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blItem?: boolean | BonDeLivraisonDefaultArgs<ExtArgs>
  }

  export type $ItemsBlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemsBl"
    objects: {
      blItem: Prisma.$BonDeLivraisonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: string
      createAt: Date
      updateAt: Date
      description: string
      unite: string
      quantity: number
      BonLivId: string
    }, ExtArgs["result"]["itemsBl"]>
    composites: {}
  }

  type ItemsBlGetPayload<S extends boolean | null | undefined | ItemsBlDefaultArgs> = $Result.GetResult<Prisma.$ItemsBlPayload, S>

  type ItemsBlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsBlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsBlCountAggregateInputType | true
    }

  export interface ItemsBlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemsBl'], meta: { name: 'ItemsBl' } }
    /**
     * Find zero or one ItemsBl that matches the filter.
     * @param {ItemsBlFindUniqueArgs} args - Arguments to find a ItemsBl
     * @example
     * // Get one ItemsBl
     * const itemsBl = await prisma.itemsBl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsBlFindUniqueArgs>(args: SelectSubset<T, ItemsBlFindUniqueArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemsBl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsBlFindUniqueOrThrowArgs} args - Arguments to find a ItemsBl
     * @example
     * // Get one ItemsBl
     * const itemsBl = await prisma.itemsBl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsBlFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsBlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsBl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlFindFirstArgs} args - Arguments to find a ItemsBl
     * @example
     * // Get one ItemsBl
     * const itemsBl = await prisma.itemsBl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsBlFindFirstArgs>(args?: SelectSubset<T, ItemsBlFindFirstArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemsBl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlFindFirstOrThrowArgs} args - Arguments to find a ItemsBl
     * @example
     * // Get one ItemsBl
     * const itemsBl = await prisma.itemsBl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsBlFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsBlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemsBls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemsBls
     * const itemsBls = await prisma.itemsBl.findMany()
     * 
     * // Get first 10 ItemsBls
     * const itemsBls = await prisma.itemsBl.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const itemsBlWithItemIdOnly = await prisma.itemsBl.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends ItemsBlFindManyArgs>(args?: SelectSubset<T, ItemsBlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemsBl.
     * @param {ItemsBlCreateArgs} args - Arguments to create a ItemsBl.
     * @example
     * // Create one ItemsBl
     * const ItemsBl = await prisma.itemsBl.create({
     *   data: {
     *     // ... data to create a ItemsBl
     *   }
     * })
     * 
     */
    create<T extends ItemsBlCreateArgs>(args: SelectSubset<T, ItemsBlCreateArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemsBls.
     * @param {ItemsBlCreateManyArgs} args - Arguments to create many ItemsBls.
     * @example
     * // Create many ItemsBls
     * const itemsBl = await prisma.itemsBl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsBlCreateManyArgs>(args?: SelectSubset<T, ItemsBlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemsBls and returns the data saved in the database.
     * @param {ItemsBlCreateManyAndReturnArgs} args - Arguments to create many ItemsBls.
     * @example
     * // Create many ItemsBls
     * const itemsBl = await prisma.itemsBl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemsBls and only return the `itemId`
     * const itemsBlWithItemIdOnly = await prisma.itemsBl.createManyAndReturn({
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsBlCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsBlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemsBl.
     * @param {ItemsBlDeleteArgs} args - Arguments to delete one ItemsBl.
     * @example
     * // Delete one ItemsBl
     * const ItemsBl = await prisma.itemsBl.delete({
     *   where: {
     *     // ... filter to delete one ItemsBl
     *   }
     * })
     * 
     */
    delete<T extends ItemsBlDeleteArgs>(args: SelectSubset<T, ItemsBlDeleteArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemsBl.
     * @param {ItemsBlUpdateArgs} args - Arguments to update one ItemsBl.
     * @example
     * // Update one ItemsBl
     * const itemsBl = await prisma.itemsBl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsBlUpdateArgs>(args: SelectSubset<T, ItemsBlUpdateArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemsBls.
     * @param {ItemsBlDeleteManyArgs} args - Arguments to filter ItemsBls to delete.
     * @example
     * // Delete a few ItemsBls
     * const { count } = await prisma.itemsBl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsBlDeleteManyArgs>(args?: SelectSubset<T, ItemsBlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsBls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemsBls
     * const itemsBl = await prisma.itemsBl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsBlUpdateManyArgs>(args: SelectSubset<T, ItemsBlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemsBls and returns the data updated in the database.
     * @param {ItemsBlUpdateManyAndReturnArgs} args - Arguments to update many ItemsBls.
     * @example
     * // Update many ItemsBls
     * const itemsBl = await prisma.itemsBl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemsBls and only return the `itemId`
     * const itemsBlWithItemIdOnly = await prisma.itemsBl.updateManyAndReturn({
     *   select: { itemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemsBlUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsBlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemsBl.
     * @param {ItemsBlUpsertArgs} args - Arguments to update or create a ItemsBl.
     * @example
     * // Update or create a ItemsBl
     * const itemsBl = await prisma.itemsBl.upsert({
     *   create: {
     *     // ... data to create a ItemsBl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemsBl we want to update
     *   }
     * })
     */
    upsert<T extends ItemsBlUpsertArgs>(args: SelectSubset<T, ItemsBlUpsertArgs<ExtArgs>>): Prisma__ItemsBlClient<$Result.GetResult<Prisma.$ItemsBlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemsBls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlCountArgs} args - Arguments to filter ItemsBls to count.
     * @example
     * // Count the number of ItemsBls
     * const count = await prisma.itemsBl.count({
     *   where: {
     *     // ... the filter for the ItemsBls we want to count
     *   }
     * })
    **/
    count<T extends ItemsBlCountArgs>(
      args?: Subset<T, ItemsBlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsBlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemsBl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsBlAggregateArgs>(args: Subset<T, ItemsBlAggregateArgs>): Prisma.PrismaPromise<GetItemsBlAggregateType<T>>

    /**
     * Group by ItemsBl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsBlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsBlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsBlGroupByArgs['orderBy'] }
        : { orderBy?: ItemsBlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsBlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsBlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemsBl model
   */
  readonly fields: ItemsBlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemsBl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsBlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blItem<T extends BonDeLivraisonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BonDeLivraisonDefaultArgs<ExtArgs>>): Prisma__BonDeLivraisonClient<$Result.GetResult<Prisma.$BonDeLivraisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemsBl model
   */
  interface ItemsBlFieldRefs {
    readonly itemId: FieldRef<"ItemsBl", 'String'>
    readonly createAt: FieldRef<"ItemsBl", 'DateTime'>
    readonly updateAt: FieldRef<"ItemsBl", 'DateTime'>
    readonly description: FieldRef<"ItemsBl", 'String'>
    readonly unite: FieldRef<"ItemsBl", 'String'>
    readonly quantity: FieldRef<"ItemsBl", 'Int'>
    readonly BonLivId: FieldRef<"ItemsBl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemsBl findUnique
   */
  export type ItemsBlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter, which ItemsBl to fetch.
     */
    where: ItemsBlWhereUniqueInput
  }

  /**
   * ItemsBl findUniqueOrThrow
   */
  export type ItemsBlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter, which ItemsBl to fetch.
     */
    where: ItemsBlWhereUniqueInput
  }

  /**
   * ItemsBl findFirst
   */
  export type ItemsBlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter, which ItemsBl to fetch.
     */
    where?: ItemsBlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsBls to fetch.
     */
    orderBy?: ItemsBlOrderByWithRelationInput | ItemsBlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsBls.
     */
    cursor?: ItemsBlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsBls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsBls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsBls.
     */
    distinct?: ItemsBlScalarFieldEnum | ItemsBlScalarFieldEnum[]
  }

  /**
   * ItemsBl findFirstOrThrow
   */
  export type ItemsBlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter, which ItemsBl to fetch.
     */
    where?: ItemsBlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsBls to fetch.
     */
    orderBy?: ItemsBlOrderByWithRelationInput | ItemsBlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemsBls.
     */
    cursor?: ItemsBlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsBls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsBls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemsBls.
     */
    distinct?: ItemsBlScalarFieldEnum | ItemsBlScalarFieldEnum[]
  }

  /**
   * ItemsBl findMany
   */
  export type ItemsBlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter, which ItemsBls to fetch.
     */
    where?: ItemsBlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemsBls to fetch.
     */
    orderBy?: ItemsBlOrderByWithRelationInput | ItemsBlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemsBls.
     */
    cursor?: ItemsBlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemsBls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemsBls.
     */
    skip?: number
    distinct?: ItemsBlScalarFieldEnum | ItemsBlScalarFieldEnum[]
  }

  /**
   * ItemsBl create
   */
  export type ItemsBlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemsBl.
     */
    data: XOR<ItemsBlCreateInput, ItemsBlUncheckedCreateInput>
  }

  /**
   * ItemsBl createMany
   */
  export type ItemsBlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemsBls.
     */
    data: ItemsBlCreateManyInput | ItemsBlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemsBl createManyAndReturn
   */
  export type ItemsBlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * The data used to create many ItemsBls.
     */
    data: ItemsBlCreateManyInput | ItemsBlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsBl update
   */
  export type ItemsBlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemsBl.
     */
    data: XOR<ItemsBlUpdateInput, ItemsBlUncheckedUpdateInput>
    /**
     * Choose, which ItemsBl to update.
     */
    where: ItemsBlWhereUniqueInput
  }

  /**
   * ItemsBl updateMany
   */
  export type ItemsBlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemsBls.
     */
    data: XOR<ItemsBlUpdateManyMutationInput, ItemsBlUncheckedUpdateManyInput>
    /**
     * Filter which ItemsBls to update
     */
    where?: ItemsBlWhereInput
    /**
     * Limit how many ItemsBls to update.
     */
    limit?: number
  }

  /**
   * ItemsBl updateManyAndReturn
   */
  export type ItemsBlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * The data used to update ItemsBls.
     */
    data: XOR<ItemsBlUpdateManyMutationInput, ItemsBlUncheckedUpdateManyInput>
    /**
     * Filter which ItemsBls to update
     */
    where?: ItemsBlWhereInput
    /**
     * Limit how many ItemsBls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemsBl upsert
   */
  export type ItemsBlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemsBl to update in case it exists.
     */
    where: ItemsBlWhereUniqueInput
    /**
     * In case the ItemsBl found by the `where` argument doesn't exist, create a new ItemsBl with this data.
     */
    create: XOR<ItemsBlCreateInput, ItemsBlUncheckedCreateInput>
    /**
     * In case the ItemsBl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsBlUpdateInput, ItemsBlUncheckedUpdateInput>
  }

  /**
   * ItemsBl delete
   */
  export type ItemsBlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
    /**
     * Filter which ItemsBl to delete.
     */
    where: ItemsBlWhereUniqueInput
  }

  /**
   * ItemsBl deleteMany
   */
  export type ItemsBlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemsBls to delete
     */
    where?: ItemsBlWhereInput
    /**
     * Limit how many ItemsBls to delete.
     */
    limit?: number
  }

  /**
   * ItemsBl without action
   */
  export type ItemsBlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsBl
     */
    select?: ItemsBlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemsBl
     */
    omit?: ItemsBlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsBlInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt',
    verifCode: 'verifCode',
    isVerify: 'isVerify',
    refresToken: 'refresToken',
    lastLogin: 'lastLogin',
    passUpdateAt: 'passUpdateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    codeClient: 'codeClient',
    createAt: 'createAt',
    updateAt: 'updateAt',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    logo: 'logo'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DevisScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updateAt: 'updateAt',
    numDevis: 'numDevis',
    total: 'total',
    description: 'description',
    clientId: 'clientId'
  };

  export type DevisScalarFieldEnum = (typeof DevisScalarFieldEnum)[keyof typeof DevisScalarFieldEnum]


  export const FactureScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updateAt: 'updateAt',
    numFacture: 'numFacture',
    total: 'total',
    description: 'description',
    etat: 'etat',
    numDevis: 'numDevis',
    clientId: 'clientId'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const ItemsFactureScalarFieldEnum: {
    itemId: 'itemId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    description: 'description',
    quantity: 'quantity',
    unite: 'unite',
    unitePrice: 'unitePrice',
    total: 'total',
    factureId: 'factureId'
  };

  export type ItemsFactureScalarFieldEnum = (typeof ItemsFactureScalarFieldEnum)[keyof typeof ItemsFactureScalarFieldEnum]


  export const ItemsDevisScalarFieldEnum: {
    itemId: 'itemId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    description: 'description',
    unite: 'unite',
    quantity: 'quantity',
    unitePrice: 'unitePrice',
    total: 'total',
    devisId: 'devisId'
  };

  export type ItemsDevisScalarFieldEnum = (typeof ItemsDevisScalarFieldEnum)[keyof typeof ItemsDevisScalarFieldEnum]


  export const BonDeLivraisonScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updateAt: 'updateAt',
    numBon: 'numBon',
    description: 'description',
    etat: 'etat',
    clientId: 'clientId'
  };

  export type BonDeLivraisonScalarFieldEnum = (typeof BonDeLivraisonScalarFieldEnum)[keyof typeof BonDeLivraisonScalarFieldEnum]


  export const ItemsBlScalarFieldEnum: {
    itemId: 'itemId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    description: 'description',
    unite: 'unite',
    quantity: 'quantity',
    BonLivId: 'BonLivId'
  };

  export type ItemsBlScalarFieldEnum = (typeof ItemsBlScalarFieldEnum)[keyof typeof ItemsBlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    verifCode?: StringFilter<"User"> | string
    isVerify?: BoolFilter<"User"> | boolean
    refresToken?: StringFilter<"User"> | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    passUpdateAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    verifCode?: SortOrder
    isVerify?: SortOrder
    refresToken?: SortOrder
    lastLogin?: SortOrder
    passUpdateAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    verifCode?: StringFilter<"User"> | string
    isVerify?: BoolFilter<"User"> | boolean
    refresToken?: StringFilter<"User"> | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    passUpdateAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    verifCode?: SortOrder
    isVerify?: SortOrder
    refresToken?: SortOrder
    lastLogin?: SortOrder
    passUpdateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    verifCode?: StringWithAggregatesFilter<"User"> | string
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    refresToken?: StringWithAggregatesFilter<"User"> | string
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passUpdateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    codeClient?: StringFilter<"Client"> | string
    createAt?: DateTimeFilter<"Client"> | Date | string
    updateAt?: DateTimeFilter<"Client"> | Date | string
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    logo?: StringFilter<"Client"> | string
    devis?: DevisListRelationFilter
    facture?: FactureListRelationFilter
    bonDeLivraison?: BonDeLivraisonListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    codeClient?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    devis?: DevisOrderByRelationAggregateInput
    facture?: FactureOrderByRelationAggregateInput
    bonDeLivraison?: BonDeLivraisonOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    codeClient?: StringFilter<"Client"> | string
    createAt?: DateTimeFilter<"Client"> | Date | string
    updateAt?: DateTimeFilter<"Client"> | Date | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    logo?: StringFilter<"Client"> | string
    devis?: DevisListRelationFilter
    facture?: FactureListRelationFilter
    bonDeLivraison?: BonDeLivraisonListRelationFilter
  }, "id" | "phone">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    codeClient?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    codeClient?: StringWithAggregatesFilter<"Client"> | string
    createAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    name?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    logo?: StringWithAggregatesFilter<"Client"> | string
  }

  export type DevisWhereInput = {
    AND?: DevisWhereInput | DevisWhereInput[]
    OR?: DevisWhereInput[]
    NOT?: DevisWhereInput | DevisWhereInput[]
    id?: StringFilter<"Devis"> | string
    createAt?: DateTimeFilter<"Devis"> | Date | string
    updateAt?: DateTimeFilter<"Devis"> | Date | string
    numDevis?: StringFilter<"Devis"> | string
    total?: FloatFilter<"Devis"> | number
    description?: StringFilter<"Devis"> | string
    clientId?: StringFilter<"Devis"> | string
    clientDevis?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    devisItem?: ItemsDevisListRelationFilter
  }

  export type DevisOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numDevis?: SortOrder
    total?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    clientDevis?: ClientOrderByWithRelationInput
    devisItem?: ItemsDevisOrderByRelationAggregateInput
  }

  export type DevisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DevisWhereInput | DevisWhereInput[]
    OR?: DevisWhereInput[]
    NOT?: DevisWhereInput | DevisWhereInput[]
    createAt?: DateTimeFilter<"Devis"> | Date | string
    updateAt?: DateTimeFilter<"Devis"> | Date | string
    numDevis?: StringFilter<"Devis"> | string
    total?: FloatFilter<"Devis"> | number
    description?: StringFilter<"Devis"> | string
    clientId?: StringFilter<"Devis"> | string
    clientDevis?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    devisItem?: ItemsDevisListRelationFilter
  }, "id">

  export type DevisOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numDevis?: SortOrder
    total?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
    _count?: DevisCountOrderByAggregateInput
    _avg?: DevisAvgOrderByAggregateInput
    _max?: DevisMaxOrderByAggregateInput
    _min?: DevisMinOrderByAggregateInput
    _sum?: DevisSumOrderByAggregateInput
  }

  export type DevisScalarWhereWithAggregatesInput = {
    AND?: DevisScalarWhereWithAggregatesInput | DevisScalarWhereWithAggregatesInput[]
    OR?: DevisScalarWhereWithAggregatesInput[]
    NOT?: DevisScalarWhereWithAggregatesInput | DevisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Devis"> | string
    createAt?: DateTimeWithAggregatesFilter<"Devis"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Devis"> | Date | string
    numDevis?: StringWithAggregatesFilter<"Devis"> | string
    total?: FloatWithAggregatesFilter<"Devis"> | number
    description?: StringWithAggregatesFilter<"Devis"> | string
    clientId?: StringWithAggregatesFilter<"Devis"> | string
  }

  export type FactureWhereInput = {
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    id?: StringFilter<"Facture"> | string
    createAt?: DateTimeFilter<"Facture"> | Date | string
    updateAt?: DateTimeFilter<"Facture"> | Date | string
    numFacture?: StringFilter<"Facture"> | string
    total?: FloatFilter<"Facture"> | number
    description?: StringFilter<"Facture"> | string
    etat?: StringFilter<"Facture"> | string
    numDevis?: StringFilter<"Facture"> | string
    clientId?: StringFilter<"Facture"> | string
    clientFacture?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    factureItem?: ItemsFactureListRelationFilter
  }

  export type FactureOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numFacture?: SortOrder
    total?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    numDevis?: SortOrder
    clientId?: SortOrder
    clientFacture?: ClientOrderByWithRelationInput
    factureItem?: ItemsFactureOrderByRelationAggregateInput
  }

  export type FactureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FactureWhereInput | FactureWhereInput[]
    OR?: FactureWhereInput[]
    NOT?: FactureWhereInput | FactureWhereInput[]
    createAt?: DateTimeFilter<"Facture"> | Date | string
    updateAt?: DateTimeFilter<"Facture"> | Date | string
    numFacture?: StringFilter<"Facture"> | string
    total?: FloatFilter<"Facture"> | number
    description?: StringFilter<"Facture"> | string
    etat?: StringFilter<"Facture"> | string
    numDevis?: StringFilter<"Facture"> | string
    clientId?: StringFilter<"Facture"> | string
    clientFacture?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    factureItem?: ItemsFactureListRelationFilter
  }, "id">

  export type FactureOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numFacture?: SortOrder
    total?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    numDevis?: SortOrder
    clientId?: SortOrder
    _count?: FactureCountOrderByAggregateInput
    _avg?: FactureAvgOrderByAggregateInput
    _max?: FactureMaxOrderByAggregateInput
    _min?: FactureMinOrderByAggregateInput
    _sum?: FactureSumOrderByAggregateInput
  }

  export type FactureScalarWhereWithAggregatesInput = {
    AND?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    OR?: FactureScalarWhereWithAggregatesInput[]
    NOT?: FactureScalarWhereWithAggregatesInput | FactureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Facture"> | string
    createAt?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Facture"> | Date | string
    numFacture?: StringWithAggregatesFilter<"Facture"> | string
    total?: FloatWithAggregatesFilter<"Facture"> | number
    description?: StringWithAggregatesFilter<"Facture"> | string
    etat?: StringWithAggregatesFilter<"Facture"> | string
    numDevis?: StringWithAggregatesFilter<"Facture"> | string
    clientId?: StringWithAggregatesFilter<"Facture"> | string
  }

  export type ItemsFactureWhereInput = {
    AND?: ItemsFactureWhereInput | ItemsFactureWhereInput[]
    OR?: ItemsFactureWhereInput[]
    NOT?: ItemsFactureWhereInput | ItemsFactureWhereInput[]
    itemId?: StringFilter<"ItemsFacture"> | string
    createAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    updateAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    description?: StringFilter<"ItemsFacture"> | string
    quantity?: IntFilter<"ItemsFacture"> | number
    unite?: StringFilter<"ItemsFacture"> | string
    unitePrice?: IntFilter<"ItemsFacture"> | number
    total?: IntFilter<"ItemsFacture"> | number
    factureId?: StringFilter<"ItemsFacture"> | string
    factureItem?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }

  export type ItemsFactureOrderByWithRelationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unite?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    factureId?: SortOrder
    factureItem?: FactureOrderByWithRelationInput
  }

  export type ItemsFactureWhereUniqueInput = Prisma.AtLeast<{
    itemId?: string
    AND?: ItemsFactureWhereInput | ItemsFactureWhereInput[]
    OR?: ItemsFactureWhereInput[]
    NOT?: ItemsFactureWhereInput | ItemsFactureWhereInput[]
    createAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    updateAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    description?: StringFilter<"ItemsFacture"> | string
    quantity?: IntFilter<"ItemsFacture"> | number
    unite?: StringFilter<"ItemsFacture"> | string
    unitePrice?: IntFilter<"ItemsFacture"> | number
    total?: IntFilter<"ItemsFacture"> | number
    factureId?: StringFilter<"ItemsFacture"> | string
    factureItem?: XOR<FactureScalarRelationFilter, FactureWhereInput>
  }, "itemId">

  export type ItemsFactureOrderByWithAggregationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unite?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    factureId?: SortOrder
    _count?: ItemsFactureCountOrderByAggregateInput
    _avg?: ItemsFactureAvgOrderByAggregateInput
    _max?: ItemsFactureMaxOrderByAggregateInput
    _min?: ItemsFactureMinOrderByAggregateInput
    _sum?: ItemsFactureSumOrderByAggregateInput
  }

  export type ItemsFactureScalarWhereWithAggregatesInput = {
    AND?: ItemsFactureScalarWhereWithAggregatesInput | ItemsFactureScalarWhereWithAggregatesInput[]
    OR?: ItemsFactureScalarWhereWithAggregatesInput[]
    NOT?: ItemsFactureScalarWhereWithAggregatesInput | ItemsFactureScalarWhereWithAggregatesInput[]
    itemId?: StringWithAggregatesFilter<"ItemsFacture"> | string
    createAt?: DateTimeWithAggregatesFilter<"ItemsFacture"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ItemsFacture"> | Date | string
    description?: StringWithAggregatesFilter<"ItemsFacture"> | string
    quantity?: IntWithAggregatesFilter<"ItemsFacture"> | number
    unite?: StringWithAggregatesFilter<"ItemsFacture"> | string
    unitePrice?: IntWithAggregatesFilter<"ItemsFacture"> | number
    total?: IntWithAggregatesFilter<"ItemsFacture"> | number
    factureId?: StringWithAggregatesFilter<"ItemsFacture"> | string
  }

  export type ItemsDevisWhereInput = {
    AND?: ItemsDevisWhereInput | ItemsDevisWhereInput[]
    OR?: ItemsDevisWhereInput[]
    NOT?: ItemsDevisWhereInput | ItemsDevisWhereInput[]
    itemId?: StringFilter<"ItemsDevis"> | string
    createAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    updateAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    description?: StringFilter<"ItemsDevis"> | string
    unite?: StringFilter<"ItemsDevis"> | string
    quantity?: IntFilter<"ItemsDevis"> | number
    unitePrice?: IntFilter<"ItemsDevis"> | number
    total?: IntFilter<"ItemsDevis"> | number
    devisId?: StringFilter<"ItemsDevis"> | string
    devisItem?: XOR<DevisScalarRelationFilter, DevisWhereInput>
  }

  export type ItemsDevisOrderByWithRelationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    devisId?: SortOrder
    devisItem?: DevisOrderByWithRelationInput
  }

  export type ItemsDevisWhereUniqueInput = Prisma.AtLeast<{
    itemId?: string
    AND?: ItemsDevisWhereInput | ItemsDevisWhereInput[]
    OR?: ItemsDevisWhereInput[]
    NOT?: ItemsDevisWhereInput | ItemsDevisWhereInput[]
    createAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    updateAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    description?: StringFilter<"ItemsDevis"> | string
    unite?: StringFilter<"ItemsDevis"> | string
    quantity?: IntFilter<"ItemsDevis"> | number
    unitePrice?: IntFilter<"ItemsDevis"> | number
    total?: IntFilter<"ItemsDevis"> | number
    devisId?: StringFilter<"ItemsDevis"> | string
    devisItem?: XOR<DevisScalarRelationFilter, DevisWhereInput>
  }, "itemId">

  export type ItemsDevisOrderByWithAggregationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    devisId?: SortOrder
    _count?: ItemsDevisCountOrderByAggregateInput
    _avg?: ItemsDevisAvgOrderByAggregateInput
    _max?: ItemsDevisMaxOrderByAggregateInput
    _min?: ItemsDevisMinOrderByAggregateInput
    _sum?: ItemsDevisSumOrderByAggregateInput
  }

  export type ItemsDevisScalarWhereWithAggregatesInput = {
    AND?: ItemsDevisScalarWhereWithAggregatesInput | ItemsDevisScalarWhereWithAggregatesInput[]
    OR?: ItemsDevisScalarWhereWithAggregatesInput[]
    NOT?: ItemsDevisScalarWhereWithAggregatesInput | ItemsDevisScalarWhereWithAggregatesInput[]
    itemId?: StringWithAggregatesFilter<"ItemsDevis"> | string
    createAt?: DateTimeWithAggregatesFilter<"ItemsDevis"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ItemsDevis"> | Date | string
    description?: StringWithAggregatesFilter<"ItemsDevis"> | string
    unite?: StringWithAggregatesFilter<"ItemsDevis"> | string
    quantity?: IntWithAggregatesFilter<"ItemsDevis"> | number
    unitePrice?: IntWithAggregatesFilter<"ItemsDevis"> | number
    total?: IntWithAggregatesFilter<"ItemsDevis"> | number
    devisId?: StringWithAggregatesFilter<"ItemsDevis"> | string
  }

  export type BonDeLivraisonWhereInput = {
    AND?: BonDeLivraisonWhereInput | BonDeLivraisonWhereInput[]
    OR?: BonDeLivraisonWhereInput[]
    NOT?: BonDeLivraisonWhereInput | BonDeLivraisonWhereInput[]
    id?: StringFilter<"BonDeLivraison"> | string
    createAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    updateAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    numBon?: StringFilter<"BonDeLivraison"> | string
    description?: StringFilter<"BonDeLivraison"> | string
    etat?: StringFilter<"BonDeLivraison"> | string
    clientId?: StringFilter<"BonDeLivraison"> | string
    clientBonDeLivraison?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    blItem?: ItemsBlListRelationFilter
  }

  export type BonDeLivraisonOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numBon?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    clientId?: SortOrder
    clientBonDeLivraison?: ClientOrderByWithRelationInput
    blItem?: ItemsBlOrderByRelationAggregateInput
  }

  export type BonDeLivraisonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BonDeLivraisonWhereInput | BonDeLivraisonWhereInput[]
    OR?: BonDeLivraisonWhereInput[]
    NOT?: BonDeLivraisonWhereInput | BonDeLivraisonWhereInput[]
    createAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    updateAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    numBon?: StringFilter<"BonDeLivraison"> | string
    description?: StringFilter<"BonDeLivraison"> | string
    etat?: StringFilter<"BonDeLivraison"> | string
    clientId?: StringFilter<"BonDeLivraison"> | string
    clientBonDeLivraison?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    blItem?: ItemsBlListRelationFilter
  }, "id">

  export type BonDeLivraisonOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numBon?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    clientId?: SortOrder
    _count?: BonDeLivraisonCountOrderByAggregateInput
    _max?: BonDeLivraisonMaxOrderByAggregateInput
    _min?: BonDeLivraisonMinOrderByAggregateInput
  }

  export type BonDeLivraisonScalarWhereWithAggregatesInput = {
    AND?: BonDeLivraisonScalarWhereWithAggregatesInput | BonDeLivraisonScalarWhereWithAggregatesInput[]
    OR?: BonDeLivraisonScalarWhereWithAggregatesInput[]
    NOT?: BonDeLivraisonScalarWhereWithAggregatesInput | BonDeLivraisonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BonDeLivraison"> | string
    createAt?: DateTimeWithAggregatesFilter<"BonDeLivraison"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"BonDeLivraison"> | Date | string
    numBon?: StringWithAggregatesFilter<"BonDeLivraison"> | string
    description?: StringWithAggregatesFilter<"BonDeLivraison"> | string
    etat?: StringWithAggregatesFilter<"BonDeLivraison"> | string
    clientId?: StringWithAggregatesFilter<"BonDeLivraison"> | string
  }

  export type ItemsBlWhereInput = {
    AND?: ItemsBlWhereInput | ItemsBlWhereInput[]
    OR?: ItemsBlWhereInput[]
    NOT?: ItemsBlWhereInput | ItemsBlWhereInput[]
    itemId?: StringFilter<"ItemsBl"> | string
    createAt?: DateTimeFilter<"ItemsBl"> | Date | string
    updateAt?: DateTimeFilter<"ItemsBl"> | Date | string
    description?: StringFilter<"ItemsBl"> | string
    unite?: StringFilter<"ItemsBl"> | string
    quantity?: IntFilter<"ItemsBl"> | number
    BonLivId?: StringFilter<"ItemsBl"> | string
    blItem?: XOR<BonDeLivraisonScalarRelationFilter, BonDeLivraisonWhereInput>
  }

  export type ItemsBlOrderByWithRelationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    BonLivId?: SortOrder
    blItem?: BonDeLivraisonOrderByWithRelationInput
  }

  export type ItemsBlWhereUniqueInput = Prisma.AtLeast<{
    itemId?: string
    AND?: ItemsBlWhereInput | ItemsBlWhereInput[]
    OR?: ItemsBlWhereInput[]
    NOT?: ItemsBlWhereInput | ItemsBlWhereInput[]
    createAt?: DateTimeFilter<"ItemsBl"> | Date | string
    updateAt?: DateTimeFilter<"ItemsBl"> | Date | string
    description?: StringFilter<"ItemsBl"> | string
    unite?: StringFilter<"ItemsBl"> | string
    quantity?: IntFilter<"ItemsBl"> | number
    BonLivId?: StringFilter<"ItemsBl"> | string
    blItem?: XOR<BonDeLivraisonScalarRelationFilter, BonDeLivraisonWhereInput>
  }, "itemId">

  export type ItemsBlOrderByWithAggregationInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    BonLivId?: SortOrder
    _count?: ItemsBlCountOrderByAggregateInput
    _avg?: ItemsBlAvgOrderByAggregateInput
    _max?: ItemsBlMaxOrderByAggregateInput
    _min?: ItemsBlMinOrderByAggregateInput
    _sum?: ItemsBlSumOrderByAggregateInput
  }

  export type ItemsBlScalarWhereWithAggregatesInput = {
    AND?: ItemsBlScalarWhereWithAggregatesInput | ItemsBlScalarWhereWithAggregatesInput[]
    OR?: ItemsBlScalarWhereWithAggregatesInput[]
    NOT?: ItemsBlScalarWhereWithAggregatesInput | ItemsBlScalarWhereWithAggregatesInput[]
    itemId?: StringWithAggregatesFilter<"ItemsBl"> | string
    createAt?: DateTimeWithAggregatesFilter<"ItemsBl"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ItemsBl"> | Date | string
    description?: StringWithAggregatesFilter<"ItemsBl"> | string
    unite?: StringWithAggregatesFilter<"ItemsBl"> | string
    quantity?: IntWithAggregatesFilter<"ItemsBl"> | number
    BonLivId?: StringWithAggregatesFilter<"ItemsBl"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role?: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    verifCode: string
    isVerify?: boolean
    refresToken?: string
    lastLogin?: Date | string
    passUpdateAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role?: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    verifCode: string
    isVerify?: boolean
    refresToken?: string
    lastLogin?: Date | string
    passUpdateAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifCode?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refresToken?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passUpdateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifCode?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refresToken?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passUpdateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role?: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    verifCode: string
    isVerify?: boolean
    refresToken?: string
    lastLogin?: Date | string
    passUpdateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifCode?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refresToken?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passUpdateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifCode?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refresToken?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passUpdateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisCreateNestedManyWithoutClientDevisInput
    facture?: FactureCreateNestedManyWithoutClientFactureInput
    bonDeLivraison?: BonDeLivraisonCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisUncheckedCreateNestedManyWithoutClientDevisInput
    facture?: FactureUncheckedCreateNestedManyWithoutClientFactureInput
    bonDeLivraison?: BonDeLivraisonUncheckedCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUpdateManyWithoutClientDevisNestedInput
    facture?: FactureUpdateManyWithoutClientFactureNestedInput
    bonDeLivraison?: BonDeLivraisonUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUncheckedUpdateManyWithoutClientDevisNestedInput
    facture?: FactureUncheckedUpdateManyWithoutClientFactureNestedInput
    bonDeLivraison?: BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type DevisCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    clientDevis: ClientCreateNestedOneWithoutDevisInput
    devisItem?: ItemsDevisCreateNestedManyWithoutDevisItemInput
  }

  export type DevisUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    clientId: string
    devisItem?: ItemsDevisUncheckedCreateNestedManyWithoutDevisItemInput
  }

  export type DevisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    clientDevis?: ClientUpdateOneRequiredWithoutDevisNestedInput
    devisItem?: ItemsDevisUpdateManyWithoutDevisItemNestedInput
  }

  export type DevisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    devisItem?: ItemsDevisUncheckedUpdateManyWithoutDevisItemNestedInput
  }

  export type DevisCreateManyInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    clientId: string
  }

  export type DevisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DevisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type FactureCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    clientFacture: ClientCreateNestedOneWithoutFactureInput
    factureItem?: ItemsFactureCreateNestedManyWithoutFactureItemInput
  }

  export type FactureUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    clientId: string
    factureItem?: ItemsFactureUncheckedCreateNestedManyWithoutFactureItemInput
  }

  export type FactureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    clientFacture?: ClientUpdateOneRequiredWithoutFactureNestedInput
    factureItem?: ItemsFactureUpdateManyWithoutFactureItemNestedInput
  }

  export type FactureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    factureItem?: ItemsFactureUncheckedUpdateManyWithoutFactureItemNestedInput
  }

  export type FactureCreateManyInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    clientId: string
  }

  export type FactureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
  }

  export type FactureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsFactureCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
    factureItem: FactureCreateNestedOneWithoutFactureItemInput
  }

  export type ItemsFactureUncheckedCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
    factureId: string
  }

  export type ItemsFactureUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    factureItem?: FactureUpdateOneRequiredWithoutFactureItemNestedInput
  }

  export type ItemsFactureUncheckedUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    factureId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsFactureCreateManyInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
    factureId: string
  }

  export type ItemsFactureUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsFactureUncheckedUpdateManyInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    factureId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsDevisCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
    devisItem: DevisCreateNestedOneWithoutDevisItemInput
  }

  export type ItemsDevisUncheckedCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
    devisId: string
  }

  export type ItemsDevisUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    devisItem?: DevisUpdateOneRequiredWithoutDevisItemNestedInput
  }

  export type ItemsDevisUncheckedUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    devisId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsDevisCreateManyInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
    devisId: string
  }

  export type ItemsDevisUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsDevisUncheckedUpdateManyInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    devisId?: StringFieldUpdateOperationsInput | string
  }

  export type BonDeLivraisonCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    clientBonDeLivraison: ClientCreateNestedOneWithoutBonDeLivraisonInput
    blItem?: ItemsBlCreateNestedManyWithoutBlItemInput
  }

  export type BonDeLivraisonUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    clientId: string
    blItem?: ItemsBlUncheckedCreateNestedManyWithoutBlItemInput
  }

  export type BonDeLivraisonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    clientBonDeLivraison?: ClientUpdateOneRequiredWithoutBonDeLivraisonNestedInput
    blItem?: ItemsBlUpdateManyWithoutBlItemNestedInput
  }

  export type BonDeLivraisonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    blItem?: ItemsBlUncheckedUpdateManyWithoutBlItemNestedInput
  }

  export type BonDeLivraisonCreateManyInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    clientId: string
  }

  export type BonDeLivraisonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
  }

  export type BonDeLivraisonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsBlCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    blItem: BonDeLivraisonCreateNestedOneWithoutBlItemInput
  }

  export type ItemsBlUncheckedCreateInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    BonLivId: string
  }

  export type ItemsBlUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    blItem?: BonDeLivraisonUpdateOneRequiredWithoutBlItemNestedInput
  }

  export type ItemsBlUncheckedUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    BonLivId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsBlCreateManyInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    BonLivId: string
  }

  export type ItemsBlUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsBlUncheckedUpdateManyInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    BonLivId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    verifCode?: SortOrder
    isVerify?: SortOrder
    refresToken?: SortOrder
    lastLogin?: SortOrder
    passUpdateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    verifCode?: SortOrder
    isVerify?: SortOrder
    refresToken?: SortOrder
    lastLogin?: SortOrder
    passUpdateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    verifCode?: SortOrder
    isVerify?: SortOrder
    refresToken?: SortOrder
    lastLogin?: SortOrder
    passUpdateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DevisListRelationFilter = {
    every?: DevisWhereInput
    some?: DevisWhereInput
    none?: DevisWhereInput
  }

  export type FactureListRelationFilter = {
    every?: FactureWhereInput
    some?: FactureWhereInput
    none?: FactureWhereInput
  }

  export type BonDeLivraisonListRelationFilter = {
    every?: BonDeLivraisonWhereInput
    some?: BonDeLivraisonWhereInput
    none?: BonDeLivraisonWhereInput
  }

  export type DevisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BonDeLivraisonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    codeClient?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    logo?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    codeClient?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    logo?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    codeClient?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    logo?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ItemsDevisListRelationFilter = {
    every?: ItemsDevisWhereInput
    some?: ItemsDevisWhereInput
    none?: ItemsDevisWhereInput
  }

  export type ItemsDevisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevisCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numDevis?: SortOrder
    total?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
  }

  export type DevisAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type DevisMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numDevis?: SortOrder
    total?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
  }

  export type DevisMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numDevis?: SortOrder
    total?: SortOrder
    description?: SortOrder
    clientId?: SortOrder
  }

  export type DevisSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemsFactureListRelationFilter = {
    every?: ItemsFactureWhereInput
    some?: ItemsFactureWhereInput
    none?: ItemsFactureWhereInput
  }

  export type ItemsFactureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactureCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numFacture?: SortOrder
    total?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    numDevis?: SortOrder
    clientId?: SortOrder
  }

  export type FactureAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FactureMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numFacture?: SortOrder
    total?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    numDevis?: SortOrder
    clientId?: SortOrder
  }

  export type FactureMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numFacture?: SortOrder
    total?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    numDevis?: SortOrder
    clientId?: SortOrder
  }

  export type FactureSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FactureScalarRelationFilter = {
    is?: FactureWhereInput
    isNot?: FactureWhereInput
  }

  export type ItemsFactureCountOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unite?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    factureId?: SortOrder
  }

  export type ItemsFactureAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
  }

  export type ItemsFactureMaxOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unite?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    factureId?: SortOrder
  }

  export type ItemsFactureMinOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unite?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    factureId?: SortOrder
  }

  export type ItemsFactureSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DevisScalarRelationFilter = {
    is?: DevisWhereInput
    isNot?: DevisWhereInput
  }

  export type ItemsDevisCountOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    devisId?: SortOrder
  }

  export type ItemsDevisAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
  }

  export type ItemsDevisMaxOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    devisId?: SortOrder
  }

  export type ItemsDevisMinOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
    devisId?: SortOrder
  }

  export type ItemsDevisSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitePrice?: SortOrder
    total?: SortOrder
  }

  export type ItemsBlListRelationFilter = {
    every?: ItemsBlWhereInput
    some?: ItemsBlWhereInput
    none?: ItemsBlWhereInput
  }

  export type ItemsBlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BonDeLivraisonCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numBon?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    clientId?: SortOrder
  }

  export type BonDeLivraisonMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numBon?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    clientId?: SortOrder
  }

  export type BonDeLivraisonMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    numBon?: SortOrder
    description?: SortOrder
    etat?: SortOrder
    clientId?: SortOrder
  }

  export type BonDeLivraisonScalarRelationFilter = {
    is?: BonDeLivraisonWhereInput
    isNot?: BonDeLivraisonWhereInput
  }

  export type ItemsBlCountOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    BonLivId?: SortOrder
  }

  export type ItemsBlAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ItemsBlMaxOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    BonLivId?: SortOrder
  }

  export type ItemsBlMinOrderByAggregateInput = {
    itemId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    description?: SortOrder
    unite?: SortOrder
    quantity?: SortOrder
    BonLivId?: SortOrder
  }

  export type ItemsBlSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DevisCreateNestedManyWithoutClientDevisInput = {
    create?: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput> | DevisCreateWithoutClientDevisInput[] | DevisUncheckedCreateWithoutClientDevisInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutClientDevisInput | DevisCreateOrConnectWithoutClientDevisInput[]
    createMany?: DevisCreateManyClientDevisInputEnvelope
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
  }

  export type FactureCreateNestedManyWithoutClientFactureInput = {
    create?: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput> | FactureCreateWithoutClientFactureInput[] | FactureUncheckedCreateWithoutClientFactureInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutClientFactureInput | FactureCreateOrConnectWithoutClientFactureInput[]
    createMany?: FactureCreateManyClientFactureInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type BonDeLivraisonCreateNestedManyWithoutClientBonDeLivraisonInput = {
    create?: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput> | BonDeLivraisonCreateWithoutClientBonDeLivraisonInput[] | BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput[]
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput | BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput[]
    createMany?: BonDeLivraisonCreateManyClientBonDeLivraisonInputEnvelope
    connect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
  }

  export type DevisUncheckedCreateNestedManyWithoutClientDevisInput = {
    create?: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput> | DevisCreateWithoutClientDevisInput[] | DevisUncheckedCreateWithoutClientDevisInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutClientDevisInput | DevisCreateOrConnectWithoutClientDevisInput[]
    createMany?: DevisCreateManyClientDevisInputEnvelope
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
  }

  export type FactureUncheckedCreateNestedManyWithoutClientFactureInput = {
    create?: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput> | FactureCreateWithoutClientFactureInput[] | FactureUncheckedCreateWithoutClientFactureInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutClientFactureInput | FactureCreateOrConnectWithoutClientFactureInput[]
    createMany?: FactureCreateManyClientFactureInputEnvelope
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
  }

  export type BonDeLivraisonUncheckedCreateNestedManyWithoutClientBonDeLivraisonInput = {
    create?: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput> | BonDeLivraisonCreateWithoutClientBonDeLivraisonInput[] | BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput[]
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput | BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput[]
    createMany?: BonDeLivraisonCreateManyClientBonDeLivraisonInputEnvelope
    connect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
  }

  export type DevisUpdateManyWithoutClientDevisNestedInput = {
    create?: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput> | DevisCreateWithoutClientDevisInput[] | DevisUncheckedCreateWithoutClientDevisInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutClientDevisInput | DevisCreateOrConnectWithoutClientDevisInput[]
    upsert?: DevisUpsertWithWhereUniqueWithoutClientDevisInput | DevisUpsertWithWhereUniqueWithoutClientDevisInput[]
    createMany?: DevisCreateManyClientDevisInputEnvelope
    set?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    disconnect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    delete?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    update?: DevisUpdateWithWhereUniqueWithoutClientDevisInput | DevisUpdateWithWhereUniqueWithoutClientDevisInput[]
    updateMany?: DevisUpdateManyWithWhereWithoutClientDevisInput | DevisUpdateManyWithWhereWithoutClientDevisInput[]
    deleteMany?: DevisScalarWhereInput | DevisScalarWhereInput[]
  }

  export type FactureUpdateManyWithoutClientFactureNestedInput = {
    create?: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput> | FactureCreateWithoutClientFactureInput[] | FactureUncheckedCreateWithoutClientFactureInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutClientFactureInput | FactureCreateOrConnectWithoutClientFactureInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutClientFactureInput | FactureUpsertWithWhereUniqueWithoutClientFactureInput[]
    createMany?: FactureCreateManyClientFactureInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutClientFactureInput | FactureUpdateWithWhereUniqueWithoutClientFactureInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutClientFactureInput | FactureUpdateManyWithWhereWithoutClientFactureInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type BonDeLivraisonUpdateManyWithoutClientBonDeLivraisonNestedInput = {
    create?: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput> | BonDeLivraisonCreateWithoutClientBonDeLivraisonInput[] | BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput[]
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput | BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput[]
    upsert?: BonDeLivraisonUpsertWithWhereUniqueWithoutClientBonDeLivraisonInput | BonDeLivraisonUpsertWithWhereUniqueWithoutClientBonDeLivraisonInput[]
    createMany?: BonDeLivraisonCreateManyClientBonDeLivraisonInputEnvelope
    set?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    disconnect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    delete?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    connect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    update?: BonDeLivraisonUpdateWithWhereUniqueWithoutClientBonDeLivraisonInput | BonDeLivraisonUpdateWithWhereUniqueWithoutClientBonDeLivraisonInput[]
    updateMany?: BonDeLivraisonUpdateManyWithWhereWithoutClientBonDeLivraisonInput | BonDeLivraisonUpdateManyWithWhereWithoutClientBonDeLivraisonInput[]
    deleteMany?: BonDeLivraisonScalarWhereInput | BonDeLivraisonScalarWhereInput[]
  }

  export type DevisUncheckedUpdateManyWithoutClientDevisNestedInput = {
    create?: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput> | DevisCreateWithoutClientDevisInput[] | DevisUncheckedCreateWithoutClientDevisInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutClientDevisInput | DevisCreateOrConnectWithoutClientDevisInput[]
    upsert?: DevisUpsertWithWhereUniqueWithoutClientDevisInput | DevisUpsertWithWhereUniqueWithoutClientDevisInput[]
    createMany?: DevisCreateManyClientDevisInputEnvelope
    set?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    disconnect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    delete?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    update?: DevisUpdateWithWhereUniqueWithoutClientDevisInput | DevisUpdateWithWhereUniqueWithoutClientDevisInput[]
    updateMany?: DevisUpdateManyWithWhereWithoutClientDevisInput | DevisUpdateManyWithWhereWithoutClientDevisInput[]
    deleteMany?: DevisScalarWhereInput | DevisScalarWhereInput[]
  }

  export type FactureUncheckedUpdateManyWithoutClientFactureNestedInput = {
    create?: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput> | FactureCreateWithoutClientFactureInput[] | FactureUncheckedCreateWithoutClientFactureInput[]
    connectOrCreate?: FactureCreateOrConnectWithoutClientFactureInput | FactureCreateOrConnectWithoutClientFactureInput[]
    upsert?: FactureUpsertWithWhereUniqueWithoutClientFactureInput | FactureUpsertWithWhereUniqueWithoutClientFactureInput[]
    createMany?: FactureCreateManyClientFactureInputEnvelope
    set?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    disconnect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    delete?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    connect?: FactureWhereUniqueInput | FactureWhereUniqueInput[]
    update?: FactureUpdateWithWhereUniqueWithoutClientFactureInput | FactureUpdateWithWhereUniqueWithoutClientFactureInput[]
    updateMany?: FactureUpdateManyWithWhereWithoutClientFactureInput | FactureUpdateManyWithWhereWithoutClientFactureInput[]
    deleteMany?: FactureScalarWhereInput | FactureScalarWhereInput[]
  }

  export type BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonNestedInput = {
    create?: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput> | BonDeLivraisonCreateWithoutClientBonDeLivraisonInput[] | BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput[]
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput | BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput[]
    upsert?: BonDeLivraisonUpsertWithWhereUniqueWithoutClientBonDeLivraisonInput | BonDeLivraisonUpsertWithWhereUniqueWithoutClientBonDeLivraisonInput[]
    createMany?: BonDeLivraisonCreateManyClientBonDeLivraisonInputEnvelope
    set?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    disconnect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    delete?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    connect?: BonDeLivraisonWhereUniqueInput | BonDeLivraisonWhereUniqueInput[]
    update?: BonDeLivraisonUpdateWithWhereUniqueWithoutClientBonDeLivraisonInput | BonDeLivraisonUpdateWithWhereUniqueWithoutClientBonDeLivraisonInput[]
    updateMany?: BonDeLivraisonUpdateManyWithWhereWithoutClientBonDeLivraisonInput | BonDeLivraisonUpdateManyWithWhereWithoutClientBonDeLivraisonInput[]
    deleteMany?: BonDeLivraisonScalarWhereInput | BonDeLivraisonScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutDevisInput = {
    create?: XOR<ClientCreateWithoutDevisInput, ClientUncheckedCreateWithoutDevisInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevisInput
    connect?: ClientWhereUniqueInput
  }

  export type ItemsDevisCreateNestedManyWithoutDevisItemInput = {
    create?: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput> | ItemsDevisCreateWithoutDevisItemInput[] | ItemsDevisUncheckedCreateWithoutDevisItemInput[]
    connectOrCreate?: ItemsDevisCreateOrConnectWithoutDevisItemInput | ItemsDevisCreateOrConnectWithoutDevisItemInput[]
    createMany?: ItemsDevisCreateManyDevisItemInputEnvelope
    connect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
  }

  export type ItemsDevisUncheckedCreateNestedManyWithoutDevisItemInput = {
    create?: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput> | ItemsDevisCreateWithoutDevisItemInput[] | ItemsDevisUncheckedCreateWithoutDevisItemInput[]
    connectOrCreate?: ItemsDevisCreateOrConnectWithoutDevisItemInput | ItemsDevisCreateOrConnectWithoutDevisItemInput[]
    createMany?: ItemsDevisCreateManyDevisItemInputEnvelope
    connect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutDevisNestedInput = {
    create?: XOR<ClientCreateWithoutDevisInput, ClientUncheckedCreateWithoutDevisInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevisInput
    upsert?: ClientUpsertWithoutDevisInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDevisInput, ClientUpdateWithoutDevisInput>, ClientUncheckedUpdateWithoutDevisInput>
  }

  export type ItemsDevisUpdateManyWithoutDevisItemNestedInput = {
    create?: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput> | ItemsDevisCreateWithoutDevisItemInput[] | ItemsDevisUncheckedCreateWithoutDevisItemInput[]
    connectOrCreate?: ItemsDevisCreateOrConnectWithoutDevisItemInput | ItemsDevisCreateOrConnectWithoutDevisItemInput[]
    upsert?: ItemsDevisUpsertWithWhereUniqueWithoutDevisItemInput | ItemsDevisUpsertWithWhereUniqueWithoutDevisItemInput[]
    createMany?: ItemsDevisCreateManyDevisItemInputEnvelope
    set?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    disconnect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    delete?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    connect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    update?: ItemsDevisUpdateWithWhereUniqueWithoutDevisItemInput | ItemsDevisUpdateWithWhereUniqueWithoutDevisItemInput[]
    updateMany?: ItemsDevisUpdateManyWithWhereWithoutDevisItemInput | ItemsDevisUpdateManyWithWhereWithoutDevisItemInput[]
    deleteMany?: ItemsDevisScalarWhereInput | ItemsDevisScalarWhereInput[]
  }

  export type ItemsDevisUncheckedUpdateManyWithoutDevisItemNestedInput = {
    create?: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput> | ItemsDevisCreateWithoutDevisItemInput[] | ItemsDevisUncheckedCreateWithoutDevisItemInput[]
    connectOrCreate?: ItemsDevisCreateOrConnectWithoutDevisItemInput | ItemsDevisCreateOrConnectWithoutDevisItemInput[]
    upsert?: ItemsDevisUpsertWithWhereUniqueWithoutDevisItemInput | ItemsDevisUpsertWithWhereUniqueWithoutDevisItemInput[]
    createMany?: ItemsDevisCreateManyDevisItemInputEnvelope
    set?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    disconnect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    delete?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    connect?: ItemsDevisWhereUniqueInput | ItemsDevisWhereUniqueInput[]
    update?: ItemsDevisUpdateWithWhereUniqueWithoutDevisItemInput | ItemsDevisUpdateWithWhereUniqueWithoutDevisItemInput[]
    updateMany?: ItemsDevisUpdateManyWithWhereWithoutDevisItemInput | ItemsDevisUpdateManyWithWhereWithoutDevisItemInput[]
    deleteMany?: ItemsDevisScalarWhereInput | ItemsDevisScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutFactureInput = {
    create?: XOR<ClientCreateWithoutFactureInput, ClientUncheckedCreateWithoutFactureInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFactureInput
    connect?: ClientWhereUniqueInput
  }

  export type ItemsFactureCreateNestedManyWithoutFactureItemInput = {
    create?: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput> | ItemsFactureCreateWithoutFactureItemInput[] | ItemsFactureUncheckedCreateWithoutFactureItemInput[]
    connectOrCreate?: ItemsFactureCreateOrConnectWithoutFactureItemInput | ItemsFactureCreateOrConnectWithoutFactureItemInput[]
    createMany?: ItemsFactureCreateManyFactureItemInputEnvelope
    connect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
  }

  export type ItemsFactureUncheckedCreateNestedManyWithoutFactureItemInput = {
    create?: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput> | ItemsFactureCreateWithoutFactureItemInput[] | ItemsFactureUncheckedCreateWithoutFactureItemInput[]
    connectOrCreate?: ItemsFactureCreateOrConnectWithoutFactureItemInput | ItemsFactureCreateOrConnectWithoutFactureItemInput[]
    createMany?: ItemsFactureCreateManyFactureItemInputEnvelope
    connect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutFactureNestedInput = {
    create?: XOR<ClientCreateWithoutFactureInput, ClientUncheckedCreateWithoutFactureInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFactureInput
    upsert?: ClientUpsertWithoutFactureInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutFactureInput, ClientUpdateWithoutFactureInput>, ClientUncheckedUpdateWithoutFactureInput>
  }

  export type ItemsFactureUpdateManyWithoutFactureItemNestedInput = {
    create?: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput> | ItemsFactureCreateWithoutFactureItemInput[] | ItemsFactureUncheckedCreateWithoutFactureItemInput[]
    connectOrCreate?: ItemsFactureCreateOrConnectWithoutFactureItemInput | ItemsFactureCreateOrConnectWithoutFactureItemInput[]
    upsert?: ItemsFactureUpsertWithWhereUniqueWithoutFactureItemInput | ItemsFactureUpsertWithWhereUniqueWithoutFactureItemInput[]
    createMany?: ItemsFactureCreateManyFactureItemInputEnvelope
    set?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    disconnect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    delete?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    connect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    update?: ItemsFactureUpdateWithWhereUniqueWithoutFactureItemInput | ItemsFactureUpdateWithWhereUniqueWithoutFactureItemInput[]
    updateMany?: ItemsFactureUpdateManyWithWhereWithoutFactureItemInput | ItemsFactureUpdateManyWithWhereWithoutFactureItemInput[]
    deleteMany?: ItemsFactureScalarWhereInput | ItemsFactureScalarWhereInput[]
  }

  export type ItemsFactureUncheckedUpdateManyWithoutFactureItemNestedInput = {
    create?: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput> | ItemsFactureCreateWithoutFactureItemInput[] | ItemsFactureUncheckedCreateWithoutFactureItemInput[]
    connectOrCreate?: ItemsFactureCreateOrConnectWithoutFactureItemInput | ItemsFactureCreateOrConnectWithoutFactureItemInput[]
    upsert?: ItemsFactureUpsertWithWhereUniqueWithoutFactureItemInput | ItemsFactureUpsertWithWhereUniqueWithoutFactureItemInput[]
    createMany?: ItemsFactureCreateManyFactureItemInputEnvelope
    set?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    disconnect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    delete?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    connect?: ItemsFactureWhereUniqueInput | ItemsFactureWhereUniqueInput[]
    update?: ItemsFactureUpdateWithWhereUniqueWithoutFactureItemInput | ItemsFactureUpdateWithWhereUniqueWithoutFactureItemInput[]
    updateMany?: ItemsFactureUpdateManyWithWhereWithoutFactureItemInput | ItemsFactureUpdateManyWithWhereWithoutFactureItemInput[]
    deleteMany?: ItemsFactureScalarWhereInput | ItemsFactureScalarWhereInput[]
  }

  export type FactureCreateNestedOneWithoutFactureItemInput = {
    create?: XOR<FactureCreateWithoutFactureItemInput, FactureUncheckedCreateWithoutFactureItemInput>
    connectOrCreate?: FactureCreateOrConnectWithoutFactureItemInput
    connect?: FactureWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FactureUpdateOneRequiredWithoutFactureItemNestedInput = {
    create?: XOR<FactureCreateWithoutFactureItemInput, FactureUncheckedCreateWithoutFactureItemInput>
    connectOrCreate?: FactureCreateOrConnectWithoutFactureItemInput
    upsert?: FactureUpsertWithoutFactureItemInput
    connect?: FactureWhereUniqueInput
    update?: XOR<XOR<FactureUpdateToOneWithWhereWithoutFactureItemInput, FactureUpdateWithoutFactureItemInput>, FactureUncheckedUpdateWithoutFactureItemInput>
  }

  export type DevisCreateNestedOneWithoutDevisItemInput = {
    create?: XOR<DevisCreateWithoutDevisItemInput, DevisUncheckedCreateWithoutDevisItemInput>
    connectOrCreate?: DevisCreateOrConnectWithoutDevisItemInput
    connect?: DevisWhereUniqueInput
  }

  export type DevisUpdateOneRequiredWithoutDevisItemNestedInput = {
    create?: XOR<DevisCreateWithoutDevisItemInput, DevisUncheckedCreateWithoutDevisItemInput>
    connectOrCreate?: DevisCreateOrConnectWithoutDevisItemInput
    upsert?: DevisUpsertWithoutDevisItemInput
    connect?: DevisWhereUniqueInput
    update?: XOR<XOR<DevisUpdateToOneWithWhereWithoutDevisItemInput, DevisUpdateWithoutDevisItemInput>, DevisUncheckedUpdateWithoutDevisItemInput>
  }

  export type ClientCreateNestedOneWithoutBonDeLivraisonInput = {
    create?: XOR<ClientCreateWithoutBonDeLivraisonInput, ClientUncheckedCreateWithoutBonDeLivraisonInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBonDeLivraisonInput
    connect?: ClientWhereUniqueInput
  }

  export type ItemsBlCreateNestedManyWithoutBlItemInput = {
    create?: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput> | ItemsBlCreateWithoutBlItemInput[] | ItemsBlUncheckedCreateWithoutBlItemInput[]
    connectOrCreate?: ItemsBlCreateOrConnectWithoutBlItemInput | ItemsBlCreateOrConnectWithoutBlItemInput[]
    createMany?: ItemsBlCreateManyBlItemInputEnvelope
    connect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
  }

  export type ItemsBlUncheckedCreateNestedManyWithoutBlItemInput = {
    create?: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput> | ItemsBlCreateWithoutBlItemInput[] | ItemsBlUncheckedCreateWithoutBlItemInput[]
    connectOrCreate?: ItemsBlCreateOrConnectWithoutBlItemInput | ItemsBlCreateOrConnectWithoutBlItemInput[]
    createMany?: ItemsBlCreateManyBlItemInputEnvelope
    connect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutBonDeLivraisonNestedInput = {
    create?: XOR<ClientCreateWithoutBonDeLivraisonInput, ClientUncheckedCreateWithoutBonDeLivraisonInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBonDeLivraisonInput
    upsert?: ClientUpsertWithoutBonDeLivraisonInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBonDeLivraisonInput, ClientUpdateWithoutBonDeLivraisonInput>, ClientUncheckedUpdateWithoutBonDeLivraisonInput>
  }

  export type ItemsBlUpdateManyWithoutBlItemNestedInput = {
    create?: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput> | ItemsBlCreateWithoutBlItemInput[] | ItemsBlUncheckedCreateWithoutBlItemInput[]
    connectOrCreate?: ItemsBlCreateOrConnectWithoutBlItemInput | ItemsBlCreateOrConnectWithoutBlItemInput[]
    upsert?: ItemsBlUpsertWithWhereUniqueWithoutBlItemInput | ItemsBlUpsertWithWhereUniqueWithoutBlItemInput[]
    createMany?: ItemsBlCreateManyBlItemInputEnvelope
    set?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    disconnect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    delete?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    connect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    update?: ItemsBlUpdateWithWhereUniqueWithoutBlItemInput | ItemsBlUpdateWithWhereUniqueWithoutBlItemInput[]
    updateMany?: ItemsBlUpdateManyWithWhereWithoutBlItemInput | ItemsBlUpdateManyWithWhereWithoutBlItemInput[]
    deleteMany?: ItemsBlScalarWhereInput | ItemsBlScalarWhereInput[]
  }

  export type ItemsBlUncheckedUpdateManyWithoutBlItemNestedInput = {
    create?: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput> | ItemsBlCreateWithoutBlItemInput[] | ItemsBlUncheckedCreateWithoutBlItemInput[]
    connectOrCreate?: ItemsBlCreateOrConnectWithoutBlItemInput | ItemsBlCreateOrConnectWithoutBlItemInput[]
    upsert?: ItemsBlUpsertWithWhereUniqueWithoutBlItemInput | ItemsBlUpsertWithWhereUniqueWithoutBlItemInput[]
    createMany?: ItemsBlCreateManyBlItemInputEnvelope
    set?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    disconnect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    delete?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    connect?: ItemsBlWhereUniqueInput | ItemsBlWhereUniqueInput[]
    update?: ItemsBlUpdateWithWhereUniqueWithoutBlItemInput | ItemsBlUpdateWithWhereUniqueWithoutBlItemInput[]
    updateMany?: ItemsBlUpdateManyWithWhereWithoutBlItemInput | ItemsBlUpdateManyWithWhereWithoutBlItemInput[]
    deleteMany?: ItemsBlScalarWhereInput | ItemsBlScalarWhereInput[]
  }

  export type BonDeLivraisonCreateNestedOneWithoutBlItemInput = {
    create?: XOR<BonDeLivraisonCreateWithoutBlItemInput, BonDeLivraisonUncheckedCreateWithoutBlItemInput>
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutBlItemInput
    connect?: BonDeLivraisonWhereUniqueInput
  }

  export type BonDeLivraisonUpdateOneRequiredWithoutBlItemNestedInput = {
    create?: XOR<BonDeLivraisonCreateWithoutBlItemInput, BonDeLivraisonUncheckedCreateWithoutBlItemInput>
    connectOrCreate?: BonDeLivraisonCreateOrConnectWithoutBlItemInput
    upsert?: BonDeLivraisonUpsertWithoutBlItemInput
    connect?: BonDeLivraisonWhereUniqueInput
    update?: XOR<XOR<BonDeLivraisonUpdateToOneWithWhereWithoutBlItemInput, BonDeLivraisonUpdateWithoutBlItemInput>, BonDeLivraisonUncheckedUpdateWithoutBlItemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DevisCreateWithoutClientDevisInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    devisItem?: ItemsDevisCreateNestedManyWithoutDevisItemInput
  }

  export type DevisUncheckedCreateWithoutClientDevisInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    devisItem?: ItemsDevisUncheckedCreateNestedManyWithoutDevisItemInput
  }

  export type DevisCreateOrConnectWithoutClientDevisInput = {
    where: DevisWhereUniqueInput
    create: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput>
  }

  export type DevisCreateManyClientDevisInputEnvelope = {
    data: DevisCreateManyClientDevisInput | DevisCreateManyClientDevisInput[]
    skipDuplicates?: boolean
  }

  export type FactureCreateWithoutClientFactureInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    factureItem?: ItemsFactureCreateNestedManyWithoutFactureItemInput
  }

  export type FactureUncheckedCreateWithoutClientFactureInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    factureItem?: ItemsFactureUncheckedCreateNestedManyWithoutFactureItemInput
  }

  export type FactureCreateOrConnectWithoutClientFactureInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput>
  }

  export type FactureCreateManyClientFactureInputEnvelope = {
    data: FactureCreateManyClientFactureInput | FactureCreateManyClientFactureInput[]
    skipDuplicates?: boolean
  }

  export type BonDeLivraisonCreateWithoutClientBonDeLivraisonInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    blItem?: ItemsBlCreateNestedManyWithoutBlItemInput
  }

  export type BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    blItem?: ItemsBlUncheckedCreateNestedManyWithoutBlItemInput
  }

  export type BonDeLivraisonCreateOrConnectWithoutClientBonDeLivraisonInput = {
    where: BonDeLivraisonWhereUniqueInput
    create: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput>
  }

  export type BonDeLivraisonCreateManyClientBonDeLivraisonInputEnvelope = {
    data: BonDeLivraisonCreateManyClientBonDeLivraisonInput | BonDeLivraisonCreateManyClientBonDeLivraisonInput[]
    skipDuplicates?: boolean
  }

  export type DevisUpsertWithWhereUniqueWithoutClientDevisInput = {
    where: DevisWhereUniqueInput
    update: XOR<DevisUpdateWithoutClientDevisInput, DevisUncheckedUpdateWithoutClientDevisInput>
    create: XOR<DevisCreateWithoutClientDevisInput, DevisUncheckedCreateWithoutClientDevisInput>
  }

  export type DevisUpdateWithWhereUniqueWithoutClientDevisInput = {
    where: DevisWhereUniqueInput
    data: XOR<DevisUpdateWithoutClientDevisInput, DevisUncheckedUpdateWithoutClientDevisInput>
  }

  export type DevisUpdateManyWithWhereWithoutClientDevisInput = {
    where: DevisScalarWhereInput
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyWithoutClientDevisInput>
  }

  export type DevisScalarWhereInput = {
    AND?: DevisScalarWhereInput | DevisScalarWhereInput[]
    OR?: DevisScalarWhereInput[]
    NOT?: DevisScalarWhereInput | DevisScalarWhereInput[]
    id?: StringFilter<"Devis"> | string
    createAt?: DateTimeFilter<"Devis"> | Date | string
    updateAt?: DateTimeFilter<"Devis"> | Date | string
    numDevis?: StringFilter<"Devis"> | string
    total?: FloatFilter<"Devis"> | number
    description?: StringFilter<"Devis"> | string
    clientId?: StringFilter<"Devis"> | string
  }

  export type FactureUpsertWithWhereUniqueWithoutClientFactureInput = {
    where: FactureWhereUniqueInput
    update: XOR<FactureUpdateWithoutClientFactureInput, FactureUncheckedUpdateWithoutClientFactureInput>
    create: XOR<FactureCreateWithoutClientFactureInput, FactureUncheckedCreateWithoutClientFactureInput>
  }

  export type FactureUpdateWithWhereUniqueWithoutClientFactureInput = {
    where: FactureWhereUniqueInput
    data: XOR<FactureUpdateWithoutClientFactureInput, FactureUncheckedUpdateWithoutClientFactureInput>
  }

  export type FactureUpdateManyWithWhereWithoutClientFactureInput = {
    where: FactureScalarWhereInput
    data: XOR<FactureUpdateManyMutationInput, FactureUncheckedUpdateManyWithoutClientFactureInput>
  }

  export type FactureScalarWhereInput = {
    AND?: FactureScalarWhereInput | FactureScalarWhereInput[]
    OR?: FactureScalarWhereInput[]
    NOT?: FactureScalarWhereInput | FactureScalarWhereInput[]
    id?: StringFilter<"Facture"> | string
    createAt?: DateTimeFilter<"Facture"> | Date | string
    updateAt?: DateTimeFilter<"Facture"> | Date | string
    numFacture?: StringFilter<"Facture"> | string
    total?: FloatFilter<"Facture"> | number
    description?: StringFilter<"Facture"> | string
    etat?: StringFilter<"Facture"> | string
    numDevis?: StringFilter<"Facture"> | string
    clientId?: StringFilter<"Facture"> | string
  }

  export type BonDeLivraisonUpsertWithWhereUniqueWithoutClientBonDeLivraisonInput = {
    where: BonDeLivraisonWhereUniqueInput
    update: XOR<BonDeLivraisonUpdateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedUpdateWithoutClientBonDeLivraisonInput>
    create: XOR<BonDeLivraisonCreateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedCreateWithoutClientBonDeLivraisonInput>
  }

  export type BonDeLivraisonUpdateWithWhereUniqueWithoutClientBonDeLivraisonInput = {
    where: BonDeLivraisonWhereUniqueInput
    data: XOR<BonDeLivraisonUpdateWithoutClientBonDeLivraisonInput, BonDeLivraisonUncheckedUpdateWithoutClientBonDeLivraisonInput>
  }

  export type BonDeLivraisonUpdateManyWithWhereWithoutClientBonDeLivraisonInput = {
    where: BonDeLivraisonScalarWhereInput
    data: XOR<BonDeLivraisonUpdateManyMutationInput, BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonInput>
  }

  export type BonDeLivraisonScalarWhereInput = {
    AND?: BonDeLivraisonScalarWhereInput | BonDeLivraisonScalarWhereInput[]
    OR?: BonDeLivraisonScalarWhereInput[]
    NOT?: BonDeLivraisonScalarWhereInput | BonDeLivraisonScalarWhereInput[]
    id?: StringFilter<"BonDeLivraison"> | string
    createAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    updateAt?: DateTimeFilter<"BonDeLivraison"> | Date | string
    numBon?: StringFilter<"BonDeLivraison"> | string
    description?: StringFilter<"BonDeLivraison"> | string
    etat?: StringFilter<"BonDeLivraison"> | string
    clientId?: StringFilter<"BonDeLivraison"> | string
  }

  export type ClientCreateWithoutDevisInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    facture?: FactureCreateNestedManyWithoutClientFactureInput
    bonDeLivraison?: BonDeLivraisonCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientUncheckedCreateWithoutDevisInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    facture?: FactureUncheckedCreateNestedManyWithoutClientFactureInput
    bonDeLivraison?: BonDeLivraisonUncheckedCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientCreateOrConnectWithoutDevisInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDevisInput, ClientUncheckedCreateWithoutDevisInput>
  }

  export type ItemsDevisCreateWithoutDevisItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
  }

  export type ItemsDevisUncheckedCreateWithoutDevisItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
  }

  export type ItemsDevisCreateOrConnectWithoutDevisItemInput = {
    where: ItemsDevisWhereUniqueInput
    create: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput>
  }

  export type ItemsDevisCreateManyDevisItemInputEnvelope = {
    data: ItemsDevisCreateManyDevisItemInput | ItemsDevisCreateManyDevisItemInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutDevisInput = {
    update: XOR<ClientUpdateWithoutDevisInput, ClientUncheckedUpdateWithoutDevisInput>
    create: XOR<ClientCreateWithoutDevisInput, ClientUncheckedCreateWithoutDevisInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDevisInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDevisInput, ClientUncheckedUpdateWithoutDevisInput>
  }

  export type ClientUpdateWithoutDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    facture?: FactureUpdateManyWithoutClientFactureNestedInput
    bonDeLivraison?: BonDeLivraisonUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ClientUncheckedUpdateWithoutDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    facture?: FactureUncheckedUpdateManyWithoutClientFactureNestedInput
    bonDeLivraison?: BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ItemsDevisUpsertWithWhereUniqueWithoutDevisItemInput = {
    where: ItemsDevisWhereUniqueInput
    update: XOR<ItemsDevisUpdateWithoutDevisItemInput, ItemsDevisUncheckedUpdateWithoutDevisItemInput>
    create: XOR<ItemsDevisCreateWithoutDevisItemInput, ItemsDevisUncheckedCreateWithoutDevisItemInput>
  }

  export type ItemsDevisUpdateWithWhereUniqueWithoutDevisItemInput = {
    where: ItemsDevisWhereUniqueInput
    data: XOR<ItemsDevisUpdateWithoutDevisItemInput, ItemsDevisUncheckedUpdateWithoutDevisItemInput>
  }

  export type ItemsDevisUpdateManyWithWhereWithoutDevisItemInput = {
    where: ItemsDevisScalarWhereInput
    data: XOR<ItemsDevisUpdateManyMutationInput, ItemsDevisUncheckedUpdateManyWithoutDevisItemInput>
  }

  export type ItemsDevisScalarWhereInput = {
    AND?: ItemsDevisScalarWhereInput | ItemsDevisScalarWhereInput[]
    OR?: ItemsDevisScalarWhereInput[]
    NOT?: ItemsDevisScalarWhereInput | ItemsDevisScalarWhereInput[]
    itemId?: StringFilter<"ItemsDevis"> | string
    createAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    updateAt?: DateTimeFilter<"ItemsDevis"> | Date | string
    description?: StringFilter<"ItemsDevis"> | string
    unite?: StringFilter<"ItemsDevis"> | string
    quantity?: IntFilter<"ItemsDevis"> | number
    unitePrice?: IntFilter<"ItemsDevis"> | number
    total?: IntFilter<"ItemsDevis"> | number
    devisId?: StringFilter<"ItemsDevis"> | string
  }

  export type ClientCreateWithoutFactureInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisCreateNestedManyWithoutClientDevisInput
    bonDeLivraison?: BonDeLivraisonCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientUncheckedCreateWithoutFactureInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisUncheckedCreateNestedManyWithoutClientDevisInput
    bonDeLivraison?: BonDeLivraisonUncheckedCreateNestedManyWithoutClientBonDeLivraisonInput
  }

  export type ClientCreateOrConnectWithoutFactureInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutFactureInput, ClientUncheckedCreateWithoutFactureInput>
  }

  export type ItemsFactureCreateWithoutFactureItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
  }

  export type ItemsFactureUncheckedCreateWithoutFactureItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
  }

  export type ItemsFactureCreateOrConnectWithoutFactureItemInput = {
    where: ItemsFactureWhereUniqueInput
    create: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput>
  }

  export type ItemsFactureCreateManyFactureItemInputEnvelope = {
    data: ItemsFactureCreateManyFactureItemInput | ItemsFactureCreateManyFactureItemInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutFactureInput = {
    update: XOR<ClientUpdateWithoutFactureInput, ClientUncheckedUpdateWithoutFactureInput>
    create: XOR<ClientCreateWithoutFactureInput, ClientUncheckedCreateWithoutFactureInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutFactureInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutFactureInput, ClientUncheckedUpdateWithoutFactureInput>
  }

  export type ClientUpdateWithoutFactureInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUpdateManyWithoutClientDevisNestedInput
    bonDeLivraison?: BonDeLivraisonUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ClientUncheckedUpdateWithoutFactureInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUncheckedUpdateManyWithoutClientDevisNestedInput
    bonDeLivraison?: BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonNestedInput
  }

  export type ItemsFactureUpsertWithWhereUniqueWithoutFactureItemInput = {
    where: ItemsFactureWhereUniqueInput
    update: XOR<ItemsFactureUpdateWithoutFactureItemInput, ItemsFactureUncheckedUpdateWithoutFactureItemInput>
    create: XOR<ItemsFactureCreateWithoutFactureItemInput, ItemsFactureUncheckedCreateWithoutFactureItemInput>
  }

  export type ItemsFactureUpdateWithWhereUniqueWithoutFactureItemInput = {
    where: ItemsFactureWhereUniqueInput
    data: XOR<ItemsFactureUpdateWithoutFactureItemInput, ItemsFactureUncheckedUpdateWithoutFactureItemInput>
  }

  export type ItemsFactureUpdateManyWithWhereWithoutFactureItemInput = {
    where: ItemsFactureScalarWhereInput
    data: XOR<ItemsFactureUpdateManyMutationInput, ItemsFactureUncheckedUpdateManyWithoutFactureItemInput>
  }

  export type ItemsFactureScalarWhereInput = {
    AND?: ItemsFactureScalarWhereInput | ItemsFactureScalarWhereInput[]
    OR?: ItemsFactureScalarWhereInput[]
    NOT?: ItemsFactureScalarWhereInput | ItemsFactureScalarWhereInput[]
    itemId?: StringFilter<"ItemsFacture"> | string
    createAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    updateAt?: DateTimeFilter<"ItemsFacture"> | Date | string
    description?: StringFilter<"ItemsFacture"> | string
    quantity?: IntFilter<"ItemsFacture"> | number
    unite?: StringFilter<"ItemsFacture"> | string
    unitePrice?: IntFilter<"ItemsFacture"> | number
    total?: IntFilter<"ItemsFacture"> | number
    factureId?: StringFilter<"ItemsFacture"> | string
  }

  export type FactureCreateWithoutFactureItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    clientFacture: ClientCreateNestedOneWithoutFactureInput
  }

  export type FactureUncheckedCreateWithoutFactureItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
    clientId: string
  }

  export type FactureCreateOrConnectWithoutFactureItemInput = {
    where: FactureWhereUniqueInput
    create: XOR<FactureCreateWithoutFactureItemInput, FactureUncheckedCreateWithoutFactureItemInput>
  }

  export type FactureUpsertWithoutFactureItemInput = {
    update: XOR<FactureUpdateWithoutFactureItemInput, FactureUncheckedUpdateWithoutFactureItemInput>
    create: XOR<FactureCreateWithoutFactureItemInput, FactureUncheckedCreateWithoutFactureItemInput>
    where?: FactureWhereInput
  }

  export type FactureUpdateToOneWithWhereWithoutFactureItemInput = {
    where?: FactureWhereInput
    data: XOR<FactureUpdateWithoutFactureItemInput, FactureUncheckedUpdateWithoutFactureItemInput>
  }

  export type FactureUpdateWithoutFactureItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    clientFacture?: ClientUpdateOneRequiredWithoutFactureNestedInput
  }

  export type FactureUncheckedUpdateWithoutFactureItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type DevisCreateWithoutDevisItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    clientDevis: ClientCreateNestedOneWithoutDevisInput
  }

  export type DevisUncheckedCreateWithoutDevisItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
    clientId: string
  }

  export type DevisCreateOrConnectWithoutDevisItemInput = {
    where: DevisWhereUniqueInput
    create: XOR<DevisCreateWithoutDevisItemInput, DevisUncheckedCreateWithoutDevisItemInput>
  }

  export type DevisUpsertWithoutDevisItemInput = {
    update: XOR<DevisUpdateWithoutDevisItemInput, DevisUncheckedUpdateWithoutDevisItemInput>
    create: XOR<DevisCreateWithoutDevisItemInput, DevisUncheckedCreateWithoutDevisItemInput>
    where?: DevisWhereInput
  }

  export type DevisUpdateToOneWithWhereWithoutDevisItemInput = {
    where?: DevisWhereInput
    data: XOR<DevisUpdateWithoutDevisItemInput, DevisUncheckedUpdateWithoutDevisItemInput>
  }

  export type DevisUpdateWithoutDevisItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    clientDevis?: ClientUpdateOneRequiredWithoutDevisNestedInput
  }

  export type DevisUncheckedUpdateWithoutDevisItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateWithoutBonDeLivraisonInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisCreateNestedManyWithoutClientDevisInput
    facture?: FactureCreateNestedManyWithoutClientFactureInput
  }

  export type ClientUncheckedCreateWithoutBonDeLivraisonInput = {
    id?: string
    codeClient: string
    createAt?: Date | string
    updateAt?: Date | string
    name: string
    phone: string
    email: string
    address: string
    logo?: string
    devis?: DevisUncheckedCreateNestedManyWithoutClientDevisInput
    facture?: FactureUncheckedCreateNestedManyWithoutClientFactureInput
  }

  export type ClientCreateOrConnectWithoutBonDeLivraisonInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBonDeLivraisonInput, ClientUncheckedCreateWithoutBonDeLivraisonInput>
  }

  export type ItemsBlCreateWithoutBlItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
  }

  export type ItemsBlUncheckedCreateWithoutBlItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
  }

  export type ItemsBlCreateOrConnectWithoutBlItemInput = {
    where: ItemsBlWhereUniqueInput
    create: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput>
  }

  export type ItemsBlCreateManyBlItemInputEnvelope = {
    data: ItemsBlCreateManyBlItemInput | ItemsBlCreateManyBlItemInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutBonDeLivraisonInput = {
    update: XOR<ClientUpdateWithoutBonDeLivraisonInput, ClientUncheckedUpdateWithoutBonDeLivraisonInput>
    create: XOR<ClientCreateWithoutBonDeLivraisonInput, ClientUncheckedCreateWithoutBonDeLivraisonInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBonDeLivraisonInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBonDeLivraisonInput, ClientUncheckedUpdateWithoutBonDeLivraisonInput>
  }

  export type ClientUpdateWithoutBonDeLivraisonInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUpdateManyWithoutClientDevisNestedInput
    facture?: FactureUpdateManyWithoutClientFactureNestedInput
  }

  export type ClientUncheckedUpdateWithoutBonDeLivraisonInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeClient?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    devis?: DevisUncheckedUpdateManyWithoutClientDevisNestedInput
    facture?: FactureUncheckedUpdateManyWithoutClientFactureNestedInput
  }

  export type ItemsBlUpsertWithWhereUniqueWithoutBlItemInput = {
    where: ItemsBlWhereUniqueInput
    update: XOR<ItemsBlUpdateWithoutBlItemInput, ItemsBlUncheckedUpdateWithoutBlItemInput>
    create: XOR<ItemsBlCreateWithoutBlItemInput, ItemsBlUncheckedCreateWithoutBlItemInput>
  }

  export type ItemsBlUpdateWithWhereUniqueWithoutBlItemInput = {
    where: ItemsBlWhereUniqueInput
    data: XOR<ItemsBlUpdateWithoutBlItemInput, ItemsBlUncheckedUpdateWithoutBlItemInput>
  }

  export type ItemsBlUpdateManyWithWhereWithoutBlItemInput = {
    where: ItemsBlScalarWhereInput
    data: XOR<ItemsBlUpdateManyMutationInput, ItemsBlUncheckedUpdateManyWithoutBlItemInput>
  }

  export type ItemsBlScalarWhereInput = {
    AND?: ItemsBlScalarWhereInput | ItemsBlScalarWhereInput[]
    OR?: ItemsBlScalarWhereInput[]
    NOT?: ItemsBlScalarWhereInput | ItemsBlScalarWhereInput[]
    itemId?: StringFilter<"ItemsBl"> | string
    createAt?: DateTimeFilter<"ItemsBl"> | Date | string
    updateAt?: DateTimeFilter<"ItemsBl"> | Date | string
    description?: StringFilter<"ItemsBl"> | string
    unite?: StringFilter<"ItemsBl"> | string
    quantity?: IntFilter<"ItemsBl"> | number
    BonLivId?: StringFilter<"ItemsBl"> | string
  }

  export type BonDeLivraisonCreateWithoutBlItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    clientBonDeLivraison: ClientCreateNestedOneWithoutBonDeLivraisonInput
  }

  export type BonDeLivraisonUncheckedCreateWithoutBlItemInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
    clientId: string
  }

  export type BonDeLivraisonCreateOrConnectWithoutBlItemInput = {
    where: BonDeLivraisonWhereUniqueInput
    create: XOR<BonDeLivraisonCreateWithoutBlItemInput, BonDeLivraisonUncheckedCreateWithoutBlItemInput>
  }

  export type BonDeLivraisonUpsertWithoutBlItemInput = {
    update: XOR<BonDeLivraisonUpdateWithoutBlItemInput, BonDeLivraisonUncheckedUpdateWithoutBlItemInput>
    create: XOR<BonDeLivraisonCreateWithoutBlItemInput, BonDeLivraisonUncheckedCreateWithoutBlItemInput>
    where?: BonDeLivraisonWhereInput
  }

  export type BonDeLivraisonUpdateToOneWithWhereWithoutBlItemInput = {
    where?: BonDeLivraisonWhereInput
    data: XOR<BonDeLivraisonUpdateWithoutBlItemInput, BonDeLivraisonUncheckedUpdateWithoutBlItemInput>
  }

  export type BonDeLivraisonUpdateWithoutBlItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    clientBonDeLivraison?: ClientUpdateOneRequiredWithoutBonDeLivraisonNestedInput
  }

  export type BonDeLivraisonUncheckedUpdateWithoutBlItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type DevisCreateManyClientDevisInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numDevis: string
    total?: number
    description: string
  }

  export type FactureCreateManyClientFactureInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numFacture: string
    total?: number
    description: string
    etat?: string
    numDevis?: string
  }

  export type BonDeLivraisonCreateManyClientBonDeLivraisonInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    numBon: string
    description: string
    etat?: string
  }

  export type DevisUpdateWithoutClientDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    devisItem?: ItemsDevisUpdateManyWithoutDevisItemNestedInput
  }

  export type DevisUncheckedUpdateWithoutClientDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    devisItem?: ItemsDevisUncheckedUpdateManyWithoutDevisItemNestedInput
  }

  export type DevisUncheckedUpdateManyWithoutClientDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numDevis?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FactureUpdateWithoutClientFactureInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    factureItem?: ItemsFactureUpdateManyWithoutFactureItemNestedInput
  }

  export type FactureUncheckedUpdateWithoutClientFactureInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
    factureItem?: ItemsFactureUncheckedUpdateManyWithoutFactureItemNestedInput
  }

  export type FactureUncheckedUpdateManyWithoutClientFactureInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numFacture?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    numDevis?: StringFieldUpdateOperationsInput | string
  }

  export type BonDeLivraisonUpdateWithoutClientBonDeLivraisonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    blItem?: ItemsBlUpdateManyWithoutBlItemNestedInput
  }

  export type BonDeLivraisonUncheckedUpdateWithoutClientBonDeLivraisonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
    blItem?: ItemsBlUncheckedUpdateManyWithoutBlItemNestedInput
  }

  export type BonDeLivraisonUncheckedUpdateManyWithoutClientBonDeLivraisonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    numBon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    etat?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsDevisCreateManyDevisItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
    unitePrice: number
    total: number
  }

  export type ItemsDevisUpdateWithoutDevisItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsDevisUncheckedUpdateWithoutDevisItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsDevisUncheckedUpdateManyWithoutDevisItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsFactureCreateManyFactureItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    quantity: number
    unite: string
    unitePrice: number
    total: number
  }

  export type ItemsFactureUpdateWithoutFactureItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsFactureUncheckedUpdateWithoutFactureItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsFactureUncheckedUpdateManyWithoutFactureItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unite?: StringFieldUpdateOperationsInput | string
    unitePrice?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsBlCreateManyBlItemInput = {
    itemId?: string
    createAt?: Date | string
    updateAt?: Date | string
    description: string
    unite: string
    quantity: number
  }

  export type ItemsBlUpdateWithoutBlItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsBlUncheckedUpdateWithoutBlItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemsBlUncheckedUpdateManyWithoutBlItemInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    unite?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}