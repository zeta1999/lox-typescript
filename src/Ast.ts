import Token from "./Token"

export type Binary = { type: "binary"; left: Expr; operator: Token; right: Expr }
export type Grouping = { type: "grouping"; expression: Expr }
export type Call = { type: "call"; callee: Expr; paren: Token; arguments: Expr[] }
export type Literal = { type: "literal"; value: any }
export type Logical = { type: "logical"; left: Expr; operator: Token; right: Expr }
export type Unary = { type: "unary"; operator: Token; right: Expr }
export type Variable = { type: "variable"; name: Token }
export type Assign = { type: "assign"; name: Token; value: Expr }
export type Get = { type: "get"; name: Token; object: Expr }
export type Set = { type: "set"; object: Expr; name: Token; value: Expr }
export type This = { type: "this"; keyword: Token }
export type Super = { type: "super"; keyword: Token; method: Token }

export type Expr =
  | Binary
  | Grouping
  | Literal
  | Unary
  | Variable
  | Assign
  | Logical
  | Call
  | Get
  | Set
  | This
  | Super

export type ExpressionStmt = { type: "expression statement"; expression: Expr }
export type PrintStmt = { type: "print statement"; expression: Expr }
export type VarStmt = { type: "var statement"; name: Token; initializer: Expr | null }
export type BlockStmt = { type: "block statement"; statements: Stmt[] }
export type ClassStmt = {
  type: "class statement"
  name: Token
  superclass: Variable | null
  methods: FunctionStmt[]
}
export type IfStmt = {
  type: "if statement"
  condition: Expr
  thenBranch: Stmt
  elseBranch: Stmt | null
}
export type WhileStmt = {
  type: "while statement"
  condition: Expr
  body: Stmt
}
export type FunctionStmt = {
  type: "function statement"
  name: Token
  params: Token[]
  body: Stmt[]
}

export type ReturnStmt = {
  type: "return statement"
  keyword: Token
  value: Expr | null
}

export type Stmt =
  | ExpressionStmt
  | PrintStmt
  | VarStmt
  | BlockStmt
  | IfStmt
  | WhileStmt
  | FunctionStmt
  | ReturnStmt
  | ClassStmt
