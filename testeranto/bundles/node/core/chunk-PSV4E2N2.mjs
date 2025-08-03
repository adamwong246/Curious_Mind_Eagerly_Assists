import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Logger
} from "./chunk-X2NKHCUU.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM,
  init_cjs_shim
} from "./chunk-LFLTOQ4W.mjs";

// node_modules/z3-solver/build/z3-built.js
var require_z3_built = __commonJS({
  "node_modules/z3-solver/build/z3-built.js"(exports, module) {
    init_cjs_shim();
    var initZ3 = (() => {
      var _scriptName = typeof document != "undefined" ? document.currentScript?.src : void 0;
      if (typeof __filename != "undefined")
        _scriptName = _scriptName || __filename;
      return function(moduleArg = {}) {
        var moduleRtn;
        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        ["_malloc", "_free", "_set_throwy_error_handler", "_set_noop_error_handler", "_async_Z3_eval_smtlib2_string", "_async_Z3_simplify", "_async_Z3_simplify_ex", "_async_Z3_solver_check", "_async_Z3_solver_check_assumptions", "_async_Z3_solver_cube", "_async_Z3_solver_get_consequences", "_async_Z3_tactic_apply", "_async_Z3_tactic_apply_ex", "_async_Z3_optimize_check", "_async_Z3_algebraic_roots", "_async_Z3_algebraic_eval", "_async_Z3_fixedpoint_query", "_async_Z3_fixedpoint_query_relations", "_async_Z3_fixedpoint_query_from_lvl", "_async_Z3_polynomial_subresultants", "_Z3_global_param_set", "_Z3_global_param_reset_all", "_Z3_global_param_get", "_Z3_mk_config", "_Z3_del_config", "_Z3_set_param_value", "_Z3_mk_context", "_Z3_mk_context_rc", "_Z3_del_context", "_Z3_inc_ref", "_Z3_dec_ref", "_Z3_update_param_value", "_Z3_get_global_param_descrs", "_Z3_interrupt", "_Z3_enable_concurrent_dec_ref", "_Z3_mk_params", "_Z3_params_inc_ref", "_Z3_params_dec_ref", "_Z3_params_set_bool", "_Z3_params_set_uint", "_Z3_params_set_double", "_Z3_params_set_symbol", "_Z3_params_to_string", "_Z3_params_validate", "_Z3_param_descrs_inc_ref", "_Z3_param_descrs_dec_ref", "_Z3_param_descrs_get_kind", "_Z3_param_descrs_size", "_Z3_param_descrs_get_name", "_Z3_param_descrs_get_documentation", "_Z3_param_descrs_to_string", "_Z3_mk_int_symbol", "_Z3_mk_string_symbol", "_Z3_mk_uninterpreted_sort", "_Z3_mk_type_variable", "_Z3_mk_bool_sort", "_Z3_mk_int_sort", "_Z3_mk_real_sort", "_Z3_mk_bv_sort", "_Z3_mk_finite_domain_sort", "_Z3_mk_array_sort", "_Z3_mk_array_sort_n", "_Z3_mk_tuple_sort", "_Z3_mk_enumeration_sort", "_Z3_mk_list_sort", "_Z3_mk_constructor", "_Z3_constructor_num_fields", "_Z3_del_constructor", "_Z3_mk_datatype", "_Z3_mk_datatype_sort", "_Z3_mk_constructor_list", "_Z3_del_constructor_list", "_Z3_mk_datatypes", "_Z3_query_constructor", "_Z3_mk_func_decl", "_Z3_mk_app", "_Z3_mk_const", "_Z3_mk_fresh_func_decl", "_Z3_mk_fresh_const", "_Z3_mk_rec_func_decl", "_Z3_add_rec_def", "_Z3_mk_true", "_Z3_mk_false", "_Z3_mk_eq", "_Z3_mk_distinct", "_Z3_mk_not", "_Z3_mk_ite", "_Z3_mk_iff", "_Z3_mk_implies", "_Z3_mk_xor", "_Z3_mk_and", "_Z3_mk_or", "_Z3_mk_add", "_Z3_mk_mul", "_Z3_mk_sub", "_Z3_mk_unary_minus", "_Z3_mk_div", "_Z3_mk_mod", "_Z3_mk_rem", "_Z3_mk_power", "_Z3_mk_abs", "_Z3_mk_lt", "_Z3_mk_le", "_Z3_mk_gt", "_Z3_mk_ge", "_Z3_mk_divides", "_Z3_mk_int2real", "_Z3_mk_real2int", "_Z3_mk_is_int", "_Z3_mk_bvnot", "_Z3_mk_bvredand", "_Z3_mk_bvredor", "_Z3_mk_bvand", "_Z3_mk_bvor", "_Z3_mk_bvxor", "_Z3_mk_bvnand", "_Z3_mk_bvnor", "_Z3_mk_bvxnor", "_Z3_mk_bvneg", "_Z3_mk_bvadd", "_Z3_mk_bvsub", "_Z3_mk_bvmul", "_Z3_mk_bvudiv", "_Z3_mk_bvsdiv", "_Z3_mk_bvurem", "_Z3_mk_bvsrem", "_Z3_mk_bvsmod", "_Z3_mk_bvult", "_Z3_mk_bvslt", "_Z3_mk_bvule", "_Z3_mk_bvsle", "_Z3_mk_bvuge", "_Z3_mk_bvsge", "_Z3_mk_bvugt", "_Z3_mk_bvsgt", "_Z3_mk_concat", "_Z3_mk_extract", "_Z3_mk_sign_ext", "_Z3_mk_zero_ext", "_Z3_mk_repeat", "_Z3_mk_bit2bool", "_Z3_mk_bvshl", "_Z3_mk_bvlshr", "_Z3_mk_bvashr", "_Z3_mk_rotate_left", "_Z3_mk_rotate_right", "_Z3_mk_ext_rotate_left", "_Z3_mk_ext_rotate_right", "_Z3_mk_int2bv", "_Z3_mk_bv2int", "_Z3_mk_bvadd_no_overflow", "_Z3_mk_bvadd_no_underflow", "_Z3_mk_bvsub_no_overflow", "_Z3_mk_bvsub_no_underflow", "_Z3_mk_bvsdiv_no_overflow", "_Z3_mk_bvneg_no_overflow", "_Z3_mk_bvmul_no_overflow", "_Z3_mk_bvmul_no_underflow", "_Z3_mk_select", "_Z3_mk_select_n", "_Z3_mk_store", "_Z3_mk_store_n", "_Z3_mk_const_array", "_Z3_mk_map", "_Z3_mk_array_default", "_Z3_mk_as_array", "_Z3_mk_set_has_size", "_Z3_mk_set_sort", "_Z3_mk_empty_set", "_Z3_mk_full_set", "_Z3_mk_set_add", "_Z3_mk_set_del", "_Z3_mk_set_union", "_Z3_mk_set_intersect", "_Z3_mk_set_difference", "_Z3_mk_set_complement", "_Z3_mk_set_member", "_Z3_mk_set_subset", "_Z3_mk_array_ext", "_Z3_mk_numeral", "_Z3_mk_real", "_Z3_mk_real_int64", "_Z3_mk_int", "_Z3_mk_unsigned_int", "_Z3_mk_int64", "_Z3_mk_unsigned_int64", "_Z3_mk_bv_numeral", "_Z3_mk_seq_sort", "_Z3_is_seq_sort", "_Z3_get_seq_sort_basis", "_Z3_mk_re_sort", "_Z3_is_re_sort", "_Z3_get_re_sort_basis", "_Z3_mk_string_sort", "_Z3_mk_char_sort", "_Z3_is_string_sort", "_Z3_is_char_sort", "_Z3_mk_string", "_Z3_mk_lstring", "_Z3_mk_u32string", "_Z3_is_string", "_Z3_get_string", "_Z3_get_lstring", "_Z3_get_string_length", "_Z3_get_string_contents", "_Z3_mk_seq_empty", "_Z3_mk_seq_unit", "_Z3_mk_seq_concat", "_Z3_mk_seq_prefix", "_Z3_mk_seq_suffix", "_Z3_mk_seq_contains", "_Z3_mk_str_lt", "_Z3_mk_str_le", "_Z3_mk_seq_extract", "_Z3_mk_seq_replace", "_Z3_mk_seq_at", "_Z3_mk_seq_nth", "_Z3_mk_seq_length", "_Z3_mk_seq_index", "_Z3_mk_seq_last_index", "_Z3_mk_seq_map", "_Z3_mk_seq_mapi", "_Z3_mk_seq_foldl", "_Z3_mk_seq_foldli", "_Z3_mk_str_to_int", "_Z3_mk_int_to_str", "_Z3_mk_string_to_code", "_Z3_mk_string_from_code", "_Z3_mk_ubv_to_str", "_Z3_mk_sbv_to_str", "_Z3_mk_seq_to_re", "_Z3_mk_seq_in_re", "_Z3_mk_re_plus", "_Z3_mk_re_star", "_Z3_mk_re_option", "_Z3_mk_re_union", "_Z3_mk_re_concat", "_Z3_mk_re_range", "_Z3_mk_re_allchar", "_Z3_mk_re_loop", "_Z3_mk_re_power", "_Z3_mk_re_intersect", "_Z3_mk_re_complement", "_Z3_mk_re_diff", "_Z3_mk_re_empty", "_Z3_mk_re_full", "_Z3_mk_char", "_Z3_mk_char_le", "_Z3_mk_char_to_int", "_Z3_mk_char_to_bv", "_Z3_mk_char_from_bv", "_Z3_mk_char_is_digit", "_Z3_mk_linear_order", "_Z3_mk_partial_order", "_Z3_mk_piecewise_linear_order", "_Z3_mk_tree_order", "_Z3_mk_transitive_closure", "_Z3_mk_pattern", "_Z3_mk_bound", "_Z3_mk_forall", "_Z3_mk_exists", "_Z3_mk_quantifier", "_Z3_mk_quantifier_ex", "_Z3_mk_forall_const", "_Z3_mk_exists_const", "_Z3_mk_quantifier_const", "_Z3_mk_quantifier_const_ex", "_Z3_mk_lambda", "_Z3_mk_lambda_const", "_Z3_get_symbol_kind", "_Z3_get_symbol_int", "_Z3_get_symbol_string", "_Z3_get_sort_name", "_Z3_get_sort_id", "_Z3_sort_to_ast", "_Z3_is_eq_sort", "_Z3_get_sort_kind", "_Z3_get_bv_sort_size", "_Z3_get_finite_domain_sort_size", "_Z3_get_array_arity", "_Z3_get_array_sort_domain", "_Z3_get_array_sort_domain_n", "_Z3_get_array_sort_range", "_Z3_get_tuple_sort_mk_decl", "_Z3_get_tuple_sort_num_fields", "_Z3_get_tuple_sort_field_decl", "_Z3_is_recursive_datatype_sort", "_Z3_get_datatype_sort_num_constructors", "_Z3_get_datatype_sort_constructor", "_Z3_get_datatype_sort_recognizer", "_Z3_get_datatype_sort_constructor_accessor", "_Z3_datatype_update_field", "_Z3_get_relation_arity", "_Z3_get_relation_column", "_Z3_mk_atmost", "_Z3_mk_atleast", "_Z3_mk_pble", "_Z3_mk_pbge", "_Z3_mk_pbeq", "_Z3_func_decl_to_ast", "_Z3_is_eq_func_decl", "_Z3_get_func_decl_id", "_Z3_get_decl_name", "_Z3_get_decl_kind", "_Z3_get_domain_size", "_Z3_get_arity", "_Z3_get_domain", "_Z3_get_range", "_Z3_get_decl_num_parameters", "_Z3_get_decl_parameter_kind", "_Z3_get_decl_int_parameter", "_Z3_get_decl_double_parameter", "_Z3_get_decl_symbol_parameter", "_Z3_get_decl_sort_parameter", "_Z3_get_decl_ast_parameter", "_Z3_get_decl_func_decl_parameter", "_Z3_get_decl_rational_parameter", "_Z3_app_to_ast", "_Z3_get_app_decl", "_Z3_get_app_num_args", "_Z3_get_app_arg", "_Z3_is_eq_ast", "_Z3_get_ast_id", "_Z3_get_ast_hash", "_Z3_get_sort", "_Z3_is_well_sorted", "_Z3_get_bool_value", "_Z3_get_ast_kind", "_Z3_is_app", "_Z3_is_ground", "_Z3_get_depth", "_Z3_is_numeral_ast", "_Z3_is_algebraic_number", "_Z3_to_app", "_Z3_to_func_decl", "_Z3_get_numeral_string", "_Z3_get_numeral_binary_string", "_Z3_get_numeral_decimal_string", "_Z3_get_numeral_double", "_Z3_get_numerator", "_Z3_get_denominator", "_Z3_get_numeral_small", "_Z3_get_numeral_int", "_Z3_get_numeral_uint", "_Z3_get_numeral_uint64", "_Z3_get_numeral_int64", "_Z3_get_numeral_rational_int64", "_Z3_get_algebraic_number_lower", "_Z3_get_algebraic_number_upper", "_Z3_pattern_to_ast", "_Z3_get_pattern_num_terms", "_Z3_get_pattern", "_Z3_get_index_value", "_Z3_is_quantifier_forall", "_Z3_is_quantifier_exists", "_Z3_is_lambda", "_Z3_get_quantifier_weight", "_Z3_get_quantifier_skolem_id", "_Z3_get_quantifier_id", "_Z3_get_quantifier_num_patterns", "_Z3_get_quantifier_pattern_ast", "_Z3_get_quantifier_num_no_patterns", "_Z3_get_quantifier_no_pattern_ast", "_Z3_get_quantifier_num_bound", "_Z3_get_quantifier_bound_name", "_Z3_get_quantifier_bound_sort", "_Z3_get_quantifier_body", "_Z3_simplify", "_Z3_simplify_ex", "_Z3_simplify_get_help", "_Z3_simplify_get_param_descrs", "_Z3_update_term", "_Z3_substitute", "_Z3_substitute_vars", "_Z3_substitute_funs", "_Z3_translate", "_Z3_mk_model", "_Z3_model_inc_ref", "_Z3_model_dec_ref", "_Z3_model_eval", "_Z3_model_get_const_interp", "_Z3_model_has_interp", "_Z3_model_get_func_interp", "_Z3_model_get_num_consts", "_Z3_model_get_const_decl", "_Z3_model_get_num_funcs", "_Z3_model_get_func_decl", "_Z3_model_get_num_sorts", "_Z3_model_get_sort", "_Z3_model_get_sort_universe", "_Z3_model_translate", "_Z3_is_as_array", "_Z3_get_as_array_func_decl", "_Z3_add_func_interp", "_Z3_add_const_interp", "_Z3_func_interp_inc_ref", "_Z3_func_interp_dec_ref", "_Z3_func_interp_get_num_entries", "_Z3_func_interp_get_entry", "_Z3_func_interp_get_else", "_Z3_func_interp_set_else", "_Z3_func_interp_get_arity", "_Z3_func_interp_add_entry", "_Z3_func_entry_inc_ref", "_Z3_func_entry_dec_ref", "_Z3_func_entry_get_value", "_Z3_func_entry_get_num_args", "_Z3_func_entry_get_arg", "_Z3_open_log", "_Z3_append_log", "_Z3_close_log", "_Z3_toggle_warning_messages", "_Z3_set_ast_print_mode", "_Z3_ast_to_string", "_Z3_pattern_to_string", "_Z3_sort_to_string", "_Z3_func_decl_to_string", "_Z3_model_to_string", "_Z3_benchmark_to_smtlib_string", "_Z3_parse_smtlib2_string", "_Z3_parse_smtlib2_file", "_Z3_eval_smtlib2_string", "_Z3_mk_parser_context", "_Z3_parser_context_inc_ref", "_Z3_parser_context_dec_ref", "_Z3_parser_context_add_sort", "_Z3_parser_context_add_decl", "_Z3_parser_context_from_string", "_Z3_get_error_code", "_Z3_set_error", "_Z3_get_error_msg", "_Z3_get_version", "_Z3_get_full_version", "_Z3_enable_trace", "_Z3_disable_trace", "_Z3_reset_memory", "_Z3_finalize_memory", "_Z3_mk_goal", "_Z3_goal_inc_ref", "_Z3_goal_dec_ref", "_Z3_goal_precision", "_Z3_goal_assert", "_Z3_goal_inconsistent", "_Z3_goal_depth", "_Z3_goal_reset", "_Z3_goal_size", "_Z3_goal_formula", "_Z3_goal_num_exprs", "_Z3_goal_is_decided_sat", "_Z3_goal_is_decided_unsat", "_Z3_goal_translate", "_Z3_goal_convert_model", "_Z3_goal_to_string", "_Z3_goal_to_dimacs_string", "_Z3_mk_tactic", "_Z3_tactic_inc_ref", "_Z3_tactic_dec_ref", "_Z3_mk_probe", "_Z3_probe_inc_ref", "_Z3_probe_dec_ref", "_Z3_tactic_and_then", "_Z3_tactic_or_else", "_Z3_tactic_par_or", "_Z3_tactic_par_and_then", "_Z3_tactic_try_for", "_Z3_tactic_when", "_Z3_tactic_cond", "_Z3_tactic_repeat", "_Z3_tactic_skip", "_Z3_tactic_fail", "_Z3_tactic_fail_if", "_Z3_tactic_fail_if_not_decided", "_Z3_tactic_using_params", "_Z3_mk_simplifier", "_Z3_simplifier_inc_ref", "_Z3_simplifier_dec_ref", "_Z3_solver_add_simplifier", "_Z3_simplifier_and_then", "_Z3_simplifier_using_params", "_Z3_get_num_simplifiers", "_Z3_get_simplifier_name", "_Z3_simplifier_get_help", "_Z3_simplifier_get_param_descrs", "_Z3_simplifier_get_descr", "_Z3_probe_const", "_Z3_probe_lt", "_Z3_probe_gt", "_Z3_probe_le", "_Z3_probe_ge", "_Z3_probe_eq", "_Z3_probe_and", "_Z3_probe_or", "_Z3_probe_not", "_Z3_get_num_tactics", "_Z3_get_tactic_name", "_Z3_get_num_probes", "_Z3_get_probe_name", "_Z3_tactic_get_help", "_Z3_tactic_get_param_descrs", "_Z3_tactic_get_descr", "_Z3_probe_get_descr", "_Z3_probe_apply", "_Z3_tactic_apply", "_Z3_tactic_apply_ex", "_Z3_apply_result_inc_ref", "_Z3_apply_result_dec_ref", "_Z3_apply_result_to_string", "_Z3_apply_result_get_num_subgoals", "_Z3_apply_result_get_subgoal", "_Z3_mk_solver", "_Z3_mk_simple_solver", "_Z3_mk_solver_for_logic", "_Z3_mk_solver_from_tactic", "_Z3_solver_translate", "_Z3_solver_import_model_converter", "_Z3_solver_get_help", "_Z3_solver_get_param_descrs", "_Z3_solver_set_params", "_Z3_solver_inc_ref", "_Z3_solver_dec_ref", "_Z3_solver_interrupt", "_Z3_solver_push", "_Z3_solver_pop", "_Z3_solver_reset", "_Z3_solver_get_num_scopes", "_Z3_solver_assert", "_Z3_solver_assert_and_track", "_Z3_solver_from_file", "_Z3_solver_from_string", "_Z3_solver_get_assertions", "_Z3_solver_get_units", "_Z3_solver_get_trail", "_Z3_solver_get_non_units", "_Z3_solver_get_levels", "_Z3_solver_congruence_root", "_Z3_solver_congruence_next", "_Z3_solver_congruence_explain", "_Z3_solver_solve_for", "_Z3_solver_register_on_clause", "_Z3_solver_propagate_init", "_Z3_solver_propagate_fixed", "_Z3_solver_propagate_final", "_Z3_solver_propagate_eq", "_Z3_solver_propagate_diseq", "_Z3_solver_propagate_created", "_Z3_solver_propagate_decide", "_Z3_solver_next_split", "_Z3_solver_propagate_declare", "_Z3_solver_propagate_register", "_Z3_solver_propagate_register_cb", "_Z3_solver_propagate_consequence", "_Z3_solver_set_initial_value", "_Z3_solver_check", "_Z3_solver_check_assumptions", "_Z3_get_implied_equalities", "_Z3_solver_get_consequences", "_Z3_solver_cube", "_Z3_solver_get_model", "_Z3_solver_get_proof", "_Z3_solver_get_unsat_core", "_Z3_solver_get_reason_unknown", "_Z3_solver_get_statistics", "_Z3_solver_to_string", "_Z3_solver_to_dimacs_string", "_Z3_stats_to_string", "_Z3_stats_inc_ref", "_Z3_stats_dec_ref", "_Z3_stats_size", "_Z3_stats_get_key", "_Z3_stats_is_uint", "_Z3_stats_is_double", "_Z3_stats_get_uint_value", "_Z3_stats_get_double_value", "_Z3_get_estimated_alloc_size", "_Z3_algebraic_is_value", "_Z3_algebraic_is_pos", "_Z3_algebraic_is_neg", "_Z3_algebraic_is_zero", "_Z3_algebraic_sign", "_Z3_algebraic_add", "_Z3_algebraic_sub", "_Z3_algebraic_mul", "_Z3_algebraic_div", "_Z3_algebraic_root", "_Z3_algebraic_power", "_Z3_algebraic_lt", "_Z3_algebraic_gt", "_Z3_algebraic_le", "_Z3_algebraic_ge", "_Z3_algebraic_eq", "_Z3_algebraic_neq", "_Z3_algebraic_roots", "_Z3_algebraic_eval", "_Z3_algebraic_get_poly", "_Z3_algebraic_get_i", "_Z3_mk_ast_vector", "_Z3_ast_vector_inc_ref", "_Z3_ast_vector_dec_ref", "_Z3_ast_vector_size", "_Z3_ast_vector_get", "_Z3_ast_vector_set", "_Z3_ast_vector_resize", "_Z3_ast_vector_push", "_Z3_ast_vector_translate", "_Z3_ast_vector_to_string", "_Z3_mk_ast_map", "_Z3_ast_map_inc_ref", "_Z3_ast_map_dec_ref", "_Z3_ast_map_contains", "_Z3_ast_map_find", "_Z3_ast_map_insert", "_Z3_ast_map_erase", "_Z3_ast_map_reset", "_Z3_ast_map_size", "_Z3_ast_map_keys", "_Z3_ast_map_to_string", "_Z3_mk_fixedpoint", "_Z3_fixedpoint_inc_ref", "_Z3_fixedpoint_dec_ref", "_Z3_fixedpoint_add_rule", "_Z3_fixedpoint_add_fact", "_Z3_fixedpoint_assert", "_Z3_fixedpoint_query", "_Z3_fixedpoint_query_relations", "_Z3_fixedpoint_get_answer", "_Z3_fixedpoint_get_reason_unknown", "_Z3_fixedpoint_update_rule", "_Z3_fixedpoint_get_num_levels", "_Z3_fixedpoint_get_cover_delta", "_Z3_fixedpoint_add_cover", "_Z3_fixedpoint_get_statistics", "_Z3_fixedpoint_register_relation", "_Z3_fixedpoint_set_predicate_representation", "_Z3_fixedpoint_get_rules", "_Z3_fixedpoint_get_assertions", "_Z3_fixedpoint_set_params", "_Z3_fixedpoint_get_help", "_Z3_fixedpoint_get_param_descrs", "_Z3_fixedpoint_to_string", "_Z3_fixedpoint_from_string", "_Z3_fixedpoint_from_file", "_Z3_mk_fpa_rounding_mode_sort", "_Z3_mk_fpa_round_nearest_ties_to_even", "_Z3_mk_fpa_rne", "_Z3_mk_fpa_round_nearest_ties_to_away", "_Z3_mk_fpa_rna", "_Z3_mk_fpa_round_toward_positive", "_Z3_mk_fpa_rtp", "_Z3_mk_fpa_round_toward_negative", "_Z3_mk_fpa_rtn", "_Z3_mk_fpa_round_toward_zero", "_Z3_mk_fpa_rtz", "_Z3_mk_fpa_sort", "_Z3_mk_fpa_sort_half", "_Z3_mk_fpa_sort_16", "_Z3_mk_fpa_sort_single", "_Z3_mk_fpa_sort_32", "_Z3_mk_fpa_sort_double", "_Z3_mk_fpa_sort_64", "_Z3_mk_fpa_sort_quadruple", "_Z3_mk_fpa_sort_128", "_Z3_mk_fpa_nan", "_Z3_mk_fpa_inf", "_Z3_mk_fpa_zero", "_Z3_mk_fpa_fp", "_Z3_mk_fpa_numeral_float", "_Z3_mk_fpa_numeral_double", "_Z3_mk_fpa_numeral_int", "_Z3_mk_fpa_numeral_int_uint", "_Z3_mk_fpa_numeral_int64_uint64", "_Z3_mk_fpa_abs", "_Z3_mk_fpa_neg", "_Z3_mk_fpa_add", "_Z3_mk_fpa_sub", "_Z3_mk_fpa_mul", "_Z3_mk_fpa_div", "_Z3_mk_fpa_fma", "_Z3_mk_fpa_sqrt", "_Z3_mk_fpa_rem", "_Z3_mk_fpa_round_to_integral", "_Z3_mk_fpa_min", "_Z3_mk_fpa_max", "_Z3_mk_fpa_leq", "_Z3_mk_fpa_lt", "_Z3_mk_fpa_geq", "_Z3_mk_fpa_gt", "_Z3_mk_fpa_eq", "_Z3_mk_fpa_is_normal", "_Z3_mk_fpa_is_subnormal", "_Z3_mk_fpa_is_zero", "_Z3_mk_fpa_is_infinite", "_Z3_mk_fpa_is_nan", "_Z3_mk_fpa_is_negative", "_Z3_mk_fpa_is_positive", "_Z3_mk_fpa_to_fp_bv", "_Z3_mk_fpa_to_fp_float", "_Z3_mk_fpa_to_fp_real", "_Z3_mk_fpa_to_fp_signed", "_Z3_mk_fpa_to_fp_unsigned", "_Z3_mk_fpa_to_ubv", "_Z3_mk_fpa_to_sbv", "_Z3_mk_fpa_to_real", "_Z3_fpa_get_ebits", "_Z3_fpa_get_sbits", "_Z3_fpa_is_numeral_nan", "_Z3_fpa_is_numeral_inf", "_Z3_fpa_is_numeral_zero", "_Z3_fpa_is_numeral_normal", "_Z3_fpa_is_numeral_subnormal", "_Z3_fpa_is_numeral_positive", "_Z3_fpa_is_numeral_negative", "_Z3_fpa_get_numeral_sign_bv", "_Z3_fpa_get_numeral_significand_bv", "_Z3_fpa_get_numeral_sign", "_Z3_fpa_get_numeral_significand_string", "_Z3_fpa_get_numeral_significand_uint64", "_Z3_fpa_get_numeral_exponent_string", "_Z3_fpa_get_numeral_exponent_int64", "_Z3_fpa_get_numeral_exponent_bv", "_Z3_mk_fpa_to_ieee_bv", "_Z3_mk_fpa_to_fp_int_real", "_Z3_mk_optimize", "_Z3_optimize_inc_ref", "_Z3_optimize_dec_ref", "_Z3_optimize_assert", "_Z3_optimize_assert_and_track", "_Z3_optimize_assert_soft", "_Z3_optimize_maximize", "_Z3_optimize_minimize", "_Z3_optimize_push", "_Z3_optimize_pop", "_Z3_optimize_set_initial_value", "_Z3_optimize_check", "_Z3_optimize_get_reason_unknown", "_Z3_optimize_get_model", "_Z3_optimize_get_unsat_core", "_Z3_optimize_set_params", "_Z3_optimize_get_param_descrs", "_Z3_optimize_get_lower", "_Z3_optimize_get_upper", "_Z3_optimize_get_lower_as_vector", "_Z3_optimize_get_upper_as_vector", "_Z3_optimize_to_string", "_Z3_optimize_from_string", "_Z3_optimize_from_file", "_Z3_optimize_get_help", "_Z3_optimize_get_statistics", "_Z3_optimize_get_assertions", "_Z3_optimize_get_objectives", "_Z3_polynomial_subresultants", "_Z3_rcf_del", "_Z3_rcf_mk_rational", "_Z3_rcf_mk_small_int", "_Z3_rcf_mk_pi", "_Z3_rcf_mk_e", "_Z3_rcf_mk_infinitesimal", "_Z3_rcf_mk_roots", "_Z3_rcf_add", "_Z3_rcf_sub", "_Z3_rcf_mul", "_Z3_rcf_div", "_Z3_rcf_neg", "_Z3_rcf_inv", "_Z3_rcf_power", "_Z3_rcf_lt", "_Z3_rcf_gt", "_Z3_rcf_le", "_Z3_rcf_ge", "_Z3_rcf_eq", "_Z3_rcf_neq", "_Z3_rcf_num_to_string", "_Z3_rcf_num_to_decimal_string", "_Z3_rcf_get_numerator_denominator", "_Z3_rcf_is_rational", "_Z3_rcf_is_algebraic", "_Z3_rcf_is_infinitesimal", "_Z3_rcf_is_transcendental", "_Z3_rcf_extension_index", "_Z3_rcf_transcendental_name", "_Z3_rcf_infinitesimal_name", "_Z3_rcf_num_coefficients", "_Z3_rcf_coefficient", "_Z3_rcf_interval", "_Z3_rcf_num_sign_conditions", "_Z3_rcf_sign_condition_sign", "_Z3_rcf_num_sign_condition_coefficients", "_Z3_rcf_sign_condition_coefficient", "_Z3_fixedpoint_query_from_lvl", "_Z3_fixedpoint_get_ground_sat_answer", "_Z3_fixedpoint_get_rules_along_trace", "_Z3_fixedpoint_get_rule_names_along_trace", "_Z3_fixedpoint_add_invariant", "_Z3_fixedpoint_get_reachable", "_Z3_qe_model_project", "_Z3_qe_model_project_skolem", "_Z3_qe_model_project_with_witness", "_Z3_model_extrapolate", "_Z3_qe_lite", "getExceptionMessage", "incrementExceptionRefcount", "decrementExceptionRefcount", "___indirect_function_table", "onRuntimeInitialized"].forEach((prop) => {
          if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
            Object.defineProperty(readyPromise, prop, {
              get: () => abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),
              set: () => abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
            });
          }
        });
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
        var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
        var ENVIRONMENT_IS_PTHREAD = ENVIRONMENT_IS_WORKER && self.name?.startsWith("em-pthread");
        if (ENVIRONMENT_IS_PTHREAD) {
          assert(!globalThis.moduleLoaded, "module should only be loaded once on each pthread worker");
          globalThis.moduleLoaded = true;
        }
        if (ENVIRONMENT_IS_NODE) {
          var worker_threads = __require("worker_threads");
          global.Worker = worker_threads.Worker;
          ENVIRONMENT_IS_WORKER = !worker_threads.isMainThread;
          ENVIRONMENT_IS_PTHREAD = ENVIRONMENT_IS_WORKER && worker_threads["workerData"] == "em-pthread";
        }
        let threadTimeouts = [];
        let capability = null;
        function resolve_async(val) {
          if (capability == null) {
            return;
          }
          let cap = capability;
          capability = null;
          setTimeout(() => {
            cap.resolve(val);
          }, 0);
        }
        function reject_async(val) {
          if (capability == null) {
            return;
          }
          let cap = capability;
          capability = null;
          setTimeout(() => {
            cap.reject(val);
          }, 0);
        }
        Module.async_call = function(f, ...args) {
          if (capability !== null) {
            throw new Error(`you can't execute multiple async functions at the same time; let the previous one finish first`);
          }
          let promise = new Promise((resolve, reject) => {
            capability = { resolve, reject };
          });
          f(...args);
          return promise;
        };
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
          if (typeof process == "undefined" || !process.release || process.release.name !== "node")
            throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
          var nodeVersion = process.versions.node;
          var numericVersion = nodeVersion.split(".").slice(0, 3);
          numericVersion = numericVersion[0] * 1e4 + numericVersion[1] * 100 + numericVersion[2].split("-")[0] * 1;
          var minVersion = 16e4;
          if (numericVersion < 16e4) {
            throw new Error("This emscripten-generated code requires node v16.0.0 (detected v" + nodeVersion + ")");
          }
          var fs = __require("fs");
          var nodePath = __require("path");
          scriptDirectory = __dirname + "/";
          readBinary = (filename) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            var ret = fs.readFileSync(filename);
            assert(ret.buffer);
            return ret;
          };
          readAsync = (filename, binary = true) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return new Promise((resolve, reject) => {
              fs.readFile(filename, binary ? void 0 : "utf8", (err2, data) => {
                if (err2)
                  reject(err2);
                else
                  resolve(binary ? data.buffer : data);
              });
            });
          };
          if (!Module["thisProgram"] && process.argv.length > 1) {
            thisProgram = process.argv[1].replace(/\\/g, "/");
          }
          arguments_ = process.argv.slice(2);
          quit_ = (status, toThrow) => {
            process.exitCode = status;
            throw toThrow;
          };
        } else if (ENVIRONMENT_IS_SHELL) {
          if (typeof process == "object" && typeof __require === "function" || typeof window == "object" || typeof WorkerGlobalScope != "undefined")
            throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptName) {
            scriptDirectory = _scriptName;
          }
          if (scriptDirectory.startsWith("blob:")) {
            scriptDirectory = "";
          } else {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          }
          if (!(typeof window == "object" || typeof WorkerGlobalScope != "undefined"))
            throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
          if (!ENVIRONMENT_IS_NODE) {
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(
                  /** @type{!ArrayBuffer} */
                  xhr.response
                );
              };
            }
            readAsync = (url) => {
              if (isFileURI(url)) {
                return new Promise((resolve, reject) => {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url, true);
                  xhr.responseType = "arraybuffer";
                  xhr.onload = () => {
                    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                      resolve(xhr.response);
                      return;
                    }
                    reject(xhr.status);
                  };
                  xhr.onerror = reject;
                  xhr.send(null);
                });
              }
              return fetch(url, { credentials: "same-origin" }).then((response) => {
                if (response.ok) {
                  return response.arrayBuffer();
                }
                return Promise.reject(new Error(response.status + " : " + response.url));
              });
            };
          }
        } else {
          throw new Error("environment detection error");
        }
        var defaultPrint = console.log.bind(console);
        var defaultPrintErr = console.error.bind(console);
        if (ENVIRONMENT_IS_NODE) {
          defaultPrint = (...args) => fs.writeSync(1, args.join(" ") + "\n");
          defaultPrintErr = (...args) => fs.writeSync(2, args.join(" ") + "\n");
        }
        var out = Module["print"] || defaultPrint;
        var err = Module["printErr"] || defaultPrintErr;
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        checkIncomingModuleAPI();
        if (Module["arguments"])
          arguments_ = Module["arguments"];
        legacyModuleProp("arguments", "arguments_");
        if (Module["thisProgram"])
          thisProgram = Module["thisProgram"];
        legacyModuleProp("thisProgram", "thisProgram");
        assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["read"] == "undefined", "Module.read option was removed");
        assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
        assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
        assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
        assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
        legacyModuleProp("asm", "wasmExports");
        legacyModuleProp("readAsync", "readAsync");
        legacyModuleProp("readBinary", "readBinary");
        legacyModuleProp("setWindowTitle", "setWindowTitle");
        var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";
        var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";
        var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";
        var FETCHFS = "FETCHFS is no longer included by default; build with -lfetchfs.js";
        var ICASEFS = "ICASEFS is no longer included by default; build with -licasefs.js";
        var JSFILEFS = "JSFILEFS is no longer included by default; build with -ljsfilefs.js";
        var OPFS = "OPFS is no longer included by default; build with -lopfs.js";
        var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";
        assert(
          ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER || ENVIRONMENT_IS_NODE,
          "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"
        );
        assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
        var wasmBinary = Module["wasmBinary"];
        legacyModuleProp("wasmBinary", "wasmBinary");
        if (typeof WebAssembly != "object") {
          err("no native wasm support detected");
        }
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed" + (text ? ": " + text : ""));
          }
        }
        var HEAP, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module["HEAP8"] = HEAP8 = new Int8Array(b);
          Module["HEAP16"] = HEAP16 = new Int16Array(b);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module["HEAP32"] = HEAP32 = new Int32Array(b);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
          Module["HEAP64"] = HEAP64 = new BigInt64Array(b);
          Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b);
        }
        var workerID = 0;
        if (ENVIRONMENT_IS_PTHREAD) {
          let threadPrintErr2 = function(...args) {
            var text = args.join(" ");
            if (ENVIRONMENT_IS_NODE) {
              fs.writeSync(2, text + "\n");
              return;
            }
            console.error(text);
          }, threadAlert2 = function(...args) {
            var text = args.join(" ");
            postMessage({ cmd: "alert", text, threadId: _pthread_self() });
          }, handleMessage2 = function(e) {
            try {
              var msgData = e["data"];
              var cmd = msgData.cmd;
              if (cmd === "load") {
                workerID = msgData.workerID;
                let messageQueue = [];
                self.onmessage = (e2) => messageQueue.push(e2);
                self.startWorker = (instance) => {
                  postMessage({ cmd: "loaded" });
                  for (let msg of messageQueue) {
                    handleMessage2(msg);
                  }
                  self.onmessage = handleMessage2;
                };
                for (const handler of msgData.handlers) {
                  if (!Module[handler] || Module[handler].proxy) {
                    Module[handler] = (...args) => {
                      postMessage({ cmd: "callHandler", handler, args });
                    };
                    if (handler == "print")
                      out = Module[handler];
                    if (handler == "printErr")
                      err = Module[handler];
                  }
                }
                wasmMemory = msgData.wasmMemory;
                updateMemoryViews();
                wasmModuleReceived(msgData.wasmModule);
              } else if (cmd === "run") {
                assert(msgData.pthread_ptr);
                establishStackSpace(msgData.pthread_ptr);
                __emscripten_thread_init(
                  msgData.pthread_ptr,
                  /*is_main=*/
                  0,
                  /*is_runtime=*/
                  0,
                  /*can_block=*/
                  1,
                  0,
                  0
                );
                PThread.receiveObjectTransfer(msgData);
                PThread.threadInitTLS();
                __emscripten_thread_mailbox_await(msgData.pthread_ptr);
                if (!initializedJS) {
                  initializedJS = true;
                }
                try {
                  invokeEntryPoint(msgData.start_routine, msgData.arg);
                } catch (ex) {
                  if (ex != "unwind") {
                    throw ex;
                  }
                }
              } else if (msgData.target === "setimmediate") {
              } else if (cmd === "checkMailbox") {
                if (initializedJS) {
                  checkMailbox();
                }
              } else if (cmd) {
                err(`worker: received unknown command ${cmd}`);
                err(msgData);
              }
            } catch (ex) {
              err(`worker: onmessage() captured an uncaught exception: ${ex}`);
              if (ex?.stack)
                err(ex.stack);
              __emscripten_thread_crashed();
              throw ex;
            }
          };
          var threadPrintErr = threadPrintErr2, threadAlert = threadAlert2, handleMessage = handleMessage2;
          var wasmModuleReceived;
          if (ENVIRONMENT_IS_NODE) {
            var parentPort = worker_threads["parentPort"];
            parentPort.on("message", (msg) => onmessage({ data: msg }));
            Object.assign(globalThis, {
              self: global,
              postMessage: (msg) => parentPort.postMessage(msg)
            });
          }
          var initializedJS = false;
          if (!Module["printErr"])
            err = threadPrintErr2;
          dbg = threadPrintErr2;
          self.alert = threadAlert2;
          self.onunhandledrejection = (e) => {
            throw e.reason || e;
          };
          ;
          self.onmessage = handleMessage2;
        }
        assert(!Module["STACK_SIZE"], "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
        assert(
          typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0,
          "JS engine does not provide full typed array support"
        );
        if (!ENVIRONMENT_IS_PTHREAD) {
          if (Module["wasmMemory"]) {
            wasmMemory = Module["wasmMemory"];
          } else {
            var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 2147483648;
            legacyModuleProp("INITIAL_MEMORY", "INITIAL_MEMORY");
            assert(INITIAL_MEMORY >= 20971520, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + INITIAL_MEMORY + "! (STACK_SIZE=20971520)");
            wasmMemory = new WebAssembly.Memory({
              "initial": INITIAL_MEMORY / 65536,
              "maximum": INITIAL_MEMORY / 65536,
              "shared": true
            });
          }
          updateMemoryViews();
        }
        function writeStackCookie() {
          var max = _emscripten_stack_get_end();
          assert((max & 3) == 0);
          if (max == 0) {
            max += 4;
          }
          HEAPU32[max >> 2] = 34821223;
          HEAPU32[max + 4 >> 2] = 2310721022;
          HEAPU32[0 >> 2] = 1668509029;
        }
        function checkStackCookie() {
          if (ABORT)
            return;
          var max = _emscripten_stack_get_end();
          if (max == 0) {
            max += 4;
          }
          var cookie1 = HEAPU32[max >> 2];
          var cookie2 = HEAPU32[max + 4 >> 2];
          if (cookie1 != 34821223 || cookie2 != 2310721022) {
            abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
          }
          if (HEAPU32[0 >> 2] != 1668509029) {
            abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
          }
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATEXIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          assert(!ENVIRONMENT_IS_PTHREAD);
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
              Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          assert(!runtimeInitialized);
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD)
            return;
          checkStackCookie();
          if (!Module["noFSInit"] && !FS.initialized)
            FS.init();
          FS.ignorePermissions = false;
          TTY.init();
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          checkStackCookie();
          if (ENVIRONMENT_IS_PTHREAD)
            return;
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
              Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnExit(cb) {
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function getUniqueRunDependency(id) {
          var orig = id;
          while (1) {
            if (!runDependencyTracking[id])
              return id;
            id = orig + Math.random();
          }
        }
        function addRunDependency(id) {
          runDependencies++;
          Module["monitorRunDependencies"]?.(runDependencies);
          if (id) {
            assert(!runDependencyTracking[id]);
            runDependencyTracking[id] = 1;
            if (runDependencyWatcher === null && typeof setInterval != "undefined") {
              runDependencyWatcher = setInterval(() => {
                if (ABORT) {
                  clearInterval(runDependencyWatcher);
                  runDependencyWatcher = null;
                  return;
                }
                var shown = false;
                for (var dep in runDependencyTracking) {
                  if (!shown) {
                    shown = true;
                    err("still waiting on run dependencies:");
                  }
                  err(`dependency: ${dep}`);
                }
                if (shown) {
                  err("(end of list)");
                }
              }, 1e4);
            }
          } else {
            err("warning: run dependency added without ID");
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          Module["monitorRunDependencies"]?.(runDependencies);
          if (id) {
            assert(runDependencyTracking[id]);
            delete runDependencyTracking[id];
          } else {
            err("warning: run dependency removed without ID");
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          Module["onAbort"]?.(what);
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
        var isFileURI = (filename) => filename.startsWith("file://");
        function createExportWrapper(name, nargs) {
          return (...args) => {
            assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
            var f = wasmExports[name];
            assert(f, `exported native function \`${name}\` not found`);
            assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
            return f(...args);
          };
        }
        class EmscriptenEH extends Error {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        class CppException extends EmscriptenEH {
          constructor(excPtr) {
            super(excPtr);
            this.excPtr = excPtr;
            const excInfo = getExceptionMessage(excPtr);
            this.name = excInfo[0];
            this.message = excInfo[1];
          }
        }
        function findWasmBinary() {
          var f = "z3-built.wasm";
          if (!isDataURI(f)) {
            return locateFile(f);
          }
          return f;
        }
        var wasmBinaryFile;
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary) {
            return readAsync(binaryFile).then(
              (response) => new Uint8Array(
                /** @type{!ArrayBuffer} */
                response
              ),
              // Fall back to getBinarySync if readAsync fails
              () => getBinarySync(binaryFile)
            );
          }
          return Promise.resolve().then(() => getBinarySync(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile).then((binary) => {
            return WebAssembly.instantiate(binary, imports);
          }).then(receiver, (reason) => {
            err(`failed to asynchronously prepare wasm: ${reason}`);
            if (isFileURI(wasmBinaryFile)) {
              err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
            }
            abort(reason);
          });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
          !isFileURI(binaryFile) && // Avoid instantiateStreaming() on Node.js environment for now, as while
          // Node.js v18.1.0 implements it, it does not have a full fetch()
          // implementation yet.
          //
          // Reference:
          //   https://github.com/emscripten-core/emscripten/pull/16917
          !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
            return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
              var result = WebAssembly.instantiateStreaming(response, imports);
              return result.then(
                callback,
                function(reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                }
              );
            });
          }
          return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function getWasmImports() {
          assignWasmImports();
          return {
            "env": wasmImports,
            "wasi_snapshot_preview1": wasmImports
          };
        }
        function createWasm() {
          function receiveInstance(instance, module2) {
            wasmExports = instance.exports;
            registerTLSInit(wasmExports["_emscripten_tls_init"]);
            wasmTable = wasmExports["__indirect_function_table"];
            assert(wasmTable, "table not found in wasm exports");
            addOnInit(wasmExports["__wasm_call_ctors"]);
            wasmModule = module2;
            removeRunDependency("wasm-instantiate");
            return wasmExports;
          }
          addRunDependency("wasm-instantiate");
          var trueModule = Module;
          function receiveInstantiationResult(result) {
            assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
            trueModule = null;
            receiveInstance(result["instance"], result["module"]);
          }
          var info = getWasmImports();
          if (Module["instantiateWasm"]) {
            try {
              return Module["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err(`Module.instantiateWasm callback failed with error: ${e}`);
              readyPromiseReject(e);
            }
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            return new Promise((resolve) => {
              wasmModuleReceived = (module2) => {
                var instance = new WebAssembly.Instance(module2, getWasmImports());
                receiveInstance(instance, module2);
                resolve();
              };
            });
          }
          wasmBinaryFile ??= findWasmBinary();
          instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
          return {};
        }
        (() => {
          var h16 = new Int16Array(1);
          var h8 = new Int8Array(h16.buffer);
          h16[0] = 25459;
          if (h8[0] !== 115 || h8[1] !== 99)
            throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        })();
        if (Module["ENVIRONMENT"]) {
          throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
        }
        function legacyModuleProp(prop, newName, incoming = true) {
          if (!Object.getOwnPropertyDescriptor(Module, prop)) {
            Object.defineProperty(Module, prop, {
              configurable: true,
              get() {
                let extra = incoming ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
                abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);
              }
            });
          }
        }
        function ignoredModuleProp(prop) {
          if (Object.getOwnPropertyDescriptor(Module, prop)) {
            abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
          }
        }
        function isExportedByForceFilesystem(name) {
          return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
          name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
        }
        function hookGlobalSymbolAccess(sym, func) {
        }
        function missingGlobal(sym, msg) {
          hookGlobalSymbolAccess(sym, () => {
            warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
          });
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        missingGlobal("asm", "Please use wasmExports instead");
        function missingLibrarySymbol(sym) {
          hookGlobalSymbolAccess(sym, () => {
            var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
            var librarySymbol = sym;
            if (!librarySymbol.startsWith("_")) {
              librarySymbol = "$" + sym;
            }
            msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
            if (isExportedByForceFilesystem(sym)) {
              msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
            }
            warnOnce(msg);
          });
          unexportedRuntimeSymbol(sym);
        }
        function unexportedRuntimeSymbol(sym) {
          if (ENVIRONMENT_IS_PTHREAD) {
            return;
          }
          if (!Object.getOwnPropertyDescriptor(Module, sym)) {
            Object.defineProperty(Module, sym, {
              configurable: true,
              get() {
                var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
                if (isExportedByForceFilesystem(sym)) {
                  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                abort(msg);
              }
            });
          }
        }
        function dbg(...args) {
          if (ENVIRONMENT_IS_NODE && fs) {
            fs.writeSync(2, args.join(" ") + "\n");
          } else
            console.warn(...args);
        }
        var ASM_CONSTS = {
          21446368: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21446423: ($0) => {
            resolve_async(UTF8ToString($0));
          },
          21446460: () => {
            reject_async(new Error("failed with unknown exception"));
          },
          21446522: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21446569: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21446611: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21446666: ($0) => {
            resolve_async($0);
          },
          21446689: () => {
            reject_async("failed with unknown exception");
          },
          21446740: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21446787: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21446829: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21446884: ($0) => {
            resolve_async($0);
          },
          21446907: () => {
            reject_async("failed with unknown exception");
          },
          21446958: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21447005: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21447047: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21447102: ($0) => {
            resolve_async($0);
          },
          21447125: () => {
            reject_async("failed with unknown exception");
          },
          21447176: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21447223: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21447265: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21447320: ($0) => {
            resolve_async($0);
          },
          21447343: () => {
            reject_async("failed with unknown exception");
          },
          21447394: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21447441: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21447483: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21447538: ($0) => {
            resolve_async($0);
          },
          21447561: () => {
            reject_async("failed with unknown exception");
          },
          21447612: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21447659: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21447701: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21447756: ($0) => {
            resolve_async($0);
          },
          21447779: () => {
            reject_async("failed with unknown exception");
          },
          21447830: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21447877: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21447919: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21447974: ($0) => {
            resolve_async($0);
          },
          21447997: () => {
            reject_async("failed with unknown exception");
          },
          21448048: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21448095: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21448137: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21448192: ($0) => {
            resolve_async($0);
          },
          21448215: () => {
            reject_async("failed with unknown exception");
          },
          21448266: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21448313: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21448355: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21448410: ($0) => {
            resolve_async($0);
          },
          21448433: () => {
            reject_async("failed with unknown exception");
          },
          21448484: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21448531: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21448573: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21448628: ($0) => {
            resolve_async($0);
          },
          21448651: () => {
            reject_async("failed with unknown exception");
          },
          21448702: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21448749: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21448791: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21448846: ($0) => {
            resolve_async($0);
          },
          21448869: () => {
            reject_async("failed with unknown exception");
          },
          21448920: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21448967: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21449009: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21449064: ($0) => {
            resolve_async($0);
          },
          21449087: () => {
            reject_async("failed with unknown exception");
          },
          21449138: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21449185: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21449227: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21449282: ($0) => {
            resolve_async($0);
          },
          21449305: () => {
            reject_async("failed with unknown exception");
          },
          21449356: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21449403: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21449445: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21449500: ($0) => {
            resolve_async($0);
          },
          21449523: () => {
            reject_async("failed with unknown exception");
          },
          21449574: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21449621: () => {
            clearTimeout(threadTimeouts.shift());
          },
          21449663: () => {
            threadTimeouts.push(setTimeout(() => {
            }, 6e5));
          },
          21449718: ($0) => {
            resolve_async($0);
          },
          21449741: () => {
            reject_async("failed with unknown exception");
          },
          21449792: ($0) => {
            reject_async(new Error(UTF8ToString($0)));
          },
          21449839: () => {
            clearTimeout(threadTimeouts.shift());
          }
        };
        class ExitStatus {
          name = "ExitStatus";
          constructor(status) {
            this.message = `Program terminated with exit(${status})`;
            this.status = status;
          }
        }
        var terminateWorker = (worker) => {
          worker.terminate();
          worker.onmessage = (e) => {
            var cmd = e["data"].cmd;
            err(`received "${cmd}" command from terminated worker: ${worker.workerID}`);
          };
        };
        var cleanupThread = (pthread_ptr) => {
          assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! cleanupThread() can only ever be called from main application thread!");
          assert(pthread_ptr, "Internal Error! Null pthread_ptr in cleanupThread!");
          var worker = PThread.pthreads[pthread_ptr];
          assert(worker);
          PThread.returnWorkerToPool(worker);
        };
        var spawnThread = (threadParams) => {
          assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! spawnThread() can only ever be called from main application thread!");
          assert(threadParams.pthread_ptr, "Internal error, no pthread ptr!");
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          assert(!worker.pthread_ptr, "Internal error!");
          PThread.runningWorkers.push(worker);
          PThread.pthreads[threadParams.pthread_ptr] = worker;
          worker.pthread_ptr = threadParams.pthread_ptr;
          var msg = {
            cmd: "run",
            start_routine: threadParams.startRoutine,
            arg: threadParams.arg,
            pthread_ptr: threadParams.pthread_ptr
          };
          if (ENVIRONMENT_IS_NODE) {
            worker.unref();
          }
          worker.postMessage(msg, threadParams.transferList);
          return 0;
        };
        var runtimeKeepaliveCounter = 0;
        var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
        var stackSave = () => _emscripten_stack_get_current();
        var stackRestore = (val) => __emscripten_stack_restore(val);
        var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
        var INT53_MAX = 9007199254740992;
        var INT53_MIN = -9007199254740992;
        var bigintToI53Checked = (num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
        var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) => {
          var serializedNumCallArgs = callArgs.length * 2;
          var sp = stackSave();
          var args = stackAlloc(serializedNumCallArgs * 8);
          var b = args >> 3;
          for (var i = 0; i < callArgs.length; i++) {
            var arg = callArgs[i];
            if (typeof arg == "bigint") {
              HEAP64[b + 2 * i] = 1n;
              HEAP64[b + 2 * i + 1] = arg;
            } else {
              HEAP64[b + 2 * i] = 0n;
              HEAPF64[b + 2 * i + 1] = arg;
            }
          }
          var rtn = __emscripten_run_on_main_thread_js(funcIndex, emAsmAddr, serializedNumCallArgs, args, sync);
          stackRestore(sp);
          return rtn;
        };
        function _proc_exit(code) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(0, 0, 1, code);
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            Module["onExit"]?.(code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        var handleException = (e) => {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          checkStackCookie();
          if (e instanceof WebAssembly.RuntimeError) {
            if (_emscripten_stack_get_current() <= 0) {
              err("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 20971520)");
            }
          }
          quit_(1, e);
        };
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(1, 0, 0, returnCode);
          _exit(returnCode);
        }
        var exitJS = (status, implicit) => {
          EXITSTATUS = status;
          checkUnflushedContent();
          if (ENVIRONMENT_IS_PTHREAD) {
            assert(!implicit);
            exitOnMainThread(status);
            throw "unwind";
          }
          if (keepRuntimeAlive() && !implicit) {
            var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
            readyPromiseReject(msg);
            err(msg);
          }
          _proc_exit(status);
        };
        var _exit = exitJS;
        var ptrToString = (ptr) => {
          assert(typeof ptr === "number");
          ptr >>>= 0;
          return "0x" + ptr.toString(16).padStart(8, "0");
        };
        var PThread = {
          unusedWorkers: [],
          runningWorkers: [],
          tlsInitFunctions: [],
          pthreads: {},
          nextWorkerID: 1,
          debugInit() {
            function pthreadLogPrefix() {
              var t = 0;
              if (runtimeInitialized && typeof _pthread_self != "undefined") {
                t = _pthread_self();
              }
              return `w:${workerID},t:${ptrToString(t)}: `;
            }
            var origDbg = dbg;
            dbg = (...args) => origDbg(pthreadLogPrefix() + args.join(" "));
          },
          init() {
            PThread.debugInit();
            if (!ENVIRONMENT_IS_PTHREAD) {
              PThread.initMainThread();
            }
          },
          initMainThread() {
            addOnPreRun(() => {
              addRunDependency("loading-workers");
              PThread.loadWasmModuleToAllWorkers(() => removeRunDependency("loading-workers"));
            });
          },
          terminateAllThreads: () => {
            assert(!ENVIRONMENT_IS_PTHREAD, "Internal Error! terminateAllThreads() can only ever be called from main application thread!");
            for (var worker of PThread.runningWorkers) {
              terminateWorker(worker);
            }
            for (var worker of PThread.unusedWorkers) {
              terminateWorker(worker);
            }
            PThread.unusedWorkers = [];
            PThread.runningWorkers = [];
            PThread.pthreads = {};
          },
          returnWorkerToPool: (worker) => {
            var pthread_ptr = worker.pthread_ptr;
            delete PThread.pthreads[pthread_ptr];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
            worker.pthread_ptr = 0;
            __emscripten_thread_free_data(pthread_ptr);
          },
          receiveObjectTransfer(data) {
          },
          threadInitTLS() {
            PThread.tlsInitFunctions.forEach((f) => f());
          },
          loadWasmModuleToWorker: (worker) => new Promise((onFinishedLoading) => {
            worker.onmessage = (e) => {
              var d = e["data"];
              var cmd = d.cmd;
              if (d.targetThread && d.targetThread != _pthread_self()) {
                var targetWorker = PThread.pthreads[d.targetThread];
                if (targetWorker) {
                  targetWorker.postMessage(d, d.transferList);
                } else {
                  err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d.targetThread}, but that thread no longer exists!`);
                }
                return;
              }
              if (cmd === "checkMailbox") {
                checkMailbox();
              } else if (cmd === "spawnThread") {
                spawnThread(d);
              } else if (cmd === "cleanupThread") {
                cleanupThread(d.thread);
              } else if (cmd === "loaded") {
                worker.loaded = true;
                onFinishedLoading(worker);
              } else if (cmd === "alert") {
                alert(`Thread ${d.threadId}: ${d.text}`);
              } else if (d.target === "setimmediate") {
                worker.postMessage(d);
              } else if (cmd === "callHandler") {
                Module[d.handler](...d.args);
              } else if (cmd) {
                err(`worker sent an unknown command ${cmd}`);
              }
            };
            worker.onerror = (e) => {
              var message = "worker sent an error!";
              if (worker.pthread_ptr) {
                message = `Pthread ${ptrToString(worker.pthread_ptr)} sent an error!`;
              }
              err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);
              throw e;
            };
            if (ENVIRONMENT_IS_NODE) {
              worker.on("message", (data) => worker.onmessage({ data }));
              worker.on("error", (e) => worker.onerror(e));
            }
            assert(wasmMemory instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!");
            assert(wasmModule instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
            var handlers = [];
            var knownHandlers = [
              "onExit",
              "onAbort",
              "print",
              "printErr"
            ];
            for (var handler of knownHandlers) {
              if (Module.propertyIsEnumerable(handler)) {
                handlers.push(handler);
              }
            }
            worker.workerID = PThread.nextWorkerID++;
            worker.postMessage({
              cmd: "load",
              handlers,
              wasmMemory,
              wasmModule,
              "workerID": worker.workerID
            });
          }),
          loadWasmModuleToAllWorkers(onMaybeReady) {
            onMaybeReady();
          },
          allocateUnusedWorker() {
            var worker;
            var workerOptions = {
              // This is the way that we signal to the node worker that it is hosting
              // a pthread.
              "workerData": "em-pthread",
              // This is the way that we signal to the Web Worker that it is hosting
              // a pthread.
              "name": "em-pthread-" + PThread.nextWorkerID
            };
            var pthreadMainJs = _scriptName;
            if (Module["mainScriptUrlOrBlob"]) {
              pthreadMainJs = Module["mainScriptUrlOrBlob"];
              if (typeof pthreadMainJs != "string") {
                pthreadMainJs = URL.createObjectURL(pthreadMainJs);
              }
            }
            worker = new Worker(pthreadMainJs, workerOptions);
            PThread.unusedWorkers.push(worker);
          },
          getNewWorker() {
            if (PThread.unusedWorkers.length == 0) {
              PThread.allocateUnusedWorker();
              PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
            }
            return PThread.unusedWorkers.pop();
          }
        };
        var callRuntimeCallbacks = (callbacks) => {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        };
        var establishStackSpace = (pthread_ptr) => {
          var stackHigh = HEAPU32[pthread_ptr + 52 >> 2];
          var stackSize = HEAPU32[pthread_ptr + 56 >> 2];
          var stackLow = stackHigh - stackSize;
          assert(stackHigh != 0);
          assert(stackLow != 0);
          assert(stackHigh > stackLow, "stackHigh must be higher then stackLow");
          _emscripten_stack_set_limits(stackHigh, stackLow);
          stackRestore(stackHigh);
          writeStackCookie();
        };
        function getValue(ptr, type = "i8") {
          if (type.endsWith("*"))
            type = "*";
          switch (type) {
            case "i1":
              return HEAP8[ptr];
            case "i8":
              return HEAP8[ptr];
            case "i16":
              return HEAP16[ptr >> 1];
            case "i32":
              return HEAP32[ptr >> 2];
            case "i64":
              return HEAP64[ptr >> 3];
            case "float":
              return HEAPF32[ptr >> 2];
            case "double":
              return HEAPF64[ptr >> 3];
            case "*":
              return HEAPU32[ptr >> 2];
            default:
              abort(`invalid type for getValue: ${type}`);
          }
        }
        var wasmTableMirror = [];
        var wasmTable;
        var getWasmTableEntry = (funcPtr) => {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
          return func;
        };
        var invokeEntryPoint = (ptr, arg) => {
          runtimeKeepaliveCounter = 0;
          noExitRuntime = 0;
          var result = getWasmTableEntry(ptr)(arg);
          checkStackCookie();
          function finish(result2) {
            if (keepRuntimeAlive()) {
              EXITSTATUS = result2;
            } else {
              __emscripten_thread_exit(result2);
            }
          }
          finish(result);
        };
        var noExitRuntime = Module["noExitRuntime"] || true;
        var registerTLSInit = (tlsInitFunc) => PThread.tlsInitFunctions.push(tlsInitFunc);
        function setValue(ptr, value, type = "i8") {
          if (type.endsWith("*"))
            type = "*";
          switch (type) {
            case "i1":
              HEAP8[ptr] = value;
              break;
            case "i8":
              HEAP8[ptr] = value;
              break;
            case "i16":
              HEAP16[ptr >> 1] = value;
              break;
            case "i32":
              HEAP32[ptr >> 2] = value;
              break;
            case "i64":
              HEAP64[ptr >> 3] = BigInt(value);
              break;
            case "float":
              HEAPF32[ptr >> 2] = value;
              break;
            case "double":
              HEAPF64[ptr >> 3] = value;
              break;
            case "*":
              HEAPU32[ptr >> 2] = value;
              break;
            default:
              abort(`invalid type for setValue: ${type}`);
          }
        }
        var warnOnce = (text) => {
          warnOnce.shown ||= {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            if (ENVIRONMENT_IS_NODE)
              text = "warning: " + text;
            err(text);
          }
        };
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
        var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.buffer instanceof ArrayBuffer ? heapOrArray.subarray(idx, endPtr) : heapOrArray.slice(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              if ((u0 & 248) != 240)
                warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        };
        var UTF8ToString = (ptr, maxBytesToRead) => {
          assert(typeof ptr == "number", `UTF8ToString expects a number (got ${typeof ptr})`);
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        };
        var ___assert_fail = (condition, filename, line, func) => abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
        var ___call_sighandler = (fp, sig) => getWasmTableEntry(fp)(sig);
        var exceptionCaught = [];
        var uncaughtExceptionCount = 0;
        var ___cxa_begin_catch = (ptr) => {
          var info = new ExceptionInfo(ptr);
          if (!info.get_caught()) {
            info.set_caught(true);
            uncaughtExceptionCount--;
          }
          info.set_rethrown(false);
          exceptionCaught.push(info);
          ___cxa_increment_exception_refcount(ptr);
          return ___cxa_get_exception_ptr(ptr);
        };
        var exceptionLast = 0;
        var ___cxa_end_catch = () => {
          _setThrew(0, 0);
          assert(exceptionCaught.length > 0);
          var info = exceptionCaught.pop();
          ___cxa_decrement_exception_refcount(info.excPtr);
          exceptionLast = 0;
        };
        class ExceptionInfo {
          // excPtr - Thrown object pointer to wrap. Metadata pointer is calculated from it.
          constructor(excPtr) {
            this.excPtr = excPtr;
            this.ptr = excPtr - 24;
          }
          set_type(type) {
            HEAPU32[this.ptr + 4 >> 2] = type;
          }
          get_type() {
            return HEAPU32[this.ptr + 4 >> 2];
          }
          set_destructor(destructor) {
            HEAPU32[this.ptr + 8 >> 2] = destructor;
          }
          get_destructor() {
            return HEAPU32[this.ptr + 8 >> 2];
          }
          set_caught(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12] = caught;
          }
          get_caught() {
            return HEAP8[this.ptr + 12] != 0;
          }
          set_rethrown(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13] = rethrown;
          }
          get_rethrown() {
            return HEAP8[this.ptr + 13] != 0;
          }
          // Initialize native structure fields. Should be called once after allocated.
          init(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
          }
          set_adjusted_ptr(adjustedPtr) {
            HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
          }
          get_adjusted_ptr() {
            return HEAPU32[this.ptr + 16 >> 2];
          }
        }
        var ___resumeException = (ptr) => {
          if (!exceptionLast) {
            exceptionLast = new CppException(ptr);
          }
          throw exceptionLast;
        };
        var setTempRet0 = (val) => __emscripten_tempret_set(val);
        var findMatchingCatch = (args) => {
          var thrown = exceptionLast?.excPtr;
          if (!thrown) {
            setTempRet0(0);
            return 0;
          }
          var info = new ExceptionInfo(thrown);
          info.set_adjusted_ptr(thrown);
          var thrownType = info.get_type();
          if (!thrownType) {
            setTempRet0(0);
            return thrown;
          }
          for (var caughtType of args) {
            if (caughtType === 0 || caughtType === thrownType) {
              break;
            }
            var adjusted_ptr_addr = info.ptr + 16;
            if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
              setTempRet0(caughtType);
              return thrown;
            }
          }
          setTempRet0(thrownType);
          return thrown;
        };
        var ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);
        var ___cxa_find_matching_catch_3 = (arg0) => findMatchingCatch([arg0]);
        var ___cxa_find_matching_catch_4 = (arg0, arg1) => findMatchingCatch([arg0, arg1]);
        var ___cxa_find_matching_catch_7 = (arg0, arg1, arg2, arg3, arg4) => findMatchingCatch([arg0, arg1, arg2, arg3, arg4]);
        var ___cxa_find_matching_catch_8 = (arg0, arg1, arg2, arg3, arg4, arg5) => findMatchingCatch([arg0, arg1, arg2, arg3, arg4, arg5]);
        var ___cxa_rethrow = () => {
          var info = exceptionCaught.pop();
          if (!info) {
            abort("no exception to throw");
          }
          var ptr = info.excPtr;
          if (!info.get_rethrown()) {
            exceptionCaught.push(info);
            info.set_rethrown(true);
            info.set_caught(false);
            uncaughtExceptionCount++;
          }
          exceptionLast = new CppException(ptr);
          throw exceptionLast;
        };
        var ___cxa_throw = (ptr, type, destructor) => {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = new CppException(ptr);
          uncaughtExceptionCount++;
          throw exceptionLast;
        };
        var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
        function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(2, 0, 1, pthread_ptr, attr, startRoutine, arg);
          return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
        }
        var _emscripten_has_threading_support = () => typeof SharedArrayBuffer != "undefined";
        var ___pthread_create_js = (pthread_ptr, attr, startRoutine, arg) => {
          if (!_emscripten_has_threading_support()) {
            dbg("pthread_create: environment does not support SharedArrayBuffer, pthreads are not available");
            return 6;
          }
          var transferList = [];
          var error = 0;
          if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
            return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
          }
          if (error)
            return error;
          var threadParams = {
            startRoutine,
            pthread_ptr,
            arg,
            transferList
          };
          if (ENVIRONMENT_IS_PTHREAD) {
            threadParams.cmd = "spawnThread";
            postMessage(threadParams, transferList);
            return 0;
          }
          return spawnThread(threadParams);
        };
        var syscallGetVarargI = () => {
          assert(SYSCALLS.varargs != void 0);
          var ret = HEAP32[+SYSCALLS.varargs >> 2];
          SYSCALLS.varargs += 4;
          return ret;
        };
        var syscallGetVarargP = syscallGetVarargI;
        var PATH = {
          isAbs: (path) => path.charAt(0) === "/",
          splitPath: (filename) => {
            var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            return splitPathRe.exec(filename).slice(1);
          },
          normalizeArray: (parts, allowAboveRoot) => {
            var up = 0;
            for (var i = parts.length - 1; i >= 0; i--) {
              var last = parts[i];
              if (last === ".") {
                parts.splice(i, 1);
              } else if (last === "..") {
                parts.splice(i, 1);
                up++;
              } else if (up) {
                parts.splice(i, 1);
                up--;
              }
            }
            if (allowAboveRoot) {
              for (; up; up--) {
                parts.unshift("..");
              }
            }
            return parts;
          },
          normalize: (path) => {
            var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
            path = PATH.normalizeArray(path.split("/").filter((p) => !!p), !isAbsolute).join("/");
            if (!path && !isAbsolute) {
              path = ".";
            }
            if (path && trailingSlash) {
              path += "/";
            }
            return (isAbsolute ? "/" : "") + path;
          },
          dirname: (path) => {
            var result = PATH.splitPath(path), root = result[0], dir = result[1];
            if (!root && !dir) {
              return ".";
            }
            if (dir) {
              dir = dir.substr(0, dir.length - 1);
            }
            return root + dir;
          },
          basename: (path) => {
            if (path === "/")
              return "/";
            path = PATH.normalize(path);
            path = path.replace(/\/$/, "");
            var lastSlash = path.lastIndexOf("/");
            if (lastSlash === -1)
              return path;
            return path.substr(lastSlash + 1);
          },
          join: (...paths) => PATH.normalize(paths.join("/")),
          join2: (l, r) => PATH.normalize(l + "/" + r)
        };
        var initRandomFill = () => {
          if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
            return (view) => (view.set(crypto.getRandomValues(new Uint8Array(view.byteLength))), // Return the original view to match modern native implementations.
            view);
          } else if (ENVIRONMENT_IS_NODE) {
            try {
              var crypto_module = __require("crypto");
              var randomFillSync = crypto_module["randomFillSync"];
              if (randomFillSync) {
                return (view) => crypto_module["randomFillSync"](view);
              }
              var randomBytes = crypto_module["randomBytes"];
              return (view) => (view.set(randomBytes(view.byteLength)), // Return the original view to match modern native implementations.
              view);
            } catch (e) {
            }
          }
          abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
        };
        var randomFill = (view) => {
          return (randomFill = initRandomFill())(view);
        };
        var PATH_FS = {
          resolve: (...args) => {
            var resolvedPath = "", resolvedAbsolute = false;
            for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
              var path = i >= 0 ? args[i] : FS.cwd();
              if (typeof path != "string") {
                throw new TypeError("Arguments to path.resolve must be strings");
              } else if (!path) {
                return "";
              }
              resolvedPath = path + "/" + resolvedPath;
              resolvedAbsolute = PATH.isAbs(path);
            }
            resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
            return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
          },
          relative: (from, to) => {
            from = PATH_FS.resolve(from).substr(1);
            to = PATH_FS.resolve(to).substr(1);
            function trim(arr) {
              var start = 0;
              for (; start < arr.length; start++) {
                if (arr[start] !== "")
                  break;
              }
              var end = arr.length - 1;
              for (; end >= 0; end--) {
                if (arr[end] !== "")
                  break;
              }
              if (start > end)
                return [];
              return arr.slice(start, end - start + 1);
            }
            var fromParts = trim(from.split("/"));
            var toParts = trim(to.split("/"));
            var length = Math.min(fromParts.length, toParts.length);
            var samePartsLength = length;
            for (var i = 0; i < length; i++) {
              if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
              }
            }
            var outputParts = [];
            for (var i = samePartsLength; i < fromParts.length; i++) {
              outputParts.push("..");
            }
            outputParts = outputParts.concat(toParts.slice(samePartsLength));
            return outputParts.join("/");
          }
        };
        var FS_stdin_getChar_buffer = [];
        var lengthBytesUTF8 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        };
        var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
          assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              if (u > 1114111)
                warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        };
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
          if (dontAddNull)
            u8array.length = numBytesWritten;
          return u8array;
        }
        var FS_stdin_getChar = () => {
          if (!FS_stdin_getChar_buffer.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
              var fd = process.stdin.fd;
              try {
                bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
              } catch (e) {
                if (e.toString().includes("EOF"))
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else {
            }
            if (!result) {
              return null;
            }
            FS_stdin_getChar_buffer = intArrayFromString(result, true);
          }
          return FS_stdin_getChar_buffer.shift();
        };
        var TTY = {
          ttys: [],
          init() {
          },
          shutdown() {
          },
          register(dev, ops) {
            TTY.ttys[dev] = { input: [], output: [], ops };
            FS.registerDevice(dev, TTY.stream_ops);
          },
          stream_ops: {
            open(stream) {
              var tty = TTY.ttys[stream.node.rdev];
              if (!tty) {
                throw new FS.ErrnoError(43);
              }
              stream.tty = tty;
              stream.seekable = false;
            },
            close(stream) {
              stream.tty.ops.fsync(stream.tty);
            },
            fsync(stream) {
              stream.tty.ops.fsync(stream.tty);
            },
            read(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60);
              }
              var bytesRead = 0;
              for (var i = 0; i < length; i++) {
                var result;
                try {
                  result = stream.tty.ops.get_char(stream.tty);
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
                if (result === void 0 && bytesRead === 0) {
                  throw new FS.ErrnoError(6);
                }
                if (result === null || result === void 0)
                  break;
                bytesRead++;
                buffer[offset + i] = result;
              }
              if (bytesRead) {
                stream.node.timestamp = Date.now();
              }
              return bytesRead;
            },
            write(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60);
              }
              try {
                for (var i = 0; i < length; i++) {
                  stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                }
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (length) {
                stream.node.timestamp = Date.now();
              }
              return i;
            }
          },
          default_tty_ops: {
            get_char(tty) {
              return FS_stdin_getChar();
            },
            put_char(tty, val) {
              if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output));
                tty.output = [];
              } else {
                if (val != 0)
                  tty.output.push(val);
              }
            },
            fsync(tty) {
              if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output));
                tty.output = [];
              }
            },
            ioctl_tcgets(tty) {
              return {
                c_iflag: 25856,
                c_oflag: 5,
                c_cflag: 191,
                c_lflag: 35387,
                c_cc: [
                  3,
                  28,
                  127,
                  21,
                  4,
                  0,
                  1,
                  0,
                  17,
                  19,
                  26,
                  0,
                  18,
                  15,
                  23,
                  22,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              };
            },
            ioctl_tcsets(tty, optional_actions, data) {
              return 0;
            },
            ioctl_tiocgwinsz(tty) {
              return [24, 80];
            }
          },
          default_tty1_ops: {
            put_char(tty, val) {
              if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output));
                tty.output = [];
              } else {
                if (val != 0)
                  tty.output.push(val);
              }
            },
            fsync(tty) {
              if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output));
                tty.output = [];
              }
            }
          }
        };
        var zeroMemory = (address, size) => {
          HEAPU8.fill(0, address, address + size);
        };
        var alignMemory = (size, alignment) => {
          assert(alignment, "alignment argument is required");
          return Math.ceil(size / alignment) * alignment;
        };
        var mmapAlloc = (size) => {
          abort("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
        };
        var MEMFS = {
          ops_table: null,
          mount(mount) {
            return MEMFS.createNode(null, "/", 16895, 0);
          },
          createNode(parent, name, mode, dev) {
            if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
              throw new FS.ErrnoError(63);
            }
            MEMFS.ops_table ||= {
              dir: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  lookup: MEMFS.node_ops.lookup,
                  mknod: MEMFS.node_ops.mknod,
                  rename: MEMFS.node_ops.rename,
                  unlink: MEMFS.node_ops.unlink,
                  rmdir: MEMFS.node_ops.rmdir,
                  readdir: MEMFS.node_ops.readdir,
                  symlink: MEMFS.node_ops.symlink
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek
                }
              },
              file: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek,
                  read: MEMFS.stream_ops.read,
                  write: MEMFS.stream_ops.write,
                  allocate: MEMFS.stream_ops.allocate,
                  mmap: MEMFS.stream_ops.mmap,
                  msync: MEMFS.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  readlink: MEMFS.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: FS.chrdev_stream_ops
              }
            };
            var node = FS.createNode(parent, name, mode, dev);
            if (FS.isDir(node.mode)) {
              node.node_ops = MEMFS.ops_table.dir.node;
              node.stream_ops = MEMFS.ops_table.dir.stream;
              node.contents = {};
            } else if (FS.isFile(node.mode)) {
              node.node_ops = MEMFS.ops_table.file.node;
              node.stream_ops = MEMFS.ops_table.file.stream;
              node.usedBytes = 0;
              node.contents = null;
            } else if (FS.isLink(node.mode)) {
              node.node_ops = MEMFS.ops_table.link.node;
              node.stream_ops = MEMFS.ops_table.link.stream;
            } else if (FS.isChrdev(node.mode)) {
              node.node_ops = MEMFS.ops_table.chrdev.node;
              node.stream_ops = MEMFS.ops_table.chrdev.stream;
            }
            node.timestamp = Date.now();
            if (parent) {
              parent.contents[name] = node;
              parent.timestamp = node.timestamp;
            }
            return node;
          },
          getFileDataAsTypedArray(node) {
            if (!node.contents)
              return new Uint8Array(0);
            if (node.contents.subarray)
              return node.contents.subarray(0, node.usedBytes);
            return new Uint8Array(node.contents);
          },
          expandFileStorage(node, newCapacity) {
            var prevCapacity = node.contents ? node.contents.length : 0;
            if (prevCapacity >= newCapacity)
              return;
            var CAPACITY_DOUBLING_MAX = 1024 * 1024;
            newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
            if (prevCapacity != 0)
              newCapacity = Math.max(newCapacity, 256);
            var oldContents = node.contents;
            node.contents = new Uint8Array(newCapacity);
            if (node.usedBytes > 0)
              node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
          },
          resizeFileStorage(node, newSize) {
            if (node.usedBytes == newSize)
              return;
            if (newSize == 0) {
              node.contents = null;
              node.usedBytes = 0;
            } else {
              var oldContents = node.contents;
              node.contents = new Uint8Array(newSize);
              if (oldContents) {
                node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
              }
              node.usedBytes = newSize;
            }
          },
          node_ops: {
            getattr(node) {
              var attr = {};
              attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
              attr.ino = node.id;
              attr.mode = node.mode;
              attr.nlink = 1;
              attr.uid = 0;
              attr.gid = 0;
              attr.rdev = node.rdev;
              if (FS.isDir(node.mode)) {
                attr.size = 4096;
              } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes;
              } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length;
              } else {
                attr.size = 0;
              }
              attr.atime = new Date(node.timestamp);
              attr.mtime = new Date(node.timestamp);
              attr.ctime = new Date(node.timestamp);
              attr.blksize = 4096;
              attr.blocks = Math.ceil(attr.size / attr.blksize);
              return attr;
            },
            setattr(node, attr) {
              if (attr.mode !== void 0) {
                node.mode = attr.mode;
              }
              if (attr.timestamp !== void 0) {
                node.timestamp = attr.timestamp;
              }
              if (attr.size !== void 0) {
                MEMFS.resizeFileStorage(node, attr.size);
              }
            },
            lookup(parent, name) {
              throw new FS.ErrnoError(44);
            },
            mknod(parent, name, mode, dev) {
              return MEMFS.createNode(parent, name, mode, dev);
            },
            rename(old_node, new_dir, new_name) {
              if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                  new_node = FS.lookupNode(new_dir, new_name);
                } catch (e) {
                }
                if (new_node) {
                  for (var i in new_node.contents) {
                    throw new FS.ErrnoError(55);
                  }
                }
              }
              delete old_node.parent.contents[old_node.name];
              old_node.parent.timestamp = Date.now();
              old_node.name = new_name;
              new_dir.contents[new_name] = old_node;
              new_dir.timestamp = old_node.parent.timestamp;
            },
            unlink(parent, name) {
              delete parent.contents[name];
              parent.timestamp = Date.now();
            },
            rmdir(parent, name) {
              var node = FS.lookupNode(parent, name);
              for (var i in node.contents) {
                throw new FS.ErrnoError(55);
              }
              delete parent.contents[name];
              parent.timestamp = Date.now();
            },
            readdir(node) {
              var entries = [".", ".."];
              for (var key of Object.keys(node.contents)) {
                entries.push(key);
              }
              return entries;
            },
            symlink(parent, newname, oldpath) {
              var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
              node.link = oldpath;
              return node;
            },
            readlink(node) {
              if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28);
              }
              return node.link;
            }
          },
          stream_ops: {
            read(stream, buffer, offset, length, position) {
              var contents = stream.node.contents;
              if (position >= stream.node.usedBytes)
                return 0;
              var size = Math.min(stream.node.usedBytes - position, length);
              assert(size >= 0);
              if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset);
              } else {
                for (var i = 0; i < size; i++)
                  buffer[offset + i] = contents[position + i];
              }
              return size;
            },
            write(stream, buffer, offset, length, position, canOwn) {
              assert(!(buffer instanceof ArrayBuffer));
              if (!length)
                return 0;
              var node = stream.node;
              node.timestamp = Date.now();
              if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                  assert(position === 0, "canOwn must imply no weird position inside the file");
                  node.contents = buffer.subarray(offset, offset + length);
                  node.usedBytes = length;
                  return length;
                } else if (node.usedBytes === 0 && position === 0) {
                  node.contents = buffer.slice(offset, offset + length);
                  node.usedBytes = length;
                  return length;
                } else if (position + length <= node.usedBytes) {
                  node.contents.set(buffer.subarray(offset, offset + length), position);
                  return length;
                }
              }
              MEMFS.expandFileStorage(node, position + length);
              if (node.contents.subarray && buffer.subarray) {
                node.contents.set(buffer.subarray(offset, offset + length), position);
              } else {
                for (var i = 0; i < length; i++) {
                  node.contents[position + i] = buffer[offset + i];
                }
              }
              node.usedBytes = Math.max(node.usedBytes, position + length);
              return length;
            },
            llseek(stream, offset, whence) {
              var position = offset;
              if (whence === 1) {
                position += stream.position;
              } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                  position += stream.node.usedBytes;
                }
              }
              if (position < 0) {
                throw new FS.ErrnoError(28);
              }
              return position;
            },
            allocate(stream, offset, length) {
              MEMFS.expandFileStorage(stream.node, offset + length);
              stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
            },
            mmap(stream, length, position, prot, flags) {
              if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              var ptr;
              var allocated;
              var contents = stream.node.contents;
              if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
                allocated = false;
                ptr = contents.byteOffset;
              } else {
                allocated = true;
                ptr = mmapAlloc(length);
                if (!ptr) {
                  throw new FS.ErrnoError(48);
                }
                if (contents) {
                  if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                      contents = contents.subarray(position, position + length);
                    } else {
                      contents = Array.prototype.slice.call(contents, position, position + length);
                    }
                  }
                  HEAP8.set(contents, ptr);
                }
              }
              return { ptr, allocated };
            },
            msync(stream, buffer, offset, length, mmapFlags) {
              MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
              return 0;
            }
          }
        };
        var asyncLoad = (url, onload, onerror, noRunDep) => {
          var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
          readAsync(url).then(
            (arrayBuffer) => {
              assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
              onload(new Uint8Array(arrayBuffer));
              if (dep)
                removeRunDependency(dep);
            },
            (err2) => {
              if (onerror) {
                onerror();
              } else {
                throw `Loading data file "${url}" failed.`;
              }
            }
          );
          if (dep)
            addRunDependency(dep);
        };
        var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
          FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
        };
        var preloadPlugins = Module["preloadPlugins"] || [];
        var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
          if (typeof Browser != "undefined")
            Browser.init();
          var handled = false;
          preloadPlugins.forEach((plugin) => {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, onerror);
              handled = true;
            }
          });
          return handled;
        };
        var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency(`cp ${fullname}`);
          function processData(byteArray) {
            function finish(byteArray2) {
              preFinish?.();
              if (!dontCreateFile) {
                FS_createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
              }
              onload?.();
              removeRunDependency(dep);
            }
            if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
              onerror?.();
              removeRunDependency(dep);
            })) {
              return;
            }
            finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == "string") {
            asyncLoad(url, processData, onerror);
          } else {
            processData(url);
          }
        };
        var FS_modeStringToFlags = (str) => {
          var flagModes = {
            "r": 0,
            "r+": 2,
            "w": 512 | 64 | 1,
            "w+": 512 | 64 | 2,
            "a": 1024 | 64 | 1,
            "a+": 1024 | 64 | 2
          };
          var flags = flagModes[str];
          if (typeof flags == "undefined") {
            throw new Error(`Unknown file open mode: ${str}`);
          }
          return flags;
        };
        var FS_getMode = (canRead, canWrite) => {
          var mode = 0;
          if (canRead)
            mode |= 292 | 73;
          if (canWrite)
            mode |= 146;
          return mode;
        };
        var strError = (errno) => UTF8ToString(_strerror(errno));
        var ERRNO_CODES = {
          "EPERM": 63,
          "ENOENT": 44,
          "ESRCH": 71,
          "EINTR": 27,
          "EIO": 29,
          "ENXIO": 60,
          "E2BIG": 1,
          "ENOEXEC": 45,
          "EBADF": 8,
          "ECHILD": 12,
          "EAGAIN": 6,
          "EWOULDBLOCK": 6,
          "ENOMEM": 48,
          "EACCES": 2,
          "EFAULT": 21,
          "ENOTBLK": 105,
          "EBUSY": 10,
          "EEXIST": 20,
          "EXDEV": 75,
          "ENODEV": 43,
          "ENOTDIR": 54,
          "EISDIR": 31,
          "EINVAL": 28,
          "ENFILE": 41,
          "EMFILE": 33,
          "ENOTTY": 59,
          "ETXTBSY": 74,
          "EFBIG": 22,
          "ENOSPC": 51,
          "ESPIPE": 70,
          "EROFS": 69,
          "EMLINK": 34,
          "EPIPE": 64,
          "EDOM": 18,
          "ERANGE": 68,
          "ENOMSG": 49,
          "EIDRM": 24,
          "ECHRNG": 106,
          "EL2NSYNC": 156,
          "EL3HLT": 107,
          "EL3RST": 108,
          "ELNRNG": 109,
          "EUNATCH": 110,
          "ENOCSI": 111,
          "EL2HLT": 112,
          "EDEADLK": 16,
          "ENOLCK": 46,
          "EBADE": 113,
          "EBADR": 114,
          "EXFULL": 115,
          "ENOANO": 104,
          "EBADRQC": 103,
          "EBADSLT": 102,
          "EDEADLOCK": 16,
          "EBFONT": 101,
          "ENOSTR": 100,
          "ENODATA": 116,
          "ETIME": 117,
          "ENOSR": 118,
          "ENONET": 119,
          "ENOPKG": 120,
          "EREMOTE": 121,
          "ENOLINK": 47,
          "EADV": 122,
          "ESRMNT": 123,
          "ECOMM": 124,
          "EPROTO": 65,
          "EMULTIHOP": 36,
          "EDOTDOT": 125,
          "EBADMSG": 9,
          "ENOTUNIQ": 126,
          "EBADFD": 127,
          "EREMCHG": 128,
          "ELIBACC": 129,
          "ELIBBAD": 130,
          "ELIBSCN": 131,
          "ELIBMAX": 132,
          "ELIBEXEC": 133,
          "ENOSYS": 52,
          "ENOTEMPTY": 55,
          "ENAMETOOLONG": 37,
          "ELOOP": 32,
          "EOPNOTSUPP": 138,
          "EPFNOSUPPORT": 139,
          "ECONNRESET": 15,
          "ENOBUFS": 42,
          "EAFNOSUPPORT": 5,
          "EPROTOTYPE": 67,
          "ENOTSOCK": 57,
          "ENOPROTOOPT": 50,
          "ESHUTDOWN": 140,
          "ECONNREFUSED": 14,
          "EADDRINUSE": 3,
          "ECONNABORTED": 13,
          "ENETUNREACH": 40,
          "ENETDOWN": 38,
          "ETIMEDOUT": 73,
          "EHOSTDOWN": 142,
          "EHOSTUNREACH": 23,
          "EINPROGRESS": 26,
          "EALREADY": 7,
          "EDESTADDRREQ": 17,
          "EMSGSIZE": 35,
          "EPROTONOSUPPORT": 66,
          "ESOCKTNOSUPPORT": 137,
          "EADDRNOTAVAIL": 4,
          "ENETRESET": 39,
          "EISCONN": 30,
          "ENOTCONN": 53,
          "ETOOMANYREFS": 141,
          "EUSERS": 136,
          "EDQUOT": 19,
          "ESTALE": 72,
          "ENOTSUP": 138,
          "ENOMEDIUM": 148,
          "EILSEQ": 25,
          "EOVERFLOW": 61,
          "ECANCELED": 11,
          "ENOTRECOVERABLE": 56,
          "EOWNERDEAD": 62,
          "ESTRPIPE": 135
        };
        var FS = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: "/",
          initialized: false,
          ignorePermissions: true,
          ErrnoError: class extends Error {
            name = "ErrnoError";
            // We set the `name` property to be able to identify `FS.ErrnoError`
            // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
            // - when using PROXYFS, an error can come from an underlying FS
            // as different FS objects have their own FS.ErrnoError each,
            // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
            // we'll use the reliable test `err.name == "ErrnoError"` instead
            constructor(errno) {
              super(runtimeInitialized ? strError(errno) : "");
              this.errno = errno;
              for (var key in ERRNO_CODES) {
                if (ERRNO_CODES[key] === errno) {
                  this.code = key;
                  break;
                }
              }
            }
          },
          filesystems: null,
          syncFSRequests: 0,
          readFiles: {},
          FSStream: class {
            shared = {};
            get object() {
              return this.node;
            }
            set object(val) {
              this.node = val;
            }
            get isRead() {
              return (this.flags & 2097155) !== 1;
            }
            get isWrite() {
              return (this.flags & 2097155) !== 0;
            }
            get isAppend() {
              return this.flags & 1024;
            }
            get flags() {
              return this.shared.flags;
            }
            set flags(val) {
              this.shared.flags = val;
            }
            get position() {
              return this.shared.position;
            }
            set position(val) {
              this.shared.position = val;
            }
          },
          FSNode: class {
            node_ops = {};
            stream_ops = {};
            readMode = 292 | 73;
            writeMode = 146;
            mounted = null;
            constructor(parent, name, mode, rdev) {
              if (!parent) {
                parent = this;
              }
              this.parent = parent;
              this.mount = parent.mount;
              this.id = FS.nextInode++;
              this.name = name;
              this.mode = mode;
              this.rdev = rdev;
            }
            get read() {
              return (this.mode & this.readMode) === this.readMode;
            }
            set read(val) {
              val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
            }
            get write() {
              return (this.mode & this.writeMode) === this.writeMode;
            }
            set write(val) {
              val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
            }
            get isFolder() {
              return FS.isDir(this.mode);
            }
            get isDevice() {
              return FS.isChrdev(this.mode);
            }
          },
          lookupPath(path, opts = {}) {
            path = PATH_FS.resolve(path);
            if (!path)
              return { path: "", node: null };
            var defaults = {
              follow_mount: true,
              recurse_count: 0
            };
            opts = Object.assign(defaults, opts);
            if (opts.recurse_count > 8) {
              throw new FS.ErrnoError(32);
            }
            var parts = path.split("/").filter((p) => !!p);
            var current = FS.root;
            var current_path = "/";
            for (var i = 0; i < parts.length; i++) {
              var islast = i === parts.length - 1;
              if (islast && opts.parent) {
                break;
              }
              current = FS.lookupNode(current, parts[i]);
              current_path = PATH.join2(current_path, parts[i]);
              if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                  current = current.mounted.root;
                }
              }
              if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                  var link = FS.readlink(current_path);
                  current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                  var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                  current = lookup.node;
                  if (count++ > 40) {
                    throw new FS.ErrnoError(32);
                  }
                }
              }
            }
            return { path: current_path, node: current };
          },
          getPath(node) {
            var path;
            while (true) {
              if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path)
                  return mount;
                return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
              }
              path = path ? `${node.name}/${path}` : node.name;
              node = node.parent;
            }
          },
          hashName(parentid, name) {
            var hash = 0;
            for (var i = 0; i < name.length; i++) {
              hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
            }
            return (parentid + hash >>> 0) % FS.nameTable.length;
          },
          hashAddNode(node) {
            var hash = FS.hashName(node.parent.id, node.name);
            node.name_next = FS.nameTable[hash];
            FS.nameTable[hash] = node;
          },
          hashRemoveNode(node) {
            var hash = FS.hashName(node.parent.id, node.name);
            if (FS.nameTable[hash] === node) {
              FS.nameTable[hash] = node.name_next;
            } else {
              var current = FS.nameTable[hash];
              while (current) {
                if (current.name_next === node) {
                  current.name_next = node.name_next;
                  break;
                }
                current = current.name_next;
              }
            }
          },
          lookupNode(parent, name) {
            var errCode = FS.mayLookup(parent);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            var hash = FS.hashName(parent.id, name);
            for (var node = FS.nameTable[hash]; node; node = node.name_next) {
              var nodeName = node.name;
              if (node.parent.id === parent.id && nodeName === name) {
                return node;
              }
            }
            return FS.lookup(parent, name);
          },
          createNode(parent, name, mode, rdev) {
            assert(typeof parent == "object");
            var node = new FS.FSNode(parent, name, mode, rdev);
            FS.hashAddNode(node);
            return node;
          },
          destroyNode(node) {
            FS.hashRemoveNode(node);
          },
          isRoot(node) {
            return node === node.parent;
          },
          isMountpoint(node) {
            return !!node.mounted;
          },
          isFile(mode) {
            return (mode & 61440) === 32768;
          },
          isDir(mode) {
            return (mode & 61440) === 16384;
          },
          isLink(mode) {
            return (mode & 61440) === 40960;
          },
          isChrdev(mode) {
            return (mode & 61440) === 8192;
          },
          isBlkdev(mode) {
            return (mode & 61440) === 24576;
          },
          isFIFO(mode) {
            return (mode & 61440) === 4096;
          },
          isSocket(mode) {
            return (mode & 49152) === 49152;
          },
          flagsToPermissionString(flag) {
            var perms = ["r", "w", "rw"][flag & 3];
            if (flag & 512) {
              perms += "w";
            }
            return perms;
          },
          nodePermissions(node, perms) {
            if (FS.ignorePermissions) {
              return 0;
            }
            if (perms.includes("r") && !(node.mode & 292)) {
              return 2;
            } else if (perms.includes("w") && !(node.mode & 146)) {
              return 2;
            } else if (perms.includes("x") && !(node.mode & 73)) {
              return 2;
            }
            return 0;
          },
          mayLookup(dir) {
            if (!FS.isDir(dir.mode))
              return 54;
            var errCode = FS.nodePermissions(dir, "x");
            if (errCode)
              return errCode;
            if (!dir.node_ops.lookup)
              return 2;
            return 0;
          },
          mayCreate(dir, name) {
            try {
              var node = FS.lookupNode(dir, name);
              return 20;
            } catch (e) {
            }
            return FS.nodePermissions(dir, "wx");
          },
          mayDelete(dir, name, isdir) {
            var node;
            try {
              node = FS.lookupNode(dir, name);
            } catch (e) {
              return e.errno;
            }
            var errCode = FS.nodePermissions(dir, "wx");
            if (errCode) {
              return errCode;
            }
            if (isdir) {
              if (!FS.isDir(node.mode)) {
                return 54;
              }
              if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10;
              }
            } else {
              if (FS.isDir(node.mode)) {
                return 31;
              }
            }
            return 0;
          },
          mayOpen(node, flags) {
            if (!node) {
              return 44;
            }
            if (FS.isLink(node.mode)) {
              return 32;
            } else if (FS.isDir(node.mode)) {
              if (FS.flagsToPermissionString(flags) !== "r" || // opening for write
              flags & 512) {
                return 31;
              }
            }
            return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
          },
          MAX_OPEN_FDS: 4096,
          nextfd() {
            for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
              if (!FS.streams[fd]) {
                return fd;
              }
            }
            throw new FS.ErrnoError(33);
          },
          getStreamChecked(fd) {
            var stream = FS.getStream(fd);
            if (!stream) {
              throw new FS.ErrnoError(8);
            }
            return stream;
          },
          getStream: (fd) => FS.streams[fd],
          createStream(stream, fd = -1) {
            assert(fd >= -1);
            stream = Object.assign(new FS.FSStream(), stream);
            if (fd == -1) {
              fd = FS.nextfd();
            }
            stream.fd = fd;
            FS.streams[fd] = stream;
            return stream;
          },
          closeStream(fd) {
            FS.streams[fd] = null;
          },
          dupStream(origStream, fd = -1) {
            var stream = FS.createStream(origStream, fd);
            stream.stream_ops?.dup?.(stream);
            return stream;
          },
          chrdev_stream_ops: {
            open(stream) {
              var device = FS.getDevice(stream.node.rdev);
              stream.stream_ops = device.stream_ops;
              stream.stream_ops.open?.(stream);
            },
            llseek() {
              throw new FS.ErrnoError(70);
            }
          },
          major: (dev) => dev >> 8,
          minor: (dev) => dev & 255,
          makedev: (ma, mi) => ma << 8 | mi,
          registerDevice(dev, ops) {
            FS.devices[dev] = { stream_ops: ops };
          },
          getDevice: (dev) => FS.devices[dev],
          getMounts(mount) {
            var mounts = [];
            var check = [mount];
            while (check.length) {
              var m = check.pop();
              mounts.push(m);
              check.push(...m.mounts);
            }
            return mounts;
          },
          syncfs(populate, callback) {
            if (typeof populate == "function") {
              callback = populate;
              populate = false;
            }
            FS.syncFSRequests++;
            if (FS.syncFSRequests > 1) {
              err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
            }
            var mounts = FS.getMounts(FS.root.mount);
            var completed = 0;
            function doCallback(errCode) {
              assert(FS.syncFSRequests > 0);
              FS.syncFSRequests--;
              return callback(errCode);
            }
            function done(errCode) {
              if (errCode) {
                if (!done.errored) {
                  done.errored = true;
                  return doCallback(errCode);
                }
                return;
              }
              if (++completed >= mounts.length) {
                doCallback(null);
              }
            }
            ;
            mounts.forEach((mount) => {
              if (!mount.type.syncfs) {
                return done(null);
              }
              mount.type.syncfs(mount, populate, done);
            });
          },
          mount(type, opts, mountpoint) {
            if (typeof type == "string") {
              throw type;
            }
            var root = mountpoint === "/";
            var pseudo = !mountpoint;
            var node;
            if (root && FS.root) {
              throw new FS.ErrnoError(10);
            } else if (!root && !pseudo) {
              var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
              mountpoint = lookup.path;
              node = lookup.node;
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54);
              }
            }
            var mount = {
              type,
              opts,
              mountpoint,
              mounts: []
            };
            var mountRoot = type.mount(mount);
            mountRoot.mount = mount;
            mount.root = mountRoot;
            if (root) {
              FS.root = mountRoot;
            } else if (node) {
              node.mounted = mount;
              if (node.mount) {
                node.mount.mounts.push(mount);
              }
            }
            return mountRoot;
          },
          unmount(mountpoint) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
            if (!FS.isMountpoint(lookup.node)) {
              throw new FS.ErrnoError(28);
            }
            var node = lookup.node;
            var mount = node.mounted;
            var mounts = FS.getMounts(mount);
            Object.keys(FS.nameTable).forEach((hash) => {
              var current = FS.nameTable[hash];
              while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                  FS.destroyNode(current);
                }
                current = next;
              }
            });
            node.mounted = null;
            var idx = node.mount.mounts.indexOf(mount);
            assert(idx !== -1);
            node.mount.mounts.splice(idx, 1);
          },
          lookup(parent, name) {
            return parent.node_ops.lookup(parent, name);
          },
          mknod(path, mode, dev) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            var name = PATH.basename(path);
            if (!name || name === "." || name === "..") {
              throw new FS.ErrnoError(28);
            }
            var errCode = FS.mayCreate(parent, name);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.mknod) {
              throw new FS.ErrnoError(63);
            }
            return parent.node_ops.mknod(parent, name, mode, dev);
          },
          statfs(path) {
            var rtn = {
              bsize: 4096,
              frsize: 4096,
              blocks: 1e6,
              bfree: 5e5,
              bavail: 5e5,
              files: FS.nextInode,
              ffree: FS.nextInode - 1,
              fsid: 42,
              flags: 2,
              namelen: 255
            };
            var parent = FS.lookupPath(path, { follow: true }).node;
            if (parent?.node_ops.statfs) {
              Object.assign(rtn, parent.node_ops.statfs(parent.mount.opts.root));
            }
            return rtn;
          },
          create(path, mode = 438) {
            mode &= 4095;
            mode |= 32768;
            return FS.mknod(path, mode, 0);
          },
          mkdir(path, mode = 511) {
            mode &= 511 | 512;
            mode |= 16384;
            return FS.mknod(path, mode, 0);
          },
          mkdirTree(path, mode) {
            var dirs = path.split("/");
            var d = "";
            for (var i = 0; i < dirs.length; ++i) {
              if (!dirs[i])
                continue;
              d += "/" + dirs[i];
              try {
                FS.mkdir(d, mode);
              } catch (e) {
                if (e.errno != 20)
                  throw e;
              }
            }
          },
          mkdev(path, mode, dev) {
            if (typeof dev == "undefined") {
              dev = mode;
              mode = 438;
            }
            mode |= 8192;
            return FS.mknod(path, mode, dev);
          },
          symlink(oldpath, newpath) {
            if (!PATH_FS.resolve(oldpath)) {
              throw new FS.ErrnoError(44);
            }
            var lookup = FS.lookupPath(newpath, { parent: true });
            var parent = lookup.node;
            if (!parent) {
              throw new FS.ErrnoError(44);
            }
            var newname = PATH.basename(newpath);
            var errCode = FS.mayCreate(parent, newname);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.symlink) {
              throw new FS.ErrnoError(63);
            }
            return parent.node_ops.symlink(parent, newname, oldpath);
          },
          rename(old_path, new_path) {
            var old_dirname = PATH.dirname(old_path);
            var new_dirname = PATH.dirname(new_path);
            var old_name = PATH.basename(old_path);
            var new_name = PATH.basename(new_path);
            var lookup, old_dir, new_dir;
            lookup = FS.lookupPath(old_path, { parent: true });
            old_dir = lookup.node;
            lookup = FS.lookupPath(new_path, { parent: true });
            new_dir = lookup.node;
            if (!old_dir || !new_dir)
              throw new FS.ErrnoError(44);
            if (old_dir.mount !== new_dir.mount) {
              throw new FS.ErrnoError(75);
            }
            var old_node = FS.lookupNode(old_dir, old_name);
            var relative = PATH_FS.relative(old_path, new_dirname);
            if (relative.charAt(0) !== ".") {
              throw new FS.ErrnoError(28);
            }
            relative = PATH_FS.relative(new_path, old_dirname);
            if (relative.charAt(0) !== ".") {
              throw new FS.ErrnoError(55);
            }
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (old_node === new_node) {
              return;
            }
            var isdir = FS.isDir(old_node.mode);
            var errCode = FS.mayDelete(old_dir, old_name, isdir);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!old_dir.node_ops.rename) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
              throw new FS.ErrnoError(10);
            }
            if (new_dir !== old_dir) {
              errCode = FS.nodePermissions(old_dir, "w");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
            }
            FS.hashRemoveNode(old_node);
            try {
              old_dir.node_ops.rename(old_node, new_dir, new_name);
              old_node.parent = new_dir;
            } catch (e) {
              throw e;
            } finally {
              FS.hashAddNode(old_node);
            }
          },
          rmdir(path) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            var name = PATH.basename(path);
            var node = FS.lookupNode(parent, name);
            var errCode = FS.mayDelete(parent, name, true);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.rmdir) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            parent.node_ops.rmdir(parent, name);
            FS.destroyNode(node);
          },
          readdir(path) {
            var lookup = FS.lookupPath(path, { follow: true });
            var node = lookup.node;
            if (!node.node_ops.readdir) {
              throw new FS.ErrnoError(54);
            }
            return node.node_ops.readdir(node);
          },
          unlink(path) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            if (!parent) {
              throw new FS.ErrnoError(44);
            }
            var name = PATH.basename(path);
            var node = FS.lookupNode(parent, name);
            var errCode = FS.mayDelete(parent, name, false);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.unlink) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            parent.node_ops.unlink(parent, name);
            FS.destroyNode(node);
          },
          readlink(path) {
            var lookup = FS.lookupPath(path);
            var link = lookup.node;
            if (!link) {
              throw new FS.ErrnoError(44);
            }
            if (!link.node_ops.readlink) {
              throw new FS.ErrnoError(28);
            }
            return link.node_ops.readlink(link);
          },
          stat(path, dontFollow) {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            var node = lookup.node;
            if (!node) {
              throw new FS.ErrnoError(44);
            }
            if (!node.node_ops.getattr) {
              throw new FS.ErrnoError(63);
            }
            return node.node_ops.getattr(node);
          },
          lstat(path) {
            return FS.stat(path, true);
          },
          chmod(path, mode, dontFollow) {
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: !dontFollow });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            node.node_ops.setattr(node, {
              mode: mode & 4095 | node.mode & ~4095,
              timestamp: Date.now()
            });
          },
          lchmod(path, mode) {
            FS.chmod(path, mode, true);
          },
          fchmod(fd, mode) {
            var stream = FS.getStreamChecked(fd);
            FS.chmod(stream.node, mode);
          },
          chown(path, uid, gid, dontFollow) {
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: !dontFollow });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            node.node_ops.setattr(node, {
              timestamp: Date.now()
              // we ignore the uid / gid for now
            });
          },
          lchown(path, uid, gid) {
            FS.chown(path, uid, gid, true);
          },
          fchown(fd, uid, gid) {
            var stream = FS.getStreamChecked(fd);
            FS.chown(stream.node, uid, gid);
          },
          truncate(path, len) {
            if (len < 0) {
              throw new FS.ErrnoError(28);
            }
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: true });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isDir(node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!FS.isFile(node.mode)) {
              throw new FS.ErrnoError(28);
            }
            var errCode = FS.nodePermissions(node, "w");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            node.node_ops.setattr(node, {
              size: len,
              timestamp: Date.now()
            });
          },
          ftruncate(fd, len) {
            var stream = FS.getStreamChecked(fd);
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(28);
            }
            FS.truncate(stream.node, len);
          },
          utime(path, atime, mtime) {
            var lookup = FS.lookupPath(path, { follow: true });
            var node = lookup.node;
            node.node_ops.setattr(node, {
              timestamp: Math.max(atime, mtime)
            });
          },
          open(path, flags, mode = 438) {
            if (path === "") {
              throw new FS.ErrnoError(44);
            }
            flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
            if (flags & 64) {
              mode = mode & 4095 | 32768;
            } else {
              mode = 0;
            }
            var node;
            if (typeof path == "object") {
              node = path;
            } else {
              path = PATH.normalize(path);
              try {
                var lookup = FS.lookupPath(path, {
                  follow: !(flags & 131072)
                });
                node = lookup.node;
              } catch (e) {
              }
            }
            var created = false;
            if (flags & 64) {
              if (node) {
                if (flags & 128) {
                  throw new FS.ErrnoError(20);
                }
              } else {
                node = FS.mknod(path, mode, 0);
                created = true;
              }
            }
            if (!node) {
              throw new FS.ErrnoError(44);
            }
            if (FS.isChrdev(node.mode)) {
              flags &= ~512;
            }
            if (flags & 65536 && !FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
            if (!created) {
              var errCode = FS.mayOpen(node, flags);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
            }
            if (flags & 512 && !created) {
              FS.truncate(node, 0);
            }
            flags &= ~(128 | 512 | 131072);
            var stream = FS.createStream({
              node,
              path: FS.getPath(node),
              // we want the absolute path to the node
              flags,
              seekable: true,
              position: 0,
              stream_ops: node.stream_ops,
              // used by the file family libc calls (fopen, fwrite, ferror, etc.)
              ungotten: [],
              error: false
            });
            if (stream.stream_ops.open) {
              stream.stream_ops.open(stream);
            }
            if (Module["logReadFiles"] && !(flags & 1)) {
              if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1;
              }
            }
            return stream;
          },
          close(stream) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (stream.getdents)
              stream.getdents = null;
            try {
              if (stream.stream_ops.close) {
                stream.stream_ops.close(stream);
              }
            } catch (e) {
              throw e;
            } finally {
              FS.closeStream(stream.fd);
            }
            stream.fd = null;
          },
          isClosed(stream) {
            return stream.fd === null;
          },
          llseek(stream, offset, whence) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (!stream.seekable || !stream.stream_ops.llseek) {
              throw new FS.ErrnoError(70);
            }
            if (whence != 0 && whence != 1 && whence != 2) {
              throw new FS.ErrnoError(28);
            }
            stream.position = stream.stream_ops.llseek(stream, offset, whence);
            stream.ungotten = [];
            return stream.position;
          },
          read(stream, buffer, offset, length, position) {
            assert(offset >= 0);
            if (length < 0 || position < 0) {
              throw new FS.ErrnoError(28);
            }
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if ((stream.flags & 2097155) === 1) {
              throw new FS.ErrnoError(8);
            }
            if (FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!stream.stream_ops.read) {
              throw new FS.ErrnoError(28);
            }
            var seeking = typeof position != "undefined";
            if (!seeking) {
              position = stream.position;
            } else if (!stream.seekable) {
              throw new FS.ErrnoError(70);
            }
            var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
            if (!seeking)
              stream.position += bytesRead;
            return bytesRead;
          },
          write(stream, buffer, offset, length, position, canOwn) {
            assert(offset >= 0);
            if (length < 0 || position < 0) {
              throw new FS.ErrnoError(28);
            }
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(8);
            }
            if (FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!stream.stream_ops.write) {
              throw new FS.ErrnoError(28);
            }
            if (stream.seekable && stream.flags & 1024) {
              FS.llseek(stream, 0, 2);
            }
            var seeking = typeof position != "undefined";
            if (!seeking) {
              position = stream.position;
            } else if (!stream.seekable) {
              throw new FS.ErrnoError(70);
            }
            var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
            if (!seeking)
              stream.position += bytesWritten;
            return bytesWritten;
          },
          allocate(stream, offset, length) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (offset < 0 || length <= 0) {
              throw new FS.ErrnoError(28);
            }
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(8);
            }
            if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            if (!stream.stream_ops.allocate) {
              throw new FS.ErrnoError(138);
            }
            stream.stream_ops.allocate(stream, offset, length);
          },
          mmap(stream, length, position, prot, flags) {
            if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
              throw new FS.ErrnoError(2);
            }
            if ((stream.flags & 2097155) === 1) {
              throw new FS.ErrnoError(2);
            }
            if (!stream.stream_ops.mmap) {
              throw new FS.ErrnoError(43);
            }
            if (!length) {
              throw new FS.ErrnoError(28);
            }
            return stream.stream_ops.mmap(stream, length, position, prot, flags);
          },
          msync(stream, buffer, offset, length, mmapFlags) {
            assert(offset >= 0);
            if (!stream.stream_ops.msync) {
              return 0;
            }
            return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
          },
          ioctl(stream, cmd, arg) {
            if (!stream.stream_ops.ioctl) {
              throw new FS.ErrnoError(59);
            }
            return stream.stream_ops.ioctl(stream, cmd, arg);
          },
          readFile(path, opts = {}) {
            opts.flags = opts.flags || 0;
            opts.encoding = opts.encoding || "binary";
            if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
              throw new Error(`Invalid encoding type "${opts.encoding}"`);
            }
            var ret;
            var stream = FS.open(path, opts.flags);
            var stat = FS.stat(path);
            var length = stat.size;
            var buf = new Uint8Array(length);
            FS.read(stream, buf, 0, length, 0);
            if (opts.encoding === "utf8") {
              ret = UTF8ArrayToString(buf);
            } else if (opts.encoding === "binary") {
              ret = buf;
            }
            FS.close(stream);
            return ret;
          },
          writeFile(path, data, opts = {}) {
            opts.flags = opts.flags || 577;
            var stream = FS.open(path, opts.flags, opts.mode);
            if (typeof data == "string") {
              var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
              var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
              FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
            } else if (ArrayBuffer.isView(data)) {
              FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
            } else {
              throw new Error("Unsupported data type");
            }
            FS.close(stream);
          },
          cwd: () => FS.currentPath,
          chdir(path) {
            var lookup = FS.lookupPath(path, { follow: true });
            if (lookup.node === null) {
              throw new FS.ErrnoError(44);
            }
            if (!FS.isDir(lookup.node.mode)) {
              throw new FS.ErrnoError(54);
            }
            var errCode = FS.nodePermissions(lookup.node, "x");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            FS.currentPath = lookup.path;
          },
          createDefaultDirectories() {
            FS.mkdir("/tmp");
            FS.mkdir("/home");
            FS.mkdir("/home/web_user");
          },
          createDefaultDevices() {
            FS.mkdir("/dev");
            FS.registerDevice(FS.makedev(1, 3), {
              read: () => 0,
              write: (stream, buffer, offset, length, pos) => length,
              llseek: () => 0
            });
            FS.mkdev("/dev/null", FS.makedev(1, 3));
            TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
            TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
            FS.mkdev("/dev/tty", FS.makedev(5, 0));
            FS.mkdev("/dev/tty1", FS.makedev(6, 0));
            var randomBuffer = new Uint8Array(1024), randomLeft = 0;
            var randomByte = () => {
              if (randomLeft === 0) {
                randomLeft = randomFill(randomBuffer).byteLength;
              }
              return randomBuffer[--randomLeft];
            };
            FS.createDevice("/dev", "random", randomByte);
            FS.createDevice("/dev", "urandom", randomByte);
            FS.mkdir("/dev/shm");
            FS.mkdir("/dev/shm/tmp");
          },
          createSpecialDirectories() {
            FS.mkdir("/proc");
            var proc_self = FS.mkdir("/proc/self");
            FS.mkdir("/proc/self/fd");
            FS.mount({
              mount() {
                var node = FS.createNode(proc_self, "fd", 16895, 73);
                node.node_ops = {
                  lookup(parent, name) {
                    var fd = +name;
                    var stream = FS.getStreamChecked(fd);
                    var ret = {
                      parent: null,
                      mount: { mountpoint: "fake" },
                      node_ops: { readlink: () => stream.path }
                    };
                    ret.parent = ret;
                    return ret;
                  }
                };
                return node;
              }
            }, {}, "/proc/self/fd");
          },
          createStandardStreams(input, output, error) {
            if (input) {
              FS.createDevice("/dev", "stdin", input);
            } else {
              FS.symlink("/dev/tty", "/dev/stdin");
            }
            if (output) {
              FS.createDevice("/dev", "stdout", null, output);
            } else {
              FS.symlink("/dev/tty", "/dev/stdout");
            }
            if (error) {
              FS.createDevice("/dev", "stderr", null, error);
            } else {
              FS.symlink("/dev/tty1", "/dev/stderr");
            }
            var stdin = FS.open("/dev/stdin", 0);
            var stdout = FS.open("/dev/stdout", 1);
            var stderr = FS.open("/dev/stderr", 1);
            assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
            assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
            assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
          },
          staticInit() {
            FS.nameTable = new Array(4096);
            FS.mount(MEMFS, {}, "/");
            FS.createDefaultDirectories();
            FS.createDefaultDevices();
            FS.createSpecialDirectories();
            FS.filesystems = {
              "MEMFS": MEMFS
            };
          },
          init(input, output, error) {
            assert(!FS.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
            FS.initialized = true;
            input ??= Module["stdin"];
            output ??= Module["stdout"];
            error ??= Module["stderr"];
            FS.createStandardStreams(input, output, error);
          },
          quit() {
            FS.initialized = false;
            _fflush(0);
            for (var i = 0; i < FS.streams.length; i++) {
              var stream = FS.streams[i];
              if (!stream) {
                continue;
              }
              FS.close(stream);
            }
          },
          findObject(path, dontResolveLastLink) {
            var ret = FS.analyzePath(path, dontResolveLastLink);
            if (!ret.exists) {
              return null;
            }
            return ret.object;
          },
          analyzePath(path, dontResolveLastLink) {
            try {
              var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
              path = lookup.path;
            } catch (e) {
            }
            var ret = {
              isRoot: false,
              exists: false,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: false,
              parentPath: null,
              parentObject: null
            };
            try {
              var lookup = FS.lookupPath(path, { parent: true });
              ret.parentExists = true;
              ret.parentPath = lookup.path;
              ret.parentObject = lookup.node;
              ret.name = PATH.basename(path);
              lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
              ret.exists = true;
              ret.path = lookup.path;
              ret.object = lookup.node;
              ret.name = lookup.node.name;
              ret.isRoot = lookup.path === "/";
            } catch (e) {
              ret.error = e.errno;
            }
            ;
            return ret;
          },
          createPath(parent, path, canRead, canWrite) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            var parts = path.split("/").reverse();
            while (parts.length) {
              var part = parts.pop();
              if (!part)
                continue;
              var current = PATH.join2(parent, part);
              try {
                FS.mkdir(current);
              } catch (e) {
              }
              parent = current;
            }
            return current;
          },
          createFile(parent, name, properties, canRead, canWrite) {
            var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
            var mode = FS_getMode(canRead, canWrite);
            return FS.create(path, mode);
          },
          createDataFile(parent, name, data, canRead, canWrite, canOwn) {
            var path = name;
            if (parent) {
              parent = typeof parent == "string" ? parent : FS.getPath(parent);
              path = name ? PATH.join2(parent, name) : parent;
            }
            var mode = FS_getMode(canRead, canWrite);
            var node = FS.create(path, mode);
            if (data) {
              if (typeof data == "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i)
                  arr[i] = data.charCodeAt(i);
                data = arr;
              }
              FS.chmod(node, mode | 146);
              var stream = FS.open(node, 577);
              FS.write(stream, data, 0, data.length, 0, canOwn);
              FS.close(stream);
              FS.chmod(node, mode);
            }
          },
          createDevice(parent, name, input, output) {
            var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
            var mode = FS_getMode(!!input, !!output);
            FS.createDevice.major ??= 64;
            var dev = FS.makedev(FS.createDevice.major++, 0);
            FS.registerDevice(dev, {
              open(stream) {
                stream.seekable = false;
              },
              close(stream) {
                if (output?.buffer?.length) {
                  output(10);
                }
              },
              read(stream, buffer, offset, length, pos) {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                  var result;
                  try {
                    result = input();
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                  if (result === void 0 && bytesRead === 0) {
                    throw new FS.ErrnoError(6);
                  }
                  if (result === null || result === void 0)
                    break;
                  bytesRead++;
                  buffer[offset + i] = result;
                }
                if (bytesRead) {
                  stream.node.timestamp = Date.now();
                }
                return bytesRead;
              },
              write(stream, buffer, offset, length, pos) {
                for (var i = 0; i < length; i++) {
                  try {
                    output(buffer[offset + i]);
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                }
                if (length) {
                  stream.node.timestamp = Date.now();
                }
                return i;
              }
            });
            return FS.mkdev(path, mode, dev);
          },
          forceLoadFile(obj) {
            if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
              return true;
            if (typeof XMLHttpRequest != "undefined") {
              throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            } else {
              try {
                obj.contents = readBinary(obj.url);
                obj.usedBytes = obj.contents.length;
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
          },
          createLazyFile(parent, name, url, canRead, canWrite) {
            class LazyUint8Array {
              lengthKnown = false;
              chunks = [];
              // Loaded chunks. Index is the chunk number
              get(idx) {
                if (idx > this.length - 1 || idx < 0) {
                  return void 0;
                }
                var chunkOffset = idx % this.chunkSize;
                var chunkNum = idx / this.chunkSize | 0;
                return this.getter(chunkNum)[chunkOffset];
              }
              setDataGetter(getter) {
                this.getter = getter;
              }
              cacheLength() {
                var xhr = new XMLHttpRequest();
                xhr.open("HEAD", url, false);
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                  throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                var datalength = Number(xhr.getResponseHeader("Content-length"));
                var header;
                var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                var chunkSize = 1024 * 1024;
                if (!hasByteServing)
                  chunkSize = datalength;
                var doXHR = (from, to) => {
                  if (from > to)
                    throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                  if (to > datalength - 1)
                    throw new Error("only " + datalength + " bytes available! programmer error!");
                  var xhr2 = new XMLHttpRequest();
                  xhr2.open("GET", url, false);
                  if (datalength !== chunkSize)
                    xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
                  xhr2.responseType = "arraybuffer";
                  if (xhr2.overrideMimeType) {
                    xhr2.overrideMimeType("text/plain; charset=x-user-defined");
                  }
                  xhr2.send(null);
                  if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                    throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
                  if (xhr2.response !== void 0) {
                    return new Uint8Array(
                      /** @type{Array<number>} */
                      xhr2.response || []
                    );
                  }
                  return intArrayFromString(xhr2.responseText || "", true);
                };
                var lazyArray2 = this;
                lazyArray2.setDataGetter((chunkNum) => {
                  var start = chunkNum * chunkSize;
                  var end = (chunkNum + 1) * chunkSize - 1;
                  end = Math.min(end, datalength - 1);
                  if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                    lazyArray2.chunks[chunkNum] = doXHR(start, end);
                  }
                  if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                    throw new Error("doXHR failed!");
                  return lazyArray2.chunks[chunkNum];
                });
                if (usesGzip || !datalength) {
                  chunkSize = datalength = 1;
                  datalength = this.getter(0).length;
                  chunkSize = datalength;
                  out("LazyFiles on gzip forces download of the whole file when length is accessed");
                }
                this._length = datalength;
                this._chunkSize = chunkSize;
                this.lengthKnown = true;
              }
              get length() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
              get chunkSize() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
            if (typeof XMLHttpRequest != "undefined") {
              if (!ENVIRONMENT_IS_WORKER)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var lazyArray = new LazyUint8Array();
              var properties = { isDevice: false, contents: lazyArray };
            } else {
              var properties = { isDevice: false, url };
            }
            var node = FS.createFile(parent, name, properties, canRead, canWrite);
            if (properties.contents) {
              node.contents = properties.contents;
            } else if (properties.url) {
              node.contents = null;
              node.url = properties.url;
            }
            Object.defineProperties(node, {
              usedBytes: {
                get: function() {
                  return this.contents.length;
                }
              }
            });
            var stream_ops = {};
            var keys = Object.keys(node.stream_ops);
            keys.forEach((key) => {
              var fn = node.stream_ops[key];
              stream_ops[key] = (...args) => {
                FS.forceLoadFile(node);
                return fn(...args);
              };
            });
            function writeChunks(stream, buffer, offset, length, position) {
              var contents = stream.node.contents;
              if (position >= contents.length)
                return 0;
              var size = Math.min(contents.length - position, length);
              assert(size >= 0);
              if (contents.slice) {
                for (var i = 0; i < size; i++) {
                  buffer[offset + i] = contents[position + i];
                }
              } else {
                for (var i = 0; i < size; i++) {
                  buffer[offset + i] = contents.get(position + i);
                }
              }
              return size;
            }
            stream_ops.read = (stream, buffer, offset, length, position) => {
              FS.forceLoadFile(node);
              return writeChunks(stream, buffer, offset, length, position);
            };
            stream_ops.mmap = (stream, length, position, prot, flags) => {
              FS.forceLoadFile(node);
              var ptr = mmapAlloc(length);
              if (!ptr) {
                throw new FS.ErrnoError(48);
              }
              writeChunks(stream, HEAP8, ptr, length, position);
              return { ptr, allocated: true };
            };
            node.stream_ops = stream_ops;
            return node;
          },
          absolutePath() {
            abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
          },
          createFolder() {
            abort("FS.createFolder has been removed; use FS.mkdir instead");
          },
          createLink() {
            abort("FS.createLink has been removed; use FS.symlink instead");
          },
          joinPath() {
            abort("FS.joinPath has been removed; use PATH.join instead");
          },
          mmapAlloc() {
            abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
          },
          standardizePath() {
            abort("FS.standardizePath has been removed; use PATH.normalize instead");
          }
        };
        var SYSCALLS = {
          DEFAULT_POLLMASK: 5,
          calculateAt(dirfd, path, allowEmpty) {
            if (PATH.isAbs(path)) {
              return path;
            }
            var dir;
            if (dirfd === -100) {
              dir = FS.cwd();
            } else {
              var dirstream = SYSCALLS.getStreamFromFD(dirfd);
              dir = dirstream.path;
            }
            if (path.length == 0) {
              if (!allowEmpty) {
                throw new FS.ErrnoError(44);
                ;
              }
              return dir;
            }
            return PATH.join2(dir, path);
          },
          doStat(func, path, buf) {
            var stat = func(path);
            HEAP32[buf >> 2] = stat.dev;
            HEAP32[buf + 4 >> 2] = stat.mode;
            HEAPU32[buf + 8 >> 2] = stat.nlink;
            HEAP32[buf + 12 >> 2] = stat.uid;
            HEAP32[buf + 16 >> 2] = stat.gid;
            HEAP32[buf + 20 >> 2] = stat.rdev;
            HEAP64[buf + 24 >> 3] = BigInt(stat.size);
            HEAP32[buf + 32 >> 2] = 4096;
            HEAP32[buf + 36 >> 2] = stat.blocks;
            var atime = stat.atime.getTime();
            var mtime = stat.mtime.getTime();
            var ctime = stat.ctime.getTime();
            HEAP64[buf + 40 >> 3] = BigInt(Math.floor(atime / 1e3));
            HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
            HEAP64[buf + 56 >> 3] = BigInt(Math.floor(mtime / 1e3));
            HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
            HEAP64[buf + 72 >> 3] = BigInt(Math.floor(ctime / 1e3));
            HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
            HEAP64[buf + 88 >> 3] = BigInt(stat.ino);
            return 0;
          },
          doMsync(addr, stream, len, flags, offset) {
            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            if (flags & 2) {
              return 0;
            }
            var buffer = HEAPU8.slice(addr, addr + len);
            FS.msync(stream, buffer, offset, len, flags);
          },
          getStreamFromFD(fd) {
            var stream = FS.getStreamChecked(fd);
            return stream;
          },
          varargs: void 0,
          getStr(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          }
        };
        function ___syscall_fcntl64(fd, cmd, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(3, 0, 1, fd, cmd, varargs);
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (cmd) {
              case 0: {
                var arg = syscallGetVarargI();
                if (arg < 0) {
                  return -28;
                }
                while (FS.streams[arg]) {
                  arg++;
                }
                var newStream;
                newStream = FS.dupStream(stream, arg);
                return newStream.fd;
              }
              case 1:
              case 2:
                return 0;
              case 3:
                return stream.flags;
              case 4: {
                var arg = syscallGetVarargI();
                stream.flags |= arg;
                return 0;
              }
              case 12: {
                var arg = syscallGetVarargP();
                var offset = 0;
                HEAP16[arg + offset >> 1] = 2;
                return 0;
              }
              case 13:
              case 14:
                return 0;
            }
            return -28;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_ioctl(fd, op, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(4, 0, 1, fd, op, varargs);
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (op) {
              case 21509: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21505: {
                if (!stream.tty)
                  return -59;
                if (stream.tty.ops.ioctl_tcgets) {
                  var termios = stream.tty.ops.ioctl_tcgets(stream);
                  var argp = syscallGetVarargP();
                  HEAP32[argp >> 2] = termios.c_iflag || 0;
                  HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
                  HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
                  HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
                  for (var i = 0; i < 32; i++) {
                    HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
                  }
                  return 0;
                }
                return 0;
              }
              case 21510:
              case 21511:
              case 21512: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21506:
              case 21507:
              case 21508: {
                if (!stream.tty)
                  return -59;
                if (stream.tty.ops.ioctl_tcsets) {
                  var argp = syscallGetVarargP();
                  var c_iflag = HEAP32[argp >> 2];
                  var c_oflag = HEAP32[argp + 4 >> 2];
                  var c_cflag = HEAP32[argp + 8 >> 2];
                  var c_lflag = HEAP32[argp + 12 >> 2];
                  var c_cc = [];
                  for (var i = 0; i < 32; i++) {
                    c_cc.push(HEAP8[argp + i + 17]);
                  }
                  return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
                }
                return 0;
              }
              case 21519: {
                if (!stream.tty)
                  return -59;
                var argp = syscallGetVarargP();
                HEAP32[argp >> 2] = 0;
                return 0;
              }
              case 21520: {
                if (!stream.tty)
                  return -59;
                return -28;
              }
              case 21531: {
                var argp = syscallGetVarargP();
                return FS.ioctl(stream, op, argp);
              }
              case 21523: {
                if (!stream.tty)
                  return -59;
                if (stream.tty.ops.ioctl_tiocgwinsz) {
                  var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
                  var argp = syscallGetVarargP();
                  HEAP16[argp >> 1] = winsize[0];
                  HEAP16[argp + 2 >> 1] = winsize[1];
                }
                return 0;
              }
              case 21524: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21515: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              default:
                return -28;
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(5, 0, 1, dirfd, path, flags, varargs);
          SYSCALLS.varargs = varargs;
          try {
            path = SYSCALLS.getStr(path);
            path = SYSCALLS.calculateAt(dirfd, path);
            var mode = varargs ? syscallGetVarargI() : 0;
            return FS.open(path, flags, mode).fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        var __abort_js = () => abort("native code called abort()");
        var nowIsMonotonic = 1;
        var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
        var __emscripten_init_main_thread_js = (tb) => {
          __emscripten_thread_init(
            tb,
            /*is_main=*/
            !ENVIRONMENT_IS_WORKER,
            /*is_runtime=*/
            1,
            /*can_block=*/
            !ENVIRONMENT_IS_WEB,
            /*default_stacksize=*/
            20971520,
            /*start_profiling=*/
            false
          );
          PThread.threadInitTLS();
        };
        var maybeExit = () => {
          if (!keepRuntimeAlive()) {
            try {
              if (ENVIRONMENT_IS_PTHREAD)
                __emscripten_thread_exit(EXITSTATUS);
              else
                _exit(EXITSTATUS);
            } catch (e) {
              handleException(e);
            }
          }
        };
        var callUserCallback = (func) => {
          if (ABORT) {
            err("user callback triggered after runtime exited or application aborted.  Ignoring.");
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e) {
            handleException(e);
          }
        };
        var __emscripten_thread_mailbox_await = (pthread_ptr) => {
          if (typeof Atomics.waitAsync === "function") {
            var wait = Atomics.waitAsync(HEAP32, pthread_ptr >> 2, pthread_ptr);
            assert(wait.async);
            wait.value.then(checkMailbox);
            var waitingAsync = pthread_ptr + 128;
            Atomics.store(HEAP32, waitingAsync >> 2, 1);
          }
        };
        var checkMailbox = () => {
          var pthread_ptr = _pthread_self();
          if (pthread_ptr) {
            __emscripten_thread_mailbox_await(pthread_ptr);
            callUserCallback(__emscripten_check_mailbox);
          }
        };
        var __emscripten_notify_mailbox_postmessage = (targetThread, currThreadId) => {
          if (targetThread == currThreadId) {
            setTimeout(checkMailbox);
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ targetThread, cmd: "checkMailbox" });
          } else {
            var worker = PThread.pthreads[targetThread];
            if (!worker) {
              err(`Cannot send message to thread with ID ${targetThread}, unknown thread ID!`);
              return;
            }
            worker.postMessage({ cmd: "checkMailbox" });
          }
        };
        var proxiedJSCallArgs = [];
        var __emscripten_receive_on_main_thread_js = (funcIndex, emAsmAddr, callingThread, numCallArgs, args) => {
          numCallArgs /= 2;
          proxiedJSCallArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            if (HEAP64[b + 2 * i]) {
              proxiedJSCallArgs[i] = HEAP64[b + 2 * i + 1];
            } else {
              proxiedJSCallArgs[i] = HEAPF64[b + 2 * i + 1];
            }
          }
          var func = emAsmAddr ? ASM_CONSTS[emAsmAddr] : proxiedFunctionTable[funcIndex];
          assert(!(funcIndex && emAsmAddr));
          assert(func.length == numCallArgs, "Call args mismatch in _emscripten_receive_on_main_thread_js");
          PThread.currentProxiedOperationCallerThread = callingThread;
          var rtn = func(...proxiedJSCallArgs);
          PThread.currentProxiedOperationCallerThread = 0;
          assert(typeof rtn != "bigint");
          return rtn;
        };
        var __emscripten_runtime_keepalive_clear = () => {
          noExitRuntime = false;
          runtimeKeepaliveCounter = 0;
        };
        var __emscripten_thread_cleanup = (thread) => {
          if (!ENVIRONMENT_IS_PTHREAD)
            cleanupThread(thread);
          else
            postMessage({ cmd: "cleanupThread", thread });
        };
        var __emscripten_thread_set_strongref = (thread) => {
          if (ENVIRONMENT_IS_NODE) {
            PThread.pthreads[thread].ref();
          }
        };
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
          assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        };
        var __tzset_js = (timezone, daylight, std_name, dst_name) => {
          var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
          var winter = new Date(currentYear, 0, 1);
          var summer = new Date(currentYear, 6, 1);
          var winterOffset = winter.getTimezoneOffset();
          var summerOffset = summer.getTimezoneOffset();
          var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
          HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
          HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
          var extractZone = (timezoneOffset) => {
            var sign = timezoneOffset >= 0 ? "-" : "+";
            var absOffset = Math.abs(timezoneOffset);
            var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
            var minutes = String(absOffset % 60).padStart(2, "0");
            return `UTC${sign}${hours}${minutes}`;
          };
          var winterName = extractZone(winterOffset);
          var summerName = extractZone(summerOffset);
          assert(winterName);
          assert(summerName);
          assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
          assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
          if (summerOffset < winterOffset) {
            stringToUTF8(winterName, std_name, 17);
            stringToUTF8(summerName, dst_name, 17);
          } else {
            stringToUTF8(winterName, dst_name, 17);
            stringToUTF8(summerName, std_name, 17);
          }
        };
        var readEmAsmArgsArray = [];
        var readEmAsmArgs = (sigPtr, buf) => {
          assert(Array.isArray(readEmAsmArgsArray));
          assert(buf % 16 == 0);
          readEmAsmArgsArray.length = 0;
          var ch;
          while (ch = HEAPU8[sigPtr++]) {
            var chr = String.fromCharCode(ch);
            var validChars = ["d", "f", "i", "p"];
            validChars.push("j");
            assert(validChars.includes(chr), `Invalid character ${ch}("${chr}") in readEmAsmArgs! Use only [${validChars}], and do not specify "v" for void return argument.`);
            var wide = ch != 105;
            wide &= ch != 112;
            buf += wide && buf % 8 ? 4 : 0;
            readEmAsmArgsArray.push(
              // Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
              ch == 112 ? HEAPU32[buf >> 2] : ch == 106 ? HEAP64[buf >> 3] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]
            );
            buf += wide ? 8 : 4;
          }
          return readEmAsmArgsArray;
        };
        var runMainThreadEmAsm = (emAsmAddr, sigPtr, argbuf, sync) => {
          var args = readEmAsmArgs(sigPtr, argbuf);
          if (ENVIRONMENT_IS_PTHREAD) {
            return proxyToMainThread(0, emAsmAddr, sync, ...args);
          }
          assert(ASM_CONSTS.hasOwnProperty(emAsmAddr), `No EM_ASM constant found at address ${emAsmAddr}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
          return ASM_CONSTS[emAsmAddr](...args);
        };
        var _emscripten_asm_const_async_on_main_thread = (emAsmAddr, sigPtr, argbuf) => runMainThreadEmAsm(emAsmAddr, sigPtr, argbuf, 0);
        var runEmAsmFunction = (code, sigPtr, argbuf) => {
          var args = readEmAsmArgs(sigPtr, argbuf);
          assert(ASM_CONSTS.hasOwnProperty(code), `No EM_ASM constant found at address ${code}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
          return ASM_CONSTS[code](...args);
        };
        var _emscripten_asm_const_int = (code, sigPtr, argbuf) => {
          return runEmAsmFunction(code, sigPtr, argbuf);
        };
        var _emscripten_check_blocking_allowed = () => {
          if (ENVIRONMENT_IS_NODE)
            return;
          if (ENVIRONMENT_IS_WORKER)
            return;
          warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
        };
        var _emscripten_date_now = () => Date.now();
        var runtimeKeepalivePush = () => {
          runtimeKeepaliveCounter += 1;
        };
        var _emscripten_exit_with_live_runtime = () => {
          runtimeKeepalivePush();
          throw "unwind";
        };
        var _emscripten_get_now = () => performance.timeOrigin + performance.now();
        var getHeapMax = () => HEAPU8.length;
        var abortOnCannotGrowMemory = (requestedSize) => {
          abort(`Cannot enlarge memory arrays to size ${requestedSize} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${HEAP8.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`);
        };
        var _emscripten_resize_heap = (requestedSize) => {
          var oldSize = HEAPU8.length;
          requestedSize >>>= 0;
          abortOnCannotGrowMemory(requestedSize);
        };
        var ENV = {};
        var getExecutableName = () => thisProgram || "./this.program";
        var getEnvStrings = () => {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = {
              "USER": "web_user",
              "LOGNAME": "web_user",
              "PATH": "/",
              "PWD": "/",
              "HOME": "/home/web_user",
              "LANG": lang,
              "_": getExecutableName()
            };
            for (var x in ENV) {
              if (ENV[x] === void 0)
                delete env[x];
              else
                env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(`${x}=${env[x]}`);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        };
        var stringToAscii = (str, buffer) => {
          for (var i = 0; i < str.length; ++i) {
            assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
            HEAP8[buffer++] = str.charCodeAt(i);
          }
          HEAP8[buffer] = 0;
        };
        var _environ_get = function(__environ, environ_buf) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(6, 0, 1, __environ, environ_buf);
          var bufSize = 0;
          getEnvStrings().forEach((string, i) => {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >> 2] = ptr;
            stringToAscii(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        };
        var _environ_sizes_get = function(penviron_count, penviron_buf_size) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(7, 0, 1, penviron_count, penviron_buf_size);
          var strings = getEnvStrings();
          HEAPU32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach((string) => bufSize += string.length + 1);
          HEAPU32[penviron_buf_size >> 2] = bufSize;
          return 0;
        };
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(8, 0, 1, fd);
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        var doReadv = (stream, iov, iovcnt, offset) => {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (curr < len)
              break;
            if (typeof offset != "undefined") {
              offset += curr;
            }
          }
          return ret;
        };
        function _fd_read(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(9, 0, 1, fd, iov, iovcnt, pnum);
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_seek(fd, offset, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(10, 0, 1, fd, offset, whence, newOffset);
          offset = bigintToI53Checked(offset);
          try {
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.llseek(stream, offset, whence);
            HEAP64[newOffset >> 3] = BigInt(stream.position);
            if (stream.getdents && offset === 0 && whence === 0)
              stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
          ;
        }
        var doWritev = (stream, iov, iovcnt, offset) => {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (curr < len) {
              break;
            }
            if (typeof offset != "undefined") {
              offset += curr;
            }
          }
          return ret;
        };
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD)
            return proxyToMainThread(11, 0, 1, fd, iov, iovcnt, pnum);
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        var _llvm_eh_typeid_for = (type) => type;
        var getCFunc = (ident) => {
          var func = Module["_" + ident];
          assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
          return func;
        };
        var writeArrayToMemory = (array, buffer) => {
          assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
          HEAP8.set(array, buffer);
        };
        var stringToUTF8OnStack = (str) => {
          var size = lengthBytesUTF8(str) + 1;
          var ret = stackAlloc(size);
          stringToUTF8(str, ret, size);
          return ret;
        };
        var ccall = (ident, returnType, argTypes, args, opts) => {
          var toC = {
            "string": (str) => {
              var ret2 = 0;
              if (str !== null && str !== void 0 && str !== 0) {
                ret2 = stringToUTF8OnStack(str);
              }
              return ret2;
            },
            "array": (arr) => {
              var ret2 = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret2);
              return ret2;
            }
          };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          assert(returnType !== "array", 'Return type should not be "array".');
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0)
                  stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func(...cArgs);
          function onDone(ret2) {
            if (stack !== 0)
              stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        };
        var incrementExceptionRefcount = (ptr) => ___cxa_increment_exception_refcount(ptr);
        Module["incrementExceptionRefcount"] = incrementExceptionRefcount;
        var decrementExceptionRefcount = (ptr) => ___cxa_decrement_exception_refcount(ptr);
        Module["decrementExceptionRefcount"] = decrementExceptionRefcount;
        var getExceptionMessageCommon = (ptr) => {
          var sp = stackSave();
          var type_addr_addr = stackAlloc(4);
          var message_addr_addr = stackAlloc(4);
          ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
          var type_addr = HEAPU32[type_addr_addr >> 2];
          var message_addr = HEAPU32[message_addr_addr >> 2];
          var type = UTF8ToString(type_addr);
          _free(type_addr);
          var message;
          if (message_addr) {
            message = UTF8ToString(message_addr);
            _free(message_addr);
          }
          stackRestore(sp);
          return [type, message];
        };
        var getExceptionMessage = (ptr) => getExceptionMessageCommon(ptr);
        Module["getExceptionMessage"] = getExceptionMessage;
        PThread.init();
        ;
        FS.createPreloadedFile = FS_createPreloadedFile;
        FS.staticInit();
        ;
        var proxiedFunctionTable = [
          _proc_exit,
          exitOnMainThread,
          pthreadCreateProxied,
          ___syscall_fcntl64,
          ___syscall_ioctl,
          ___syscall_openat,
          _environ_get,
          _environ_sizes_get,
          _fd_close,
          _fd_read,
          _fd_seek,
          _fd_write
        ];
        function checkIncomingModuleAPI() {
          ignoredModuleProp("fetchSettings");
        }
        var wasmImports;
        function assignWasmImports() {
          wasmImports = {
            /** @export */
            __assert_fail: ___assert_fail,
            /** @export */
            __call_sighandler: ___call_sighandler,
            /** @export */
            __cxa_begin_catch: ___cxa_begin_catch,
            /** @export */
            __cxa_end_catch: ___cxa_end_catch,
            /** @export */
            __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
            /** @export */
            __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
            /** @export */
            __cxa_find_matching_catch_4: ___cxa_find_matching_catch_4,
            /** @export */
            __cxa_find_matching_catch_7: ___cxa_find_matching_catch_7,
            /** @export */
            __cxa_find_matching_catch_8: ___cxa_find_matching_catch_8,
            /** @export */
            __cxa_rethrow: ___cxa_rethrow,
            /** @export */
            __cxa_throw: ___cxa_throw,
            /** @export */
            __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions,
            /** @export */
            __pthread_create_js: ___pthread_create_js,
            /** @export */
            __resumeException: ___resumeException,
            /** @export */
            __syscall_fcntl64: ___syscall_fcntl64,
            /** @export */
            __syscall_ioctl: ___syscall_ioctl,
            /** @export */
            __syscall_openat: ___syscall_openat,
            /** @export */
            _abort_js: __abort_js,
            /** @export */
            _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
            /** @export */
            _emscripten_init_main_thread_js: __emscripten_init_main_thread_js,
            /** @export */
            _emscripten_notify_mailbox_postmessage: __emscripten_notify_mailbox_postmessage,
            /** @export */
            _emscripten_receive_on_main_thread_js: __emscripten_receive_on_main_thread_js,
            /** @export */
            _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
            /** @export */
            _emscripten_thread_cleanup: __emscripten_thread_cleanup,
            /** @export */
            _emscripten_thread_mailbox_await: __emscripten_thread_mailbox_await,
            /** @export */
            _emscripten_thread_set_strongref: __emscripten_thread_set_strongref,
            /** @export */
            _tzset_js: __tzset_js,
            /** @export */
            emscripten_asm_const_async_on_main_thread: _emscripten_asm_const_async_on_main_thread,
            /** @export */
            emscripten_asm_const_int: _emscripten_asm_const_int,
            /** @export */
            emscripten_check_blocking_allowed: _emscripten_check_blocking_allowed,
            /** @export */
            emscripten_date_now: _emscripten_date_now,
            /** @export */
            emscripten_exit_with_live_runtime: _emscripten_exit_with_live_runtime,
            /** @export */
            emscripten_get_now: _emscripten_get_now,
            /** @export */
            emscripten_resize_heap: _emscripten_resize_heap,
            /** @export */
            environ_get: _environ_get,
            /** @export */
            environ_sizes_get: _environ_sizes_get,
            /** @export */
            exit: _exit,
            /** @export */
            fd_close: _fd_close,
            /** @export */
            fd_read: _fd_read,
            /** @export */
            fd_seek: _fd_seek,
            /** @export */
            fd_write: _fd_write,
            /** @export */
            invoke_di,
            /** @export */
            invoke_dii,
            /** @export */
            invoke_diid,
            /** @export */
            invoke_diii,
            /** @export */
            invoke_diiid,
            /** @export */
            invoke_fii,
            /** @export */
            invoke_fiii,
            /** @export */
            invoke_i,
            /** @export */
            invoke_id,
            /** @export */
            invoke_ii,
            /** @export */
            invoke_iid,
            /** @export */
            invoke_iii,
            /** @export */
            invoke_iiid,
            /** @export */
            invoke_iiii,
            /** @export */
            invoke_iiiif,
            /** @export */
            invoke_iiiii,
            /** @export */
            invoke_iiiiid,
            /** @export */
            invoke_iiiiii,
            /** @export */
            invoke_iiiiiii,
            /** @export */
            invoke_iiiiiiii,
            /** @export */
            invoke_iiiiiiiii,
            /** @export */
            invoke_iiiiiiiiii,
            /** @export */
            invoke_iiiiiiiiiii,
            /** @export */
            invoke_iiiiiiiiiiii,
            /** @export */
            invoke_iiiiiiiiiiiii,
            /** @export */
            invoke_iiiiiiiiiiiiii,
            /** @export */
            invoke_iiiiij,
            /** @export */
            invoke_iiij,
            /** @export */
            invoke_iij,
            /** @export */
            invoke_iiji,
            /** @export */
            invoke_iijii,
            /** @export */
            invoke_j,
            /** @export */
            invoke_ji,
            /** @export */
            invoke_jii,
            /** @export */
            invoke_jiiii,
            /** @export */
            invoke_jiij,
            /** @export */
            invoke_v,
            /** @export */
            invoke_vi,
            /** @export */
            invoke_vid,
            /** @export */
            invoke_vidi,
            /** @export */
            invoke_vifi,
            /** @export */
            invoke_vii,
            /** @export */
            invoke_viid,
            /** @export */
            invoke_viidi,
            /** @export */
            invoke_viii,
            /** @export */
            invoke_viiid,
            /** @export */
            invoke_viiii,
            /** @export */
            invoke_viiiid,
            /** @export */
            invoke_viiiif,
            /** @export */
            invoke_viiiii,
            /** @export */
            invoke_viiiiii,
            /** @export */
            invoke_viiiiiii,
            /** @export */
            invoke_viiiiiiii,
            /** @export */
            invoke_viiiiiiiii,
            /** @export */
            invoke_viiiiiiiiii,
            /** @export */
            invoke_viiiiiiiiiii,
            /** @export */
            invoke_viiiiiiiiiiii,
            /** @export */
            invoke_viiiiiiiiiiiii,
            /** @export */
            invoke_viiiiiiiiiiiiiii,
            /** @export */
            invoke_viiiiiji,
            /** @export */
            invoke_viiiiijj,
            /** @export */
            invoke_viij,
            /** @export */
            invoke_viiji,
            /** @export */
            invoke_viijji,
            /** @export */
            invoke_vij,
            /** @export */
            invoke_viji,
            /** @export */
            invoke_vijj,
            /** @export */
            llvm_eh_typeid_for: _llvm_eh_typeid_for,
            /** @export */
            memory: wasmMemory,
            /** @export */
            proc_exit: _proc_exit
          };
        }
        var wasmExports = createWasm();
        var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors", 0);
        var _Z3_get_error_msg = Module["_Z3_get_error_msg"] = createExportWrapper("Z3_get_error_msg", 2);
        var ___cxa_free_exception = createExportWrapper("__cxa_free_exception", 1);
        var _set_throwy_error_handler = Module["_set_throwy_error_handler"] = createExportWrapper("set_throwy_error_handler", 1);
        var _set_noop_error_handler = Module["_set_noop_error_handler"] = createExportWrapper("set_noop_error_handler", 1);
        var _async_Z3_eval_smtlib2_string = Module["_async_Z3_eval_smtlib2_string"] = createExportWrapper("async_Z3_eval_smtlib2_string", 2);
        var _async_Z3_simplify = Module["_async_Z3_simplify"] = createExportWrapper("async_Z3_simplify", 2);
        var _async_Z3_simplify_ex = Module["_async_Z3_simplify_ex"] = createExportWrapper("async_Z3_simplify_ex", 3);
        var _async_Z3_solver_check = Module["_async_Z3_solver_check"] = createExportWrapper("async_Z3_solver_check", 2);
        var _async_Z3_solver_check_assumptions = Module["_async_Z3_solver_check_assumptions"] = createExportWrapper("async_Z3_solver_check_assumptions", 4);
        var _async_Z3_solver_cube = Module["_async_Z3_solver_cube"] = createExportWrapper("async_Z3_solver_cube", 4);
        var _async_Z3_solver_get_consequences = Module["_async_Z3_solver_get_consequences"] = createExportWrapper("async_Z3_solver_get_consequences", 5);
        var _async_Z3_tactic_apply = Module["_async_Z3_tactic_apply"] = createExportWrapper("async_Z3_tactic_apply", 3);
        var _async_Z3_tactic_apply_ex = Module["_async_Z3_tactic_apply_ex"] = createExportWrapper("async_Z3_tactic_apply_ex", 4);
        var _async_Z3_optimize_check = Module["_async_Z3_optimize_check"] = createExportWrapper("async_Z3_optimize_check", 4);
        var _async_Z3_algebraic_roots = Module["_async_Z3_algebraic_roots"] = createExportWrapper("async_Z3_algebraic_roots", 4);
        var _async_Z3_algebraic_eval = Module["_async_Z3_algebraic_eval"] = createExportWrapper("async_Z3_algebraic_eval", 4);
        var _async_Z3_fixedpoint_query = Module["_async_Z3_fixedpoint_query"] = createExportWrapper("async_Z3_fixedpoint_query", 3);
        var _async_Z3_fixedpoint_query_relations = Module["_async_Z3_fixedpoint_query_relations"] = createExportWrapper("async_Z3_fixedpoint_query_relations", 4);
        var _async_Z3_fixedpoint_query_from_lvl = Module["_async_Z3_fixedpoint_query_from_lvl"] = createExportWrapper("async_Z3_fixedpoint_query_from_lvl", 4);
        var _async_Z3_polynomial_subresultants = Module["_async_Z3_polynomial_subresultants"] = createExportWrapper("async_Z3_polynomial_subresultants", 4);
        var _Z3_eval_smtlib2_string = Module["_Z3_eval_smtlib2_string"] = createExportWrapper("Z3_eval_smtlib2_string", 2);
        var _Z3_simplify = Module["_Z3_simplify"] = createExportWrapper("Z3_simplify", 2);
        var _Z3_simplify_ex = Module["_Z3_simplify_ex"] = createExportWrapper("Z3_simplify_ex", 3);
        var _Z3_solver_check = Module["_Z3_solver_check"] = createExportWrapper("Z3_solver_check", 2);
        var _Z3_solver_check_assumptions = Module["_Z3_solver_check_assumptions"] = createExportWrapper("Z3_solver_check_assumptions", 4);
        var _Z3_solver_cube = Module["_Z3_solver_cube"] = createExportWrapper("Z3_solver_cube", 4);
        var _Z3_solver_get_consequences = Module["_Z3_solver_get_consequences"] = createExportWrapper("Z3_solver_get_consequences", 5);
        var _Z3_tactic_apply = Module["_Z3_tactic_apply"] = createExportWrapper("Z3_tactic_apply", 3);
        var _Z3_tactic_apply_ex = Module["_Z3_tactic_apply_ex"] = createExportWrapper("Z3_tactic_apply_ex", 4);
        var _Z3_optimize_check = Module["_Z3_optimize_check"] = createExportWrapper("Z3_optimize_check", 4);
        var _Z3_algebraic_roots = Module["_Z3_algebraic_roots"] = createExportWrapper("Z3_algebraic_roots", 4);
        var _Z3_algebraic_eval = Module["_Z3_algebraic_eval"] = createExportWrapper("Z3_algebraic_eval", 4);
        var _Z3_fixedpoint_query = Module["_Z3_fixedpoint_query"] = createExportWrapper("Z3_fixedpoint_query", 3);
        var _Z3_fixedpoint_query_relations = Module["_Z3_fixedpoint_query_relations"] = createExportWrapper("Z3_fixedpoint_query_relations", 4);
        var _Z3_fixedpoint_query_from_lvl = Module["_Z3_fixedpoint_query_from_lvl"] = createExportWrapper("Z3_fixedpoint_query_from_lvl", 4);
        var _Z3_polynomial_subresultants = Module["_Z3_polynomial_subresultants"] = createExportWrapper("Z3_polynomial_subresultants", 4);
        var _Z3_mk_int_symbol = Module["_Z3_mk_int_symbol"] = createExportWrapper("Z3_mk_int_symbol", 2);
        var _Z3_mk_string_symbol = Module["_Z3_mk_string_symbol"] = createExportWrapper("Z3_mk_string_symbol", 2);
        var _Z3_is_eq_sort = Module["_Z3_is_eq_sort"] = createExportWrapper("Z3_is_eq_sort", 3);
        var _Z3_mk_uninterpreted_sort = Module["_Z3_mk_uninterpreted_sort"] = createExportWrapper("Z3_mk_uninterpreted_sort", 2);
        var _Z3_mk_type_variable = Module["_Z3_mk_type_variable"] = createExportWrapper("Z3_mk_type_variable", 2);
        var _Z3_is_eq_ast = Module["_Z3_is_eq_ast"] = createExportWrapper("Z3_is_eq_ast", 3);
        var _Z3_is_eq_func_decl = Module["_Z3_is_eq_func_decl"] = createExportWrapper("Z3_is_eq_func_decl", 3);
        var _Z3_mk_func_decl = Module["_Z3_mk_func_decl"] = createExportWrapper("Z3_mk_func_decl", 5);
        var _Z3_mk_rec_func_decl = Module["_Z3_mk_rec_func_decl"] = createExportWrapper("Z3_mk_rec_func_decl", 5);
        var _Z3_add_rec_def = Module["_Z3_add_rec_def"] = createExportWrapper("Z3_add_rec_def", 5);
        var _Z3_mk_app = Module["_Z3_mk_app"] = createExportWrapper("Z3_mk_app", 4);
        var _Z3_mk_const = Module["_Z3_mk_const"] = createExportWrapper("Z3_mk_const", 3);
        var _Z3_mk_fresh_func_decl = Module["_Z3_mk_fresh_func_decl"] = createExportWrapper("Z3_mk_fresh_func_decl", 5);
        var _Z3_mk_fresh_const = Module["_Z3_mk_fresh_const"] = createExportWrapper("Z3_mk_fresh_const", 3);
        var _Z3_mk_true = Module["_Z3_mk_true"] = createExportWrapper("Z3_mk_true", 1);
        var _Z3_mk_false = Module["_Z3_mk_false"] = createExportWrapper("Z3_mk_false", 1);
        var _Z3_mk_not = Module["_Z3_mk_not"] = createExportWrapper("Z3_mk_not", 2);
        var _Z3_mk_eq = Module["_Z3_mk_eq"] = createExportWrapper("Z3_mk_eq", 3);
        var _Z3_mk_distinct = Module["_Z3_mk_distinct"] = createExportWrapper("Z3_mk_distinct", 3);
        var _Z3_mk_iff = Module["_Z3_mk_iff"] = createExportWrapper("Z3_mk_iff", 3);
        var _Z3_mk_implies = Module["_Z3_mk_implies"] = createExportWrapper("Z3_mk_implies", 3);
        var _Z3_mk_xor = Module["_Z3_mk_xor"] = createExportWrapper("Z3_mk_xor", 3);
        var _Z3_mk_and = Module["_Z3_mk_and"] = createExportWrapper("Z3_mk_and", 3);
        var _Z3_mk_or = Module["_Z3_mk_or"] = createExportWrapper("Z3_mk_or", 3);
        var _Z3_mk_ite = Module["_Z3_mk_ite"] = createExportWrapper("Z3_mk_ite", 4);
        var _Z3_mk_bool_sort = Module["_Z3_mk_bool_sort"] = createExportWrapper("Z3_mk_bool_sort", 1);
        var _Z3_app_to_ast = Module["_Z3_app_to_ast"] = createExportWrapper("Z3_app_to_ast", 2);
        var _Z3_sort_to_ast = Module["_Z3_sort_to_ast"] = createExportWrapper("Z3_sort_to_ast", 2);
        var _Z3_func_decl_to_ast = Module["_Z3_func_decl_to_ast"] = createExportWrapper("Z3_func_decl_to_ast", 2);
        var _Z3_get_ast_id = Module["_Z3_get_ast_id"] = createExportWrapper("Z3_get_ast_id", 2);
        var _Z3_get_func_decl_id = Module["_Z3_get_func_decl_id"] = createExportWrapper("Z3_get_func_decl_id", 2);
        var _Z3_get_sort_id = Module["_Z3_get_sort_id"] = createExportWrapper("Z3_get_sort_id", 2);
        var _Z3_is_well_sorted = Module["_Z3_is_well_sorted"] = createExportWrapper("Z3_is_well_sorted", 2);
        var _Z3_get_symbol_kind = Module["_Z3_get_symbol_kind"] = createExportWrapper("Z3_get_symbol_kind", 2);
        var _Z3_get_symbol_int = Module["_Z3_get_symbol_int"] = createExportWrapper("Z3_get_symbol_int", 2);
        var _Z3_get_symbol_string = Module["_Z3_get_symbol_string"] = createExportWrapper("Z3_get_symbol_string", 2);
        var _Z3_get_ast_kind = Module["_Z3_get_ast_kind"] = createExportWrapper("Z3_get_ast_kind", 2);
        var _Z3_get_ast_hash = Module["_Z3_get_ast_hash"] = createExportWrapper("Z3_get_ast_hash", 2);
        var _Z3_is_app = Module["_Z3_is_app"] = createExportWrapper("Z3_is_app", 2);
        var _Z3_to_app = Module["_Z3_to_app"] = createExportWrapper("Z3_to_app", 2);
        var _Z3_is_ground = Module["_Z3_is_ground"] = createExportWrapper("Z3_is_ground", 2);
        var _Z3_get_depth = Module["_Z3_get_depth"] = createExportWrapper("Z3_get_depth", 2);
        var _Z3_to_func_decl = Module["_Z3_to_func_decl"] = createExportWrapper("Z3_to_func_decl", 2);
        var _Z3_get_app_decl = Module["_Z3_get_app_decl"] = createExportWrapper("Z3_get_app_decl", 2);
        var _Z3_get_app_num_args = Module["_Z3_get_app_num_args"] = createExportWrapper("Z3_get_app_num_args", 2);
        var _Z3_get_app_arg = Module["_Z3_get_app_arg"] = createExportWrapper("Z3_get_app_arg", 3);
        var _Z3_get_decl_name = Module["_Z3_get_decl_name"] = createExportWrapper("Z3_get_decl_name", 2);
        var _Z3_get_decl_num_parameters = Module["_Z3_get_decl_num_parameters"] = createExportWrapper("Z3_get_decl_num_parameters", 2);
        var _Z3_get_decl_parameter_kind = Module["_Z3_get_decl_parameter_kind"] = createExportWrapper("Z3_get_decl_parameter_kind", 3);
        var _Z3_get_decl_int_parameter = Module["_Z3_get_decl_int_parameter"] = createExportWrapper("Z3_get_decl_int_parameter", 3);
        var _Z3_get_decl_double_parameter = Module["_Z3_get_decl_double_parameter"] = createExportWrapper("Z3_get_decl_double_parameter", 3);
        var _Z3_get_decl_symbol_parameter = Module["_Z3_get_decl_symbol_parameter"] = createExportWrapper("Z3_get_decl_symbol_parameter", 3);
        var _Z3_get_decl_sort_parameter = Module["_Z3_get_decl_sort_parameter"] = createExportWrapper("Z3_get_decl_sort_parameter", 3);
        var _Z3_get_decl_ast_parameter = Module["_Z3_get_decl_ast_parameter"] = createExportWrapper("Z3_get_decl_ast_parameter", 3);
        var _Z3_get_decl_func_decl_parameter = Module["_Z3_get_decl_func_decl_parameter"] = createExportWrapper("Z3_get_decl_func_decl_parameter", 3);
        var _Z3_get_decl_rational_parameter = Module["_Z3_get_decl_rational_parameter"] = createExportWrapper("Z3_get_decl_rational_parameter", 3);
        var _Z3_get_sort_name = Module["_Z3_get_sort_name"] = createExportWrapper("Z3_get_sort_name", 2);
        var _Z3_get_sort = Module["_Z3_get_sort"] = createExportWrapper("Z3_get_sort", 2);
        var _Z3_get_arity = Module["_Z3_get_arity"] = createExportWrapper("Z3_get_arity", 2);
        var _Z3_get_domain_size = Module["_Z3_get_domain_size"] = createExportWrapper("Z3_get_domain_size", 2);
        var _Z3_get_domain = Module["_Z3_get_domain"] = createExportWrapper("Z3_get_domain", 3);
        var _Z3_get_range = Module["_Z3_get_range"] = createExportWrapper("Z3_get_range", 2);
        var _Z3_get_sort_kind = Module["_Z3_get_sort_kind"] = createExportWrapper("Z3_get_sort_kind", 2);
        var _Z3_get_bool_value = Module["_Z3_get_bool_value"] = createExportWrapper("Z3_get_bool_value", 2);
        var _Z3_simplify_get_help = Module["_Z3_simplify_get_help"] = createExportWrapper("Z3_simplify_get_help", 1);
        var _Z3_simplify_get_param_descrs = Module["_Z3_simplify_get_param_descrs"] = createExportWrapper("Z3_simplify_get_param_descrs", 1);
        var _Z3_update_term = Module["_Z3_update_term"] = createExportWrapper("Z3_update_term", 4);
        var _Z3_substitute = Module["_Z3_substitute"] = createExportWrapper("Z3_substitute", 5);
        var _Z3_substitute_funs = Module["_Z3_substitute_funs"] = createExportWrapper("Z3_substitute_funs", 5);
        var _Z3_substitute_vars = Module["_Z3_substitute_vars"] = createExportWrapper("Z3_substitute_vars", 4);
        var _Z3_ast_to_string = Module["_Z3_ast_to_string"] = createExportWrapper("Z3_ast_to_string", 2);
        var _Z3_sort_to_string = Module["_Z3_sort_to_string"] = createExportWrapper("Z3_sort_to_string", 2);
        var _Z3_func_decl_to_string = Module["_Z3_func_decl_to_string"] = createExportWrapper("Z3_func_decl_to_string", 2);
        var _Z3_benchmark_to_smtlib_string = Module["_Z3_benchmark_to_smtlib_string"] = createExportWrapper("Z3_benchmark_to_smtlib_string", 8);
        var _Z3_get_decl_kind = Module["_Z3_get_decl_kind"] = createExportWrapper("Z3_get_decl_kind", 2);
        var _Z3_get_index_value = Module["_Z3_get_index_value"] = createExportWrapper("Z3_get_index_value", 2);
        var _Z3_translate = Module["_Z3_translate"] = createExportWrapper("Z3_translate", 3);
        var _Z3_mk_context = Module["_Z3_mk_context"] = createExportWrapper("Z3_mk_context", 1);
        var _Z3_mk_context_rc = Module["_Z3_mk_context_rc"] = createExportWrapper("Z3_mk_context_rc", 1);
        var _Z3_del_context = Module["_Z3_del_context"] = createExportWrapper("Z3_del_context", 1);
        var _Z3_interrupt = Module["_Z3_interrupt"] = createExportWrapper("Z3_interrupt", 1);
        var _Z3_enable_concurrent_dec_ref = Module["_Z3_enable_concurrent_dec_ref"] = createExportWrapper("Z3_enable_concurrent_dec_ref", 1);
        var _Z3_toggle_warning_messages = Module["_Z3_toggle_warning_messages"] = createExportWrapper("Z3_toggle_warning_messages", 1);
        var _Z3_inc_ref = Module["_Z3_inc_ref"] = createExportWrapper("Z3_inc_ref", 2);
        var _Z3_dec_ref = Module["_Z3_dec_ref"] = createExportWrapper("Z3_dec_ref", 2);
        var _Z3_get_version = Module["_Z3_get_version"] = createExportWrapper("Z3_get_version", 4);
        var _Z3_get_full_version = Module["_Z3_get_full_version"] = createExportWrapper("Z3_get_full_version", 0);
        var _Z3_enable_trace = Module["_Z3_enable_trace"] = createExportWrapper("Z3_enable_trace", 1);
        var _Z3_disable_trace = Module["_Z3_disable_trace"] = createExportWrapper("Z3_disable_trace", 1);
        var _Z3_reset_memory = Module["_Z3_reset_memory"] = createExportWrapper("Z3_reset_memory", 0);
        var _Z3_finalize_memory = Module["_Z3_finalize_memory"] = createExportWrapper("Z3_finalize_memory", 0);
        var _Z3_get_error_code = Module["_Z3_get_error_code"] = createExportWrapper("Z3_get_error_code", 1);
        var _Z3_set_error = Module["_Z3_set_error"] = createExportWrapper("Z3_set_error", 2);
        var _Z3_set_ast_print_mode = Module["_Z3_set_ast_print_mode"] = createExportWrapper("Z3_set_ast_print_mode", 2);
        var _Z3_mk_ast_vector = Module["_Z3_mk_ast_vector"] = createExportWrapper("Z3_mk_ast_vector", 1);
        var _Z3_ast_vector_inc_ref = Module["_Z3_ast_vector_inc_ref"] = createExportWrapper("Z3_ast_vector_inc_ref", 2);
        var _Z3_ast_vector_dec_ref = Module["_Z3_ast_vector_dec_ref"] = createExportWrapper("Z3_ast_vector_dec_ref", 2);
        var _Z3_ast_vector_size = Module["_Z3_ast_vector_size"] = createExportWrapper("Z3_ast_vector_size", 2);
        var _Z3_ast_vector_get = Module["_Z3_ast_vector_get"] = createExportWrapper("Z3_ast_vector_get", 3);
        var _Z3_ast_vector_set = Module["_Z3_ast_vector_set"] = createExportWrapper("Z3_ast_vector_set", 4);
        var _Z3_ast_vector_resize = Module["_Z3_ast_vector_resize"] = createExportWrapper("Z3_ast_vector_resize", 3);
        var _Z3_ast_vector_push = Module["_Z3_ast_vector_push"] = createExportWrapper("Z3_ast_vector_push", 3);
        var _Z3_ast_vector_translate = Module["_Z3_ast_vector_translate"] = createExportWrapper("Z3_ast_vector_translate", 3);
        var _Z3_ast_vector_to_string = Module["_Z3_ast_vector_to_string"] = createExportWrapper("Z3_ast_vector_to_string", 2);
        var _Z3_mk_linear_order = Module["_Z3_mk_linear_order"] = createExportWrapper("Z3_mk_linear_order", 3);
        var _Z3_mk_partial_order = Module["_Z3_mk_partial_order"] = createExportWrapper("Z3_mk_partial_order", 3);
        var _Z3_mk_piecewise_linear_order = Module["_Z3_mk_piecewise_linear_order"] = createExportWrapper("Z3_mk_piecewise_linear_order", 3);
        var _Z3_mk_tree_order = Module["_Z3_mk_tree_order"] = createExportWrapper("Z3_mk_tree_order", 3);
        var _Z3_mk_transitive_closure = Module["_Z3_mk_transitive_closure"] = createExportWrapper("Z3_mk_transitive_closure", 2);
        var _Z3_mk_simple_solver = Module["_Z3_mk_simple_solver"] = createExportWrapper("Z3_mk_simple_solver", 1);
        var _Z3_mk_solver = Module["_Z3_mk_solver"] = createExportWrapper("Z3_mk_solver", 1);
        var _Z3_mk_solver_for_logic = Module["_Z3_mk_solver_for_logic"] = createExportWrapper("Z3_mk_solver_for_logic", 2);
        var _Z3_mk_solver_from_tactic = Module["_Z3_mk_solver_from_tactic"] = createExportWrapper("Z3_mk_solver_from_tactic", 2);
        var _Z3_solver_add_simplifier = Module["_Z3_solver_add_simplifier"] = createExportWrapper("Z3_solver_add_simplifier", 3);
        var _Z3_solver_translate = Module["_Z3_solver_translate"] = createExportWrapper("Z3_solver_translate", 3);
        var _Z3_solver_import_model_converter = Module["_Z3_solver_import_model_converter"] = createExportWrapper("Z3_solver_import_model_converter", 3);
        var _Z3_solver_from_string = Module["_Z3_solver_from_string"] = createExportWrapper("Z3_solver_from_string", 3);
        var _Z3_solver_from_file = Module["_Z3_solver_from_file"] = createExportWrapper("Z3_solver_from_file", 3);
        var _Z3_solver_get_help = Module["_Z3_solver_get_help"] = createExportWrapper("Z3_solver_get_help", 2);
        var _Z3_solver_get_param_descrs = Module["_Z3_solver_get_param_descrs"] = createExportWrapper("Z3_solver_get_param_descrs", 2);
        var _Z3_solver_set_params = Module["_Z3_solver_set_params"] = createExportWrapper("Z3_solver_set_params", 3);
        var _Z3_solver_inc_ref = Module["_Z3_solver_inc_ref"] = createExportWrapper("Z3_solver_inc_ref", 2);
        var _Z3_solver_dec_ref = Module["_Z3_solver_dec_ref"] = createExportWrapper("Z3_solver_dec_ref", 2);
        var _Z3_solver_push = Module["_Z3_solver_push"] = createExportWrapper("Z3_solver_push", 2);
        var _Z3_solver_interrupt = Module["_Z3_solver_interrupt"] = createExportWrapper("Z3_solver_interrupt", 2);
        var _Z3_solver_pop = Module["_Z3_solver_pop"] = createExportWrapper("Z3_solver_pop", 3);
        var _Z3_solver_reset = Module["_Z3_solver_reset"] = createExportWrapper("Z3_solver_reset", 2);
        var _Z3_solver_get_num_scopes = Module["_Z3_solver_get_num_scopes"] = createExportWrapper("Z3_solver_get_num_scopes", 2);
        var _Z3_solver_assert = Module["_Z3_solver_assert"] = createExportWrapper("Z3_solver_assert", 3);
        var _Z3_solver_assert_and_track = Module["_Z3_solver_assert_and_track"] = createExportWrapper("Z3_solver_assert_and_track", 4);
        var _Z3_solver_get_assertions = Module["_Z3_solver_get_assertions"] = createExportWrapper("Z3_solver_get_assertions", 2);
        var _Z3_solver_get_units = Module["_Z3_solver_get_units"] = createExportWrapper("Z3_solver_get_units", 2);
        var _Z3_solver_get_non_units = Module["_Z3_solver_get_non_units"] = createExportWrapper("Z3_solver_get_non_units", 2);
        var _Z3_solver_get_levels = Module["_Z3_solver_get_levels"] = createExportWrapper("Z3_solver_get_levels", 5);
        var _Z3_solver_get_trail = Module["_Z3_solver_get_trail"] = createExportWrapper("Z3_solver_get_trail", 2);
        var _pthread_self = () => (_pthread_self = wasmExports["pthread_self"])();
        var _Z3_solver_get_model = Module["_Z3_solver_get_model"] = createExportWrapper("Z3_solver_get_model", 2);
        var _Z3_solver_get_proof = Module["_Z3_solver_get_proof"] = createExportWrapper("Z3_solver_get_proof", 2);
        var _Z3_solver_get_unsat_core = Module["_Z3_solver_get_unsat_core"] = createExportWrapper("Z3_solver_get_unsat_core", 2);
        var _Z3_solver_get_reason_unknown = Module["_Z3_solver_get_reason_unknown"] = createExportWrapper("Z3_solver_get_reason_unknown", 2);
        var _Z3_solver_get_statistics = Module["_Z3_solver_get_statistics"] = createExportWrapper("Z3_solver_get_statistics", 2);
        var _Z3_solver_to_string = Module["_Z3_solver_to_string"] = createExportWrapper("Z3_solver_to_string", 2);
        var _Z3_solver_to_dimacs_string = Module["_Z3_solver_to_dimacs_string"] = createExportWrapper("Z3_solver_to_dimacs_string", 3);
        var _Z3_get_implied_equalities = Module["_Z3_get_implied_equalities"] = createExportWrapper("Z3_get_implied_equalities", 5);
        var _Z3_solver_congruence_root = Module["_Z3_solver_congruence_root"] = createExportWrapper("Z3_solver_congruence_root", 3);
        var _Z3_solver_congruence_next = Module["_Z3_solver_congruence_next"] = createExportWrapper("Z3_solver_congruence_next", 3);
        var _Z3_solver_congruence_explain = Module["_Z3_solver_congruence_explain"] = createExportWrapper("Z3_solver_congruence_explain", 4);
        var _Z3_solver_solve_for = Module["_Z3_solver_solve_for"] = createExportWrapper("Z3_solver_solve_for", 5);
        var _Z3_solver_register_on_clause = Module["_Z3_solver_register_on_clause"] = createExportWrapper("Z3_solver_register_on_clause", 4);
        var _Z3_solver_propagate_init = Module["_Z3_solver_propagate_init"] = createExportWrapper("Z3_solver_propagate_init", 6);
        var _Z3_solver_propagate_fixed = Module["_Z3_solver_propagate_fixed"] = createExportWrapper("Z3_solver_propagate_fixed", 3);
        var _Z3_solver_propagate_final = Module["_Z3_solver_propagate_final"] = createExportWrapper("Z3_solver_propagate_final", 3);
        var _Z3_solver_propagate_eq = Module["_Z3_solver_propagate_eq"] = createExportWrapper("Z3_solver_propagate_eq", 3);
        var _Z3_solver_propagate_diseq = Module["_Z3_solver_propagate_diseq"] = createExportWrapper("Z3_solver_propagate_diseq", 3);
        var _Z3_solver_propagate_register = Module["_Z3_solver_propagate_register"] = createExportWrapper("Z3_solver_propagate_register", 3);
        var _Z3_solver_propagate_register_cb = Module["_Z3_solver_propagate_register_cb"] = createExportWrapper("Z3_solver_propagate_register_cb", 3);
        var _Z3_solver_propagate_consequence = Module["_Z3_solver_propagate_consequence"] = createExportWrapper("Z3_solver_propagate_consequence", 8);
        var _Z3_solver_propagate_created = Module["_Z3_solver_propagate_created"] = createExportWrapper("Z3_solver_propagate_created", 3);
        var _Z3_solver_propagate_decide = Module["_Z3_solver_propagate_decide"] = createExportWrapper("Z3_solver_propagate_decide", 3);
        var _Z3_solver_next_split = Module["_Z3_solver_next_split"] = createExportWrapper("Z3_solver_next_split", 5);
        var _Z3_solver_propagate_declare = Module["_Z3_solver_propagate_declare"] = createExportWrapper("Z3_solver_propagate_declare", 5);
        var _Z3_solver_set_initial_value = Module["_Z3_solver_set_initial_value"] = createExportWrapper("Z3_solver_set_initial_value", 4);
        var _Z3_mk_tactic = Module["_Z3_mk_tactic"] = createExportWrapper("Z3_mk_tactic", 2);
        var _Z3_tactic_inc_ref = Module["_Z3_tactic_inc_ref"] = createExportWrapper("Z3_tactic_inc_ref", 2);
        var _Z3_tactic_dec_ref = Module["_Z3_tactic_dec_ref"] = createExportWrapper("Z3_tactic_dec_ref", 2);
        var _Z3_mk_probe = Module["_Z3_mk_probe"] = createExportWrapper("Z3_mk_probe", 2);
        var _Z3_probe_inc_ref = Module["_Z3_probe_inc_ref"] = createExportWrapper("Z3_probe_inc_ref", 2);
        var _Z3_probe_dec_ref = Module["_Z3_probe_dec_ref"] = createExportWrapper("Z3_probe_dec_ref", 2);
        var _Z3_tactic_and_then = Module["_Z3_tactic_and_then"] = createExportWrapper("Z3_tactic_and_then", 3);
        var _Z3_tactic_or_else = Module["_Z3_tactic_or_else"] = createExportWrapper("Z3_tactic_or_else", 3);
        var _Z3_tactic_par_or = Module["_Z3_tactic_par_or"] = createExportWrapper("Z3_tactic_par_or", 3);
        var _Z3_tactic_par_and_then = Module["_Z3_tactic_par_and_then"] = createExportWrapper("Z3_tactic_par_and_then", 3);
        var _Z3_tactic_try_for = Module["_Z3_tactic_try_for"] = createExportWrapper("Z3_tactic_try_for", 3);
        var _Z3_tactic_when = Module["_Z3_tactic_when"] = createExportWrapper("Z3_tactic_when", 3);
        var _Z3_tactic_cond = Module["_Z3_tactic_cond"] = createExportWrapper("Z3_tactic_cond", 4);
        var _Z3_tactic_repeat = Module["_Z3_tactic_repeat"] = createExportWrapper("Z3_tactic_repeat", 3);
        var _Z3_tactic_skip = Module["_Z3_tactic_skip"] = createExportWrapper("Z3_tactic_skip", 1);
        var _Z3_tactic_fail = Module["_Z3_tactic_fail"] = createExportWrapper("Z3_tactic_fail", 1);
        var _Z3_tactic_fail_if = Module["_Z3_tactic_fail_if"] = createExportWrapper("Z3_tactic_fail_if", 2);
        var _Z3_tactic_fail_if_not_decided = Module["_Z3_tactic_fail_if_not_decided"] = createExportWrapper("Z3_tactic_fail_if_not_decided", 1);
        var _Z3_tactic_using_params = Module["_Z3_tactic_using_params"] = createExportWrapper("Z3_tactic_using_params", 3);
        var _Z3_probe_const = Module["_Z3_probe_const"] = createExportWrapper("Z3_probe_const", 2);
        var _Z3_probe_lt = Module["_Z3_probe_lt"] = createExportWrapper("Z3_probe_lt", 3);
        var _Z3_probe_gt = Module["_Z3_probe_gt"] = createExportWrapper("Z3_probe_gt", 3);
        var _Z3_probe_le = Module["_Z3_probe_le"] = createExportWrapper("Z3_probe_le", 3);
        var _Z3_probe_ge = Module["_Z3_probe_ge"] = createExportWrapper("Z3_probe_ge", 3);
        var _Z3_probe_eq = Module["_Z3_probe_eq"] = createExportWrapper("Z3_probe_eq", 3);
        var _Z3_probe_and = Module["_Z3_probe_and"] = createExportWrapper("Z3_probe_and", 3);
        var _Z3_probe_or = Module["_Z3_probe_or"] = createExportWrapper("Z3_probe_or", 3);
        var _Z3_probe_not = Module["_Z3_probe_not"] = createExportWrapper("Z3_probe_not", 2);
        var _Z3_get_num_tactics = Module["_Z3_get_num_tactics"] = createExportWrapper("Z3_get_num_tactics", 1);
        var _Z3_get_tactic_name = Module["_Z3_get_tactic_name"] = createExportWrapper("Z3_get_tactic_name", 2);
        var _Z3_get_num_probes = Module["_Z3_get_num_probes"] = createExportWrapper("Z3_get_num_probes", 1);
        var _Z3_get_probe_name = Module["_Z3_get_probe_name"] = createExportWrapper("Z3_get_probe_name", 2);
        var _Z3_tactic_get_help = Module["_Z3_tactic_get_help"] = createExportWrapper("Z3_tactic_get_help", 2);
        var _Z3_tactic_get_param_descrs = Module["_Z3_tactic_get_param_descrs"] = createExportWrapper("Z3_tactic_get_param_descrs", 2);
        var _Z3_tactic_get_descr = Module["_Z3_tactic_get_descr"] = createExportWrapper("Z3_tactic_get_descr", 2);
        var _Z3_probe_get_descr = Module["_Z3_probe_get_descr"] = createExportWrapper("Z3_probe_get_descr", 2);
        var _Z3_probe_apply = Module["_Z3_probe_apply"] = createExportWrapper("Z3_probe_apply", 3);
        var _Z3_apply_result_inc_ref = Module["_Z3_apply_result_inc_ref"] = createExportWrapper("Z3_apply_result_inc_ref", 2);
        var _Z3_apply_result_dec_ref = Module["_Z3_apply_result_dec_ref"] = createExportWrapper("Z3_apply_result_dec_ref", 2);
        var _Z3_apply_result_to_string = Module["_Z3_apply_result_to_string"] = createExportWrapper("Z3_apply_result_to_string", 2);
        var _Z3_apply_result_get_num_subgoals = Module["_Z3_apply_result_get_num_subgoals"] = createExportWrapper("Z3_apply_result_get_num_subgoals", 2);
        var _Z3_apply_result_get_subgoal = Module["_Z3_apply_result_get_subgoal"] = createExportWrapper("Z3_apply_result_get_subgoal", 3);
        var _Z3_mk_simplifier = Module["_Z3_mk_simplifier"] = createExportWrapper("Z3_mk_simplifier", 2);
        var _Z3_simplifier_inc_ref = Module["_Z3_simplifier_inc_ref"] = createExportWrapper("Z3_simplifier_inc_ref", 2);
        var _Z3_simplifier_dec_ref = Module["_Z3_simplifier_dec_ref"] = createExportWrapper("Z3_simplifier_dec_ref", 2);
        var _Z3_get_num_simplifiers = Module["_Z3_get_num_simplifiers"] = createExportWrapper("Z3_get_num_simplifiers", 1);
        var _Z3_get_simplifier_name = Module["_Z3_get_simplifier_name"] = createExportWrapper("Z3_get_simplifier_name", 2);
        var _Z3_simplifier_and_then = Module["_Z3_simplifier_and_then"] = createExportWrapper("Z3_simplifier_and_then", 3);
        var _Z3_simplifier_using_params = Module["_Z3_simplifier_using_params"] = createExportWrapper("Z3_simplifier_using_params", 3);
        var _Z3_simplifier_get_help = Module["_Z3_simplifier_get_help"] = createExportWrapper("Z3_simplifier_get_help", 2);
        var _Z3_simplifier_get_param_descrs = Module["_Z3_simplifier_get_param_descrs"] = createExportWrapper("Z3_simplifier_get_param_descrs", 2);
        var _Z3_simplifier_get_descr = Module["_Z3_simplifier_get_descr"] = createExportWrapper("Z3_simplifier_get_descr", 2);
        var _Z3_mk_tuple_sort = Module["_Z3_mk_tuple_sort"] = createExportWrapper("Z3_mk_tuple_sort", 7);
        var _Z3_mk_enumeration_sort = Module["_Z3_mk_enumeration_sort"] = createExportWrapper("Z3_mk_enumeration_sort", 6);
        var _Z3_mk_list_sort = Module["_Z3_mk_list_sort"] = createExportWrapper("Z3_mk_list_sort", 9);
        var _Z3_mk_constructor = Module["_Z3_mk_constructor"] = createExportWrapper("Z3_mk_constructor", 7);
        var _Z3_constructor_num_fields = Module["_Z3_constructor_num_fields"] = createExportWrapper("Z3_constructor_num_fields", 2);
        var _Z3_query_constructor = Module["_Z3_query_constructor"] = createExportWrapper("Z3_query_constructor", 6);
        var _Z3_del_constructor = Module["_Z3_del_constructor"] = createExportWrapper("Z3_del_constructor", 2);
        var _Z3_mk_datatype = Module["_Z3_mk_datatype"] = createExportWrapper("Z3_mk_datatype", 4);
        var _Z3_mk_constructor_list = Module["_Z3_mk_constructor_list"] = createExportWrapper("Z3_mk_constructor_list", 3);
        var _Z3_del_constructor_list = Module["_Z3_del_constructor_list"] = createExportWrapper("Z3_del_constructor_list", 2);
        var _Z3_mk_datatype_sort = Module["_Z3_mk_datatype_sort"] = createExportWrapper("Z3_mk_datatype_sort", 2);
        var _Z3_mk_datatypes = Module["_Z3_mk_datatypes"] = createExportWrapper("Z3_mk_datatypes", 5);
        var _Z3_is_recursive_datatype_sort = Module["_Z3_is_recursive_datatype_sort"] = createExportWrapper("Z3_is_recursive_datatype_sort", 2);
        var _Z3_get_datatype_sort_num_constructors = Module["_Z3_get_datatype_sort_num_constructors"] = createExportWrapper("Z3_get_datatype_sort_num_constructors", 2);
        var _Z3_get_datatype_sort_constructor = Module["_Z3_get_datatype_sort_constructor"] = createExportWrapper("Z3_get_datatype_sort_constructor", 3);
        var _Z3_get_datatype_sort_recognizer = Module["_Z3_get_datatype_sort_recognizer"] = createExportWrapper("Z3_get_datatype_sort_recognizer", 3);
        var _Z3_get_datatype_sort_constructor_accessor = Module["_Z3_get_datatype_sort_constructor_accessor"] = createExportWrapper("Z3_get_datatype_sort_constructor_accessor", 4);
        var _Z3_get_tuple_sort_mk_decl = Module["_Z3_get_tuple_sort_mk_decl"] = createExportWrapper("Z3_get_tuple_sort_mk_decl", 2);
        var _Z3_get_tuple_sort_num_fields = Module["_Z3_get_tuple_sort_num_fields"] = createExportWrapper("Z3_get_tuple_sort_num_fields", 2);
        var _Z3_get_tuple_sort_field_decl = Module["_Z3_get_tuple_sort_field_decl"] = createExportWrapper("Z3_get_tuple_sort_field_decl", 3);
        var _Z3_datatype_update_field = Module["_Z3_datatype_update_field"] = createExportWrapper("Z3_datatype_update_field", 4);
        var _Z3_mk_model = Module["_Z3_mk_model"] = createExportWrapper("Z3_mk_model", 1);
        var _Z3_model_inc_ref = Module["_Z3_model_inc_ref"] = createExportWrapper("Z3_model_inc_ref", 2);
        var _Z3_model_dec_ref = Module["_Z3_model_dec_ref"] = createExportWrapper("Z3_model_dec_ref", 2);
        var _Z3_model_get_const_interp = Module["_Z3_model_get_const_interp"] = createExportWrapper("Z3_model_get_const_interp", 3);
        var _Z3_model_has_interp = Module["_Z3_model_has_interp"] = createExportWrapper("Z3_model_has_interp", 3);
        var _Z3_model_get_func_interp = Module["_Z3_model_get_func_interp"] = createExportWrapper("Z3_model_get_func_interp", 3);
        var _Z3_model_get_num_consts = Module["_Z3_model_get_num_consts"] = createExportWrapper("Z3_model_get_num_consts", 2);
        var _Z3_model_get_const_decl = Module["_Z3_model_get_const_decl"] = createExportWrapper("Z3_model_get_const_decl", 3);
        var _Z3_model_get_num_funcs = Module["_Z3_model_get_num_funcs"] = createExportWrapper("Z3_model_get_num_funcs", 2);
        var _Z3_model_get_func_decl = Module["_Z3_model_get_func_decl"] = createExportWrapper("Z3_model_get_func_decl", 3);
        var _Z3_model_eval = Module["_Z3_model_eval"] = createExportWrapper("Z3_model_eval", 5);
        var _Z3_model_get_num_sorts = Module["_Z3_model_get_num_sorts"] = createExportWrapper("Z3_model_get_num_sorts", 2);
        var _Z3_model_get_sort = Module["_Z3_model_get_sort"] = createExportWrapper("Z3_model_get_sort", 3);
        var _Z3_model_get_sort_universe = Module["_Z3_model_get_sort_universe"] = createExportWrapper("Z3_model_get_sort_universe", 3);
        var _Z3_model_translate = Module["_Z3_model_translate"] = createExportWrapper("Z3_model_translate", 3);
        var _Z3_is_as_array = Module["_Z3_is_as_array"] = createExportWrapper("Z3_is_as_array", 2);
        var _Z3_get_as_array_func_decl = Module["_Z3_get_as_array_func_decl"] = createExportWrapper("Z3_get_as_array_func_decl", 2);
        var _Z3_add_func_interp = Module["_Z3_add_func_interp"] = createExportWrapper("Z3_add_func_interp", 4);
        var _Z3_add_const_interp = Module["_Z3_add_const_interp"] = createExportWrapper("Z3_add_const_interp", 4);
        var _Z3_func_interp_inc_ref = Module["_Z3_func_interp_inc_ref"] = createExportWrapper("Z3_func_interp_inc_ref", 2);
        var _Z3_func_interp_dec_ref = Module["_Z3_func_interp_dec_ref"] = createExportWrapper("Z3_func_interp_dec_ref", 2);
        var _Z3_func_interp_get_num_entries = Module["_Z3_func_interp_get_num_entries"] = createExportWrapper("Z3_func_interp_get_num_entries", 2);
        var _Z3_func_interp_get_entry = Module["_Z3_func_interp_get_entry"] = createExportWrapper("Z3_func_interp_get_entry", 3);
        var _Z3_func_interp_get_else = Module["_Z3_func_interp_get_else"] = createExportWrapper("Z3_func_interp_get_else", 2);
        var _Z3_func_interp_set_else = Module["_Z3_func_interp_set_else"] = createExportWrapper("Z3_func_interp_set_else", 3);
        var _Z3_func_interp_get_arity = Module["_Z3_func_interp_get_arity"] = createExportWrapper("Z3_func_interp_get_arity", 2);
        var _Z3_func_interp_add_entry = Module["_Z3_func_interp_add_entry"] = createExportWrapper("Z3_func_interp_add_entry", 4);
        var _Z3_func_entry_inc_ref = Module["_Z3_func_entry_inc_ref"] = createExportWrapper("Z3_func_entry_inc_ref", 2);
        var _Z3_func_entry_dec_ref = Module["_Z3_func_entry_dec_ref"] = createExportWrapper("Z3_func_entry_dec_ref", 2);
        var _Z3_func_entry_get_value = Module["_Z3_func_entry_get_value"] = createExportWrapper("Z3_func_entry_get_value", 2);
        var _Z3_func_entry_get_num_args = Module["_Z3_func_entry_get_num_args"] = createExportWrapper("Z3_func_entry_get_num_args", 2);
        var _Z3_func_entry_get_arg = Module["_Z3_func_entry_get_arg"] = createExportWrapper("Z3_func_entry_get_arg", 3);
        var _Z3_model_to_string = Module["_Z3_model_to_string"] = createExportWrapper("Z3_model_to_string", 2);
        var _Z3_get_relation_arity = Module["_Z3_get_relation_arity"] = createExportWrapper("Z3_get_relation_arity", 2);
        var _Z3_get_relation_column = Module["_Z3_get_relation_column"] = createExportWrapper("Z3_get_relation_column", 3);
        var _Z3_mk_finite_domain_sort = Module["_Z3_mk_finite_domain_sort"] = createExportWrapper("Z3_mk_finite_domain_sort", 3);
        var _Z3_get_finite_domain_sort_size = Module["_Z3_get_finite_domain_sort_size"] = createExportWrapper("Z3_get_finite_domain_sort_size", 3);
        var _Z3_mk_fixedpoint = Module["_Z3_mk_fixedpoint"] = createExportWrapper("Z3_mk_fixedpoint", 1);
        var _Z3_fixedpoint_inc_ref = Module["_Z3_fixedpoint_inc_ref"] = createExportWrapper("Z3_fixedpoint_inc_ref", 2);
        var _Z3_fixedpoint_dec_ref = Module["_Z3_fixedpoint_dec_ref"] = createExportWrapper("Z3_fixedpoint_dec_ref", 2);
        var _Z3_fixedpoint_assert = Module["_Z3_fixedpoint_assert"] = createExportWrapper("Z3_fixedpoint_assert", 3);
        var _Z3_fixedpoint_add_rule = Module["_Z3_fixedpoint_add_rule"] = createExportWrapper("Z3_fixedpoint_add_rule", 4);
        var _Z3_fixedpoint_add_fact = Module["_Z3_fixedpoint_add_fact"] = createExportWrapper("Z3_fixedpoint_add_fact", 5);
        var _Z3_fixedpoint_get_answer = Module["_Z3_fixedpoint_get_answer"] = createExportWrapper("Z3_fixedpoint_get_answer", 2);
        var _Z3_fixedpoint_get_reason_unknown = Module["_Z3_fixedpoint_get_reason_unknown"] = createExportWrapper("Z3_fixedpoint_get_reason_unknown", 2);
        var _Z3_fixedpoint_to_string = Module["_Z3_fixedpoint_to_string"] = createExportWrapper("Z3_fixedpoint_to_string", 4);
        var _Z3_fixedpoint_from_string = Module["_Z3_fixedpoint_from_string"] = createExportWrapper("Z3_fixedpoint_from_string", 3);
        var _Z3_fixedpoint_from_file = Module["_Z3_fixedpoint_from_file"] = createExportWrapper("Z3_fixedpoint_from_file", 3);
        var _Z3_fixedpoint_get_statistics = Module["_Z3_fixedpoint_get_statistics"] = createExportWrapper("Z3_fixedpoint_get_statistics", 2);
        var _Z3_fixedpoint_register_relation = Module["_Z3_fixedpoint_register_relation"] = createExportWrapper("Z3_fixedpoint_register_relation", 3);
        var _Z3_fixedpoint_set_predicate_representation = Module["_Z3_fixedpoint_set_predicate_representation"] = createExportWrapper("Z3_fixedpoint_set_predicate_representation", 5);
        var _Z3_fixedpoint_get_rules = Module["_Z3_fixedpoint_get_rules"] = createExportWrapper("Z3_fixedpoint_get_rules", 2);
        var _Z3_fixedpoint_get_assertions = Module["_Z3_fixedpoint_get_assertions"] = createExportWrapper("Z3_fixedpoint_get_assertions", 2);
        var _Z3_fixedpoint_update_rule = Module["_Z3_fixedpoint_update_rule"] = createExportWrapper("Z3_fixedpoint_update_rule", 4);
        var _Z3_fixedpoint_get_num_levels = Module["_Z3_fixedpoint_get_num_levels"] = createExportWrapper("Z3_fixedpoint_get_num_levels", 3);
        var _Z3_fixedpoint_get_cover_delta = Module["_Z3_fixedpoint_get_cover_delta"] = createExportWrapper("Z3_fixedpoint_get_cover_delta", 4);
        var _Z3_fixedpoint_add_cover = Module["_Z3_fixedpoint_add_cover"] = createExportWrapper("Z3_fixedpoint_add_cover", 5);
        var _Z3_fixedpoint_get_help = Module["_Z3_fixedpoint_get_help"] = createExportWrapper("Z3_fixedpoint_get_help", 2);
        var _Z3_fixedpoint_get_param_descrs = Module["_Z3_fixedpoint_get_param_descrs"] = createExportWrapper("Z3_fixedpoint_get_param_descrs", 2);
        var _Z3_fixedpoint_set_params = Module["_Z3_fixedpoint_set_params"] = createExportWrapper("Z3_fixedpoint_set_params", 3);
        var _Z3_fixedpoint_get_ground_sat_answer = Module["_Z3_fixedpoint_get_ground_sat_answer"] = createExportWrapper("Z3_fixedpoint_get_ground_sat_answer", 2);
        var _Z3_fixedpoint_get_rules_along_trace = Module["_Z3_fixedpoint_get_rules_along_trace"] = createExportWrapper("Z3_fixedpoint_get_rules_along_trace", 2);
        var _Z3_fixedpoint_get_rule_names_along_trace = Module["_Z3_fixedpoint_get_rule_names_along_trace"] = createExportWrapper("Z3_fixedpoint_get_rule_names_along_trace", 2);
        var _Z3_fixedpoint_add_invariant = Module["_Z3_fixedpoint_add_invariant"] = createExportWrapper("Z3_fixedpoint_add_invariant", 4);
        var _Z3_fixedpoint_get_reachable = Module["_Z3_fixedpoint_get_reachable"] = createExportWrapper("Z3_fixedpoint_get_reachable", 3);
        var _Z3_stats_to_string = Module["_Z3_stats_to_string"] = createExportWrapper("Z3_stats_to_string", 2);
        var _Z3_stats_inc_ref = Module["_Z3_stats_inc_ref"] = createExportWrapper("Z3_stats_inc_ref", 2);
        var _Z3_stats_dec_ref = Module["_Z3_stats_dec_ref"] = createExportWrapper("Z3_stats_dec_ref", 2);
        var _Z3_stats_size = Module["_Z3_stats_size"] = createExportWrapper("Z3_stats_size", 2);
        var _Z3_stats_get_key = Module["_Z3_stats_get_key"] = createExportWrapper("Z3_stats_get_key", 3);
        var _Z3_stats_is_uint = Module["_Z3_stats_is_uint"] = createExportWrapper("Z3_stats_is_uint", 3);
        var _Z3_stats_is_double = Module["_Z3_stats_is_double"] = createExportWrapper("Z3_stats_is_double", 3);
        var _Z3_stats_get_uint_value = Module["_Z3_stats_get_uint_value"] = createExportWrapper("Z3_stats_get_uint_value", 3);
        var _Z3_stats_get_double_value = Module["_Z3_stats_get_double_value"] = createExportWrapper("Z3_stats_get_double_value", 3);
        var _Z3_get_estimated_alloc_size = Module["_Z3_get_estimated_alloc_size"] = createExportWrapper("Z3_get_estimated_alloc_size", 0);
        var _Z3_mk_fpa_rounding_mode_sort = Module["_Z3_mk_fpa_rounding_mode_sort"] = createExportWrapper("Z3_mk_fpa_rounding_mode_sort", 1);
        var _Z3_mk_fpa_round_nearest_ties_to_even = Module["_Z3_mk_fpa_round_nearest_ties_to_even"] = createExportWrapper("Z3_mk_fpa_round_nearest_ties_to_even", 1);
        var _Z3_mk_fpa_rne = Module["_Z3_mk_fpa_rne"] = createExportWrapper("Z3_mk_fpa_rne", 1);
        var _Z3_mk_fpa_round_nearest_ties_to_away = Module["_Z3_mk_fpa_round_nearest_ties_to_away"] = createExportWrapper("Z3_mk_fpa_round_nearest_ties_to_away", 1);
        var _Z3_mk_fpa_rna = Module["_Z3_mk_fpa_rna"] = createExportWrapper("Z3_mk_fpa_rna", 1);
        var _Z3_mk_fpa_round_toward_positive = Module["_Z3_mk_fpa_round_toward_positive"] = createExportWrapper("Z3_mk_fpa_round_toward_positive", 1);
        var _Z3_mk_fpa_rtp = Module["_Z3_mk_fpa_rtp"] = createExportWrapper("Z3_mk_fpa_rtp", 1);
        var _Z3_mk_fpa_round_toward_negative = Module["_Z3_mk_fpa_round_toward_negative"] = createExportWrapper("Z3_mk_fpa_round_toward_negative", 1);
        var _Z3_mk_fpa_rtn = Module["_Z3_mk_fpa_rtn"] = createExportWrapper("Z3_mk_fpa_rtn", 1);
        var _Z3_mk_fpa_round_toward_zero = Module["_Z3_mk_fpa_round_toward_zero"] = createExportWrapper("Z3_mk_fpa_round_toward_zero", 1);
        var _Z3_mk_fpa_rtz = Module["_Z3_mk_fpa_rtz"] = createExportWrapper("Z3_mk_fpa_rtz", 1);
        var _Z3_mk_fpa_sort = Module["_Z3_mk_fpa_sort"] = createExportWrapper("Z3_mk_fpa_sort", 3);
        var _Z3_mk_fpa_sort_half = Module["_Z3_mk_fpa_sort_half"] = createExportWrapper("Z3_mk_fpa_sort_half", 1);
        var _Z3_mk_fpa_sort_16 = Module["_Z3_mk_fpa_sort_16"] = createExportWrapper("Z3_mk_fpa_sort_16", 1);
        var _Z3_mk_fpa_sort_single = Module["_Z3_mk_fpa_sort_single"] = createExportWrapper("Z3_mk_fpa_sort_single", 1);
        var _Z3_mk_fpa_sort_32 = Module["_Z3_mk_fpa_sort_32"] = createExportWrapper("Z3_mk_fpa_sort_32", 1);
        var _Z3_mk_fpa_sort_double = Module["_Z3_mk_fpa_sort_double"] = createExportWrapper("Z3_mk_fpa_sort_double", 1);
        var _Z3_mk_fpa_sort_64 = Module["_Z3_mk_fpa_sort_64"] = createExportWrapper("Z3_mk_fpa_sort_64", 1);
        var _Z3_mk_fpa_sort_quadruple = Module["_Z3_mk_fpa_sort_quadruple"] = createExportWrapper("Z3_mk_fpa_sort_quadruple", 1);
        var _Z3_mk_fpa_sort_128 = Module["_Z3_mk_fpa_sort_128"] = createExportWrapper("Z3_mk_fpa_sort_128", 1);
        var _Z3_mk_fpa_nan = Module["_Z3_mk_fpa_nan"] = createExportWrapper("Z3_mk_fpa_nan", 2);
        var _Z3_mk_fpa_inf = Module["_Z3_mk_fpa_inf"] = createExportWrapper("Z3_mk_fpa_inf", 3);
        var _Z3_mk_fpa_zero = Module["_Z3_mk_fpa_zero"] = createExportWrapper("Z3_mk_fpa_zero", 3);
        var _Z3_mk_fpa_fp = Module["_Z3_mk_fpa_fp"] = createExportWrapper("Z3_mk_fpa_fp", 4);
        var _Z3_mk_fpa_numeral_float = Module["_Z3_mk_fpa_numeral_float"] = createExportWrapper("Z3_mk_fpa_numeral_float", 3);
        var _Z3_mk_fpa_numeral_double = Module["_Z3_mk_fpa_numeral_double"] = createExportWrapper("Z3_mk_fpa_numeral_double", 3);
        var _Z3_mk_fpa_numeral_int = Module["_Z3_mk_fpa_numeral_int"] = createExportWrapper("Z3_mk_fpa_numeral_int", 3);
        var _Z3_mk_fpa_numeral_int_uint = Module["_Z3_mk_fpa_numeral_int_uint"] = createExportWrapper("Z3_mk_fpa_numeral_int_uint", 5);
        var _Z3_mk_fpa_numeral_int64_uint64 = Module["_Z3_mk_fpa_numeral_int64_uint64"] = createExportWrapper("Z3_mk_fpa_numeral_int64_uint64", 5);
        var _Z3_mk_fpa_abs = Module["_Z3_mk_fpa_abs"] = createExportWrapper("Z3_mk_fpa_abs", 2);
        var _Z3_mk_fpa_neg = Module["_Z3_mk_fpa_neg"] = createExportWrapper("Z3_mk_fpa_neg", 2);
        var _Z3_mk_fpa_add = Module["_Z3_mk_fpa_add"] = createExportWrapper("Z3_mk_fpa_add", 4);
        var _Z3_mk_fpa_sub = Module["_Z3_mk_fpa_sub"] = createExportWrapper("Z3_mk_fpa_sub", 4);
        var _Z3_mk_fpa_mul = Module["_Z3_mk_fpa_mul"] = createExportWrapper("Z3_mk_fpa_mul", 4);
        var _Z3_mk_fpa_div = Module["_Z3_mk_fpa_div"] = createExportWrapper("Z3_mk_fpa_div", 4);
        var _Z3_mk_fpa_fma = Module["_Z3_mk_fpa_fma"] = createExportWrapper("Z3_mk_fpa_fma", 5);
        var _Z3_mk_fpa_sqrt = Module["_Z3_mk_fpa_sqrt"] = createExportWrapper("Z3_mk_fpa_sqrt", 3);
        var _Z3_mk_fpa_rem = Module["_Z3_mk_fpa_rem"] = createExportWrapper("Z3_mk_fpa_rem", 3);
        var _Z3_mk_fpa_round_to_integral = Module["_Z3_mk_fpa_round_to_integral"] = createExportWrapper("Z3_mk_fpa_round_to_integral", 3);
        var _Z3_mk_fpa_min = Module["_Z3_mk_fpa_min"] = createExportWrapper("Z3_mk_fpa_min", 3);
        var _Z3_mk_fpa_max = Module["_Z3_mk_fpa_max"] = createExportWrapper("Z3_mk_fpa_max", 3);
        var _Z3_mk_fpa_leq = Module["_Z3_mk_fpa_leq"] = createExportWrapper("Z3_mk_fpa_leq", 3);
        var _Z3_mk_fpa_lt = Module["_Z3_mk_fpa_lt"] = createExportWrapper("Z3_mk_fpa_lt", 3);
        var _Z3_mk_fpa_geq = Module["_Z3_mk_fpa_geq"] = createExportWrapper("Z3_mk_fpa_geq", 3);
        var _Z3_mk_fpa_gt = Module["_Z3_mk_fpa_gt"] = createExportWrapper("Z3_mk_fpa_gt", 3);
        var _Z3_mk_fpa_eq = Module["_Z3_mk_fpa_eq"] = createExportWrapper("Z3_mk_fpa_eq", 3);
        var _Z3_mk_fpa_is_normal = Module["_Z3_mk_fpa_is_normal"] = createExportWrapper("Z3_mk_fpa_is_normal", 2);
        var _Z3_mk_fpa_is_subnormal = Module["_Z3_mk_fpa_is_subnormal"] = createExportWrapper("Z3_mk_fpa_is_subnormal", 2);
        var _Z3_mk_fpa_is_zero = Module["_Z3_mk_fpa_is_zero"] = createExportWrapper("Z3_mk_fpa_is_zero", 2);
        var _Z3_mk_fpa_is_infinite = Module["_Z3_mk_fpa_is_infinite"] = createExportWrapper("Z3_mk_fpa_is_infinite", 2);
        var _Z3_mk_fpa_is_nan = Module["_Z3_mk_fpa_is_nan"] = createExportWrapper("Z3_mk_fpa_is_nan", 2);
        var _Z3_mk_fpa_is_negative = Module["_Z3_mk_fpa_is_negative"] = createExportWrapper("Z3_mk_fpa_is_negative", 2);
        var _Z3_mk_fpa_is_positive = Module["_Z3_mk_fpa_is_positive"] = createExportWrapper("Z3_mk_fpa_is_positive", 2);
        var _Z3_mk_fpa_to_fp_bv = Module["_Z3_mk_fpa_to_fp_bv"] = createExportWrapper("Z3_mk_fpa_to_fp_bv", 3);
        var _Z3_mk_fpa_to_fp_float = Module["_Z3_mk_fpa_to_fp_float"] = createExportWrapper("Z3_mk_fpa_to_fp_float", 4);
        var _Z3_mk_fpa_to_fp_real = Module["_Z3_mk_fpa_to_fp_real"] = createExportWrapper("Z3_mk_fpa_to_fp_real", 4);
        var _Z3_mk_fpa_to_fp_signed = Module["_Z3_mk_fpa_to_fp_signed"] = createExportWrapper("Z3_mk_fpa_to_fp_signed", 4);
        var _Z3_mk_fpa_to_fp_unsigned = Module["_Z3_mk_fpa_to_fp_unsigned"] = createExportWrapper("Z3_mk_fpa_to_fp_unsigned", 4);
        var _Z3_mk_fpa_to_ubv = Module["_Z3_mk_fpa_to_ubv"] = createExportWrapper("Z3_mk_fpa_to_ubv", 4);
        var _Z3_mk_fpa_to_sbv = Module["_Z3_mk_fpa_to_sbv"] = createExportWrapper("Z3_mk_fpa_to_sbv", 4);
        var _Z3_mk_fpa_to_real = Module["_Z3_mk_fpa_to_real"] = createExportWrapper("Z3_mk_fpa_to_real", 2);
        var _Z3_fpa_get_ebits = Module["_Z3_fpa_get_ebits"] = createExportWrapper("Z3_fpa_get_ebits", 2);
        var _Z3_fpa_get_sbits = Module["_Z3_fpa_get_sbits"] = createExportWrapper("Z3_fpa_get_sbits", 2);
        var _Z3_fpa_get_numeral_sign = Module["_Z3_fpa_get_numeral_sign"] = createExportWrapper("Z3_fpa_get_numeral_sign", 3);
        var _Z3_fpa_get_numeral_sign_bv = Module["_Z3_fpa_get_numeral_sign_bv"] = createExportWrapper("Z3_fpa_get_numeral_sign_bv", 2);
        var _Z3_fpa_get_numeral_significand_bv = Module["_Z3_fpa_get_numeral_significand_bv"] = createExportWrapper("Z3_fpa_get_numeral_significand_bv", 2);
        var _Z3_fpa_get_numeral_significand_string = Module["_Z3_fpa_get_numeral_significand_string"] = createExportWrapper("Z3_fpa_get_numeral_significand_string", 2);
        var _Z3_fpa_get_numeral_significand_uint64 = Module["_Z3_fpa_get_numeral_significand_uint64"] = createExportWrapper("Z3_fpa_get_numeral_significand_uint64", 3);
        var _Z3_fpa_get_numeral_exponent_string = Module["_Z3_fpa_get_numeral_exponent_string"] = createExportWrapper("Z3_fpa_get_numeral_exponent_string", 3);
        var _Z3_fpa_get_numeral_exponent_int64 = Module["_Z3_fpa_get_numeral_exponent_int64"] = createExportWrapper("Z3_fpa_get_numeral_exponent_int64", 4);
        var _Z3_fpa_get_numeral_exponent_bv = Module["_Z3_fpa_get_numeral_exponent_bv"] = createExportWrapper("Z3_fpa_get_numeral_exponent_bv", 3);
        var _Z3_mk_fpa_to_ieee_bv = Module["_Z3_mk_fpa_to_ieee_bv"] = createExportWrapper("Z3_mk_fpa_to_ieee_bv", 2);
        var _Z3_mk_fpa_to_fp_int_real = Module["_Z3_mk_fpa_to_fp_int_real"] = createExportWrapper("Z3_mk_fpa_to_fp_int_real", 5);
        var _Z3_fpa_is_numeral_nan = Module["_Z3_fpa_is_numeral_nan"] = createExportWrapper("Z3_fpa_is_numeral_nan", 2);
        var _Z3_fpa_is_numeral_inf = Module["_Z3_fpa_is_numeral_inf"] = createExportWrapper("Z3_fpa_is_numeral_inf", 2);
        var _Z3_fpa_is_numeral_zero = Module["_Z3_fpa_is_numeral_zero"] = createExportWrapper("Z3_fpa_is_numeral_zero", 2);
        var _Z3_fpa_is_numeral_normal = Module["_Z3_fpa_is_numeral_normal"] = createExportWrapper("Z3_fpa_is_numeral_normal", 2);
        var _Z3_fpa_is_numeral_subnormal = Module["_Z3_fpa_is_numeral_subnormal"] = createExportWrapper("Z3_fpa_is_numeral_subnormal", 2);
        var _Z3_fpa_is_numeral_positive = Module["_Z3_fpa_is_numeral_positive"] = createExportWrapper("Z3_fpa_is_numeral_positive", 2);
        var _Z3_fpa_is_numeral_negative = Module["_Z3_fpa_is_numeral_negative"] = createExportWrapper("Z3_fpa_is_numeral_negative", 2);
        var _Z3_mk_atmost = Module["_Z3_mk_atmost"] = createExportWrapper("Z3_mk_atmost", 4);
        var _Z3_mk_atleast = Module["_Z3_mk_atleast"] = createExportWrapper("Z3_mk_atleast", 4);
        var _Z3_mk_pble = Module["_Z3_mk_pble"] = createExportWrapper("Z3_mk_pble", 5);
        var _Z3_mk_pbge = Module["_Z3_mk_pbge"] = createExportWrapper("Z3_mk_pbge", 5);
        var _Z3_mk_pbeq = Module["_Z3_mk_pbeq"] = createExportWrapper("Z3_mk_pbeq", 5);
        var _Z3_mk_int_sort = Module["_Z3_mk_int_sort"] = createExportWrapper("Z3_mk_int_sort", 1);
        var _Z3_mk_real_sort = Module["_Z3_mk_real_sort"] = createExportWrapper("Z3_mk_real_sort", 1);
        var _Z3_mk_real_int64 = Module["_Z3_mk_real_int64"] = createExportWrapper("Z3_mk_real_int64", 3);
        var _Z3_mk_real = Module["_Z3_mk_real"] = createExportWrapper("Z3_mk_real", 3);
        var _Z3_mk_add = Module["_Z3_mk_add"] = createExportWrapper("Z3_mk_add", 3);
        var _Z3_mk_mul = Module["_Z3_mk_mul"] = createExportWrapper("Z3_mk_mul", 3);
        var _Z3_mk_power = Module["_Z3_mk_power"] = createExportWrapper("Z3_mk_power", 3);
        var _Z3_mk_mod = Module["_Z3_mk_mod"] = createExportWrapper("Z3_mk_mod", 3);
        var _Z3_mk_rem = Module["_Z3_mk_rem"] = createExportWrapper("Z3_mk_rem", 3);
        var _Z3_mk_div = Module["_Z3_mk_div"] = createExportWrapper("Z3_mk_div", 3);
        var _Z3_mk_lt = Module["_Z3_mk_lt"] = createExportWrapper("Z3_mk_lt", 3);
        var _Z3_mk_gt = Module["_Z3_mk_gt"] = createExportWrapper("Z3_mk_gt", 3);
        var _Z3_mk_le = Module["_Z3_mk_le"] = createExportWrapper("Z3_mk_le", 3);
        var _Z3_mk_ge = Module["_Z3_mk_ge"] = createExportWrapper("Z3_mk_ge", 3);
        var _Z3_mk_divides = Module["_Z3_mk_divides"] = createExportWrapper("Z3_mk_divides", 3);
        var _Z3_mk_abs = Module["_Z3_mk_abs"] = createExportWrapper("Z3_mk_abs", 2);
        var _Z3_mk_int2real = Module["_Z3_mk_int2real"] = createExportWrapper("Z3_mk_int2real", 2);
        var _Z3_mk_real2int = Module["_Z3_mk_real2int"] = createExportWrapper("Z3_mk_real2int", 2);
        var _Z3_mk_is_int = Module["_Z3_mk_is_int"] = createExportWrapper("Z3_mk_is_int", 2);
        var _Z3_mk_sub = Module["_Z3_mk_sub"] = createExportWrapper("Z3_mk_sub", 3);
        var _Z3_mk_unary_minus = Module["_Z3_mk_unary_minus"] = createExportWrapper("Z3_mk_unary_minus", 2);
        var _Z3_is_algebraic_number = Module["_Z3_is_algebraic_number"] = createExportWrapper("Z3_is_algebraic_number", 2);
        var _Z3_get_algebraic_number_lower = Module["_Z3_get_algebraic_number_lower"] = createExportWrapper("Z3_get_algebraic_number_lower", 3);
        var _Z3_get_algebraic_number_upper = Module["_Z3_get_algebraic_number_upper"] = createExportWrapper("Z3_get_algebraic_number_upper", 3);
        var _Z3_get_numerator = Module["_Z3_get_numerator"] = createExportWrapper("Z3_get_numerator", 2);
        var _Z3_get_denominator = Module["_Z3_get_denominator"] = createExportWrapper("Z3_get_denominator", 2);
        var _Z3_qe_model_project = Module["_Z3_qe_model_project"] = createExportWrapper("Z3_qe_model_project", 5);
        var _Z3_qe_model_project_skolem = Module["_Z3_qe_model_project_skolem"] = createExportWrapper("Z3_qe_model_project_skolem", 6);
        var _Z3_qe_model_project_with_witness = Module["_Z3_qe_model_project_with_witness"] = createExportWrapper("Z3_qe_model_project_with_witness", 6);
        var _Z3_model_extrapolate = Module["_Z3_model_extrapolate"] = createExportWrapper("Z3_model_extrapolate", 3);
        var _Z3_qe_lite = Module["_Z3_qe_lite"] = createExportWrapper("Z3_qe_lite", 3);
        var _Z3_open_log = Module["_Z3_open_log"] = createExportWrapper("Z3_open_log", 1);
        var _Z3_append_log = Module["_Z3_append_log"] = createExportWrapper("Z3_append_log", 1);
        var _Z3_close_log = Module["_Z3_close_log"] = createExportWrapper("Z3_close_log", 0);
        var _Z3_mk_optimize = Module["_Z3_mk_optimize"] = createExportWrapper("Z3_mk_optimize", 1);
        var _Z3_optimize_inc_ref = Module["_Z3_optimize_inc_ref"] = createExportWrapper("Z3_optimize_inc_ref", 2);
        var _Z3_optimize_dec_ref = Module["_Z3_optimize_dec_ref"] = createExportWrapper("Z3_optimize_dec_ref", 2);
        var _Z3_optimize_assert = Module["_Z3_optimize_assert"] = createExportWrapper("Z3_optimize_assert", 3);
        var _Z3_optimize_assert_and_track = Module["_Z3_optimize_assert_and_track"] = createExportWrapper("Z3_optimize_assert_and_track", 4);
        var _Z3_optimize_assert_soft = Module["_Z3_optimize_assert_soft"] = createExportWrapper("Z3_optimize_assert_soft", 5);
        var _Z3_optimize_maximize = Module["_Z3_optimize_maximize"] = createExportWrapper("Z3_optimize_maximize", 3);
        var _Z3_optimize_minimize = Module["_Z3_optimize_minimize"] = createExportWrapper("Z3_optimize_minimize", 3);
        var _Z3_optimize_push = Module["_Z3_optimize_push"] = createExportWrapper("Z3_optimize_push", 2);
        var _Z3_optimize_pop = Module["_Z3_optimize_pop"] = createExportWrapper("Z3_optimize_pop", 2);
        var _Z3_optimize_get_unsat_core = Module["_Z3_optimize_get_unsat_core"] = createExportWrapper("Z3_optimize_get_unsat_core", 2);
        var _Z3_optimize_get_reason_unknown = Module["_Z3_optimize_get_reason_unknown"] = createExportWrapper("Z3_optimize_get_reason_unknown", 2);
        var _Z3_optimize_get_model = Module["_Z3_optimize_get_model"] = createExportWrapper("Z3_optimize_get_model", 2);
        var _Z3_optimize_set_params = Module["_Z3_optimize_set_params"] = createExportWrapper("Z3_optimize_set_params", 3);
        var _Z3_optimize_get_param_descrs = Module["_Z3_optimize_get_param_descrs"] = createExportWrapper("Z3_optimize_get_param_descrs", 2);
        var _Z3_optimize_get_lower = Module["_Z3_optimize_get_lower"] = createExportWrapper("Z3_optimize_get_lower", 3);
        var _Z3_optimize_get_upper = Module["_Z3_optimize_get_upper"] = createExportWrapper("Z3_optimize_get_upper", 3);
        var _Z3_optimize_get_lower_as_vector = Module["_Z3_optimize_get_lower_as_vector"] = createExportWrapper("Z3_optimize_get_lower_as_vector", 3);
        var _Z3_optimize_get_upper_as_vector = Module["_Z3_optimize_get_upper_as_vector"] = createExportWrapper("Z3_optimize_get_upper_as_vector", 3);
        var _Z3_optimize_to_string = Module["_Z3_optimize_to_string"] = createExportWrapper("Z3_optimize_to_string", 2);
        var _Z3_optimize_get_help = Module["_Z3_optimize_get_help"] = createExportWrapper("Z3_optimize_get_help", 2);
        var _Z3_optimize_get_statistics = Module["_Z3_optimize_get_statistics"] = createExportWrapper("Z3_optimize_get_statistics", 2);
        var _Z3_optimize_from_string = Module["_Z3_optimize_from_string"] = createExportWrapper("Z3_optimize_from_string", 3);
        var _Z3_optimize_from_file = Module["_Z3_optimize_from_file"] = createExportWrapper("Z3_optimize_from_file", 3);
        var _Z3_optimize_get_assertions = Module["_Z3_optimize_get_assertions"] = createExportWrapper("Z3_optimize_get_assertions", 2);
        var _Z3_optimize_get_objectives = Module["_Z3_optimize_get_objectives"] = createExportWrapper("Z3_optimize_get_objectives", 2);
        var _Z3_optimize_set_initial_value = Module["_Z3_optimize_set_initial_value"] = createExportWrapper("Z3_optimize_set_initial_value", 4);
        var _Z3_mk_bv_sort = Module["_Z3_mk_bv_sort"] = createExportWrapper("Z3_mk_bv_sort", 2);
        var _Z3_mk_bvnot = Module["_Z3_mk_bvnot"] = createExportWrapper("Z3_mk_bvnot", 2);
        var _Z3_mk_bvredand = Module["_Z3_mk_bvredand"] = createExportWrapper("Z3_mk_bvredand", 2);
        var _Z3_mk_bvredor = Module["_Z3_mk_bvredor"] = createExportWrapper("Z3_mk_bvredor", 2);
        var _Z3_mk_bvand = Module["_Z3_mk_bvand"] = createExportWrapper("Z3_mk_bvand", 3);
        var _Z3_mk_bvor = Module["_Z3_mk_bvor"] = createExportWrapper("Z3_mk_bvor", 3);
        var _Z3_mk_bvxor = Module["_Z3_mk_bvxor"] = createExportWrapper("Z3_mk_bvxor", 3);
        var _Z3_mk_bvnand = Module["_Z3_mk_bvnand"] = createExportWrapper("Z3_mk_bvnand", 3);
        var _Z3_mk_bvnor = Module["_Z3_mk_bvnor"] = createExportWrapper("Z3_mk_bvnor", 3);
        var _Z3_mk_bvxnor = Module["_Z3_mk_bvxnor"] = createExportWrapper("Z3_mk_bvxnor", 3);
        var _Z3_mk_bvadd = Module["_Z3_mk_bvadd"] = createExportWrapper("Z3_mk_bvadd", 3);
        var _Z3_mk_bvmul = Module["_Z3_mk_bvmul"] = createExportWrapper("Z3_mk_bvmul", 3);
        var _Z3_mk_bvudiv = Module["_Z3_mk_bvudiv"] = createExportWrapper("Z3_mk_bvudiv", 3);
        var _Z3_mk_bvsdiv = Module["_Z3_mk_bvsdiv"] = createExportWrapper("Z3_mk_bvsdiv", 3);
        var _Z3_mk_bvurem = Module["_Z3_mk_bvurem"] = createExportWrapper("Z3_mk_bvurem", 3);
        var _Z3_mk_bvsrem = Module["_Z3_mk_bvsrem"] = createExportWrapper("Z3_mk_bvsrem", 3);
        var _Z3_mk_bvsmod = Module["_Z3_mk_bvsmod"] = createExportWrapper("Z3_mk_bvsmod", 3);
        var _Z3_mk_bvule = Module["_Z3_mk_bvule"] = createExportWrapper("Z3_mk_bvule", 3);
        var _Z3_mk_bvsle = Module["_Z3_mk_bvsle"] = createExportWrapper("Z3_mk_bvsle", 3);
        var _Z3_mk_bvuge = Module["_Z3_mk_bvuge"] = createExportWrapper("Z3_mk_bvuge", 3);
        var _Z3_mk_bvsge = Module["_Z3_mk_bvsge"] = createExportWrapper("Z3_mk_bvsge", 3);
        var _Z3_mk_bvult = Module["_Z3_mk_bvult"] = createExportWrapper("Z3_mk_bvult", 3);
        var _Z3_mk_bvslt = Module["_Z3_mk_bvslt"] = createExportWrapper("Z3_mk_bvslt", 3);
        var _Z3_mk_bvugt = Module["_Z3_mk_bvugt"] = createExportWrapper("Z3_mk_bvugt", 3);
        var _Z3_mk_bvsgt = Module["_Z3_mk_bvsgt"] = createExportWrapper("Z3_mk_bvsgt", 3);
        var _Z3_mk_concat = Module["_Z3_mk_concat"] = createExportWrapper("Z3_mk_concat", 3);
        var _Z3_mk_bvshl = Module["_Z3_mk_bvshl"] = createExportWrapper("Z3_mk_bvshl", 3);
        var _Z3_mk_bvlshr = Module["_Z3_mk_bvlshr"] = createExportWrapper("Z3_mk_bvlshr", 3);
        var _Z3_mk_bvashr = Module["_Z3_mk_bvashr"] = createExportWrapper("Z3_mk_bvashr", 3);
        var _Z3_mk_ext_rotate_left = Module["_Z3_mk_ext_rotate_left"] = createExportWrapper("Z3_mk_ext_rotate_left", 3);
        var _Z3_mk_ext_rotate_right = Module["_Z3_mk_ext_rotate_right"] = createExportWrapper("Z3_mk_ext_rotate_right", 3);
        var _Z3_mk_extract = Module["_Z3_mk_extract"] = createExportWrapper("Z3_mk_extract", 4);
        var _Z3_mk_sign_ext = Module["_Z3_mk_sign_ext"] = createExportWrapper("Z3_mk_sign_ext", 3);
        var _Z3_mk_zero_ext = Module["_Z3_mk_zero_ext"] = createExportWrapper("Z3_mk_zero_ext", 3);
        var _Z3_mk_repeat = Module["_Z3_mk_repeat"] = createExportWrapper("Z3_mk_repeat", 3);
        var _Z3_mk_bit2bool = Module["_Z3_mk_bit2bool"] = createExportWrapper("Z3_mk_bit2bool", 3);
        var _Z3_mk_rotate_left = Module["_Z3_mk_rotate_left"] = createExportWrapper("Z3_mk_rotate_left", 3);
        var _Z3_mk_rotate_right = Module["_Z3_mk_rotate_right"] = createExportWrapper("Z3_mk_rotate_right", 3);
        var _Z3_mk_int2bv = Module["_Z3_mk_int2bv"] = createExportWrapper("Z3_mk_int2bv", 3);
        var _Z3_mk_bv2int = Module["_Z3_mk_bv2int"] = createExportWrapper("Z3_mk_bv2int", 3);
        var _Z3_get_bv_sort_size = Module["_Z3_get_bv_sort_size"] = createExportWrapper("Z3_get_bv_sort_size", 2);
        var _Z3_mk_bvadd_no_overflow = Module["_Z3_mk_bvadd_no_overflow"] = createExportWrapper("Z3_mk_bvadd_no_overflow", 4);
        var _Z3_mk_bvadd_no_underflow = Module["_Z3_mk_bvadd_no_underflow"] = createExportWrapper("Z3_mk_bvadd_no_underflow", 3);
        var _Z3_mk_bvsub_no_overflow = Module["_Z3_mk_bvsub_no_overflow"] = createExportWrapper("Z3_mk_bvsub_no_overflow", 3);
        var _Z3_mk_bvneg = Module["_Z3_mk_bvneg"] = createExportWrapper("Z3_mk_bvneg", 2);
        var _Z3_mk_bvsub_no_underflow = Module["_Z3_mk_bvsub_no_underflow"] = createExportWrapper("Z3_mk_bvsub_no_underflow", 4);
        var _Z3_mk_bvmul_no_overflow = Module["_Z3_mk_bvmul_no_overflow"] = createExportWrapper("Z3_mk_bvmul_no_overflow", 4);
        var _Z3_mk_bvmul_no_underflow = Module["_Z3_mk_bvmul_no_underflow"] = createExportWrapper("Z3_mk_bvmul_no_underflow", 3);
        var _Z3_mk_bvneg_no_overflow = Module["_Z3_mk_bvneg_no_overflow"] = createExportWrapper("Z3_mk_bvneg_no_overflow", 2);
        var _Z3_mk_bvsdiv_no_overflow = Module["_Z3_mk_bvsdiv_no_overflow"] = createExportWrapper("Z3_mk_bvsdiv_no_overflow", 3);
        var _Z3_mk_bvsub = Module["_Z3_mk_bvsub"] = createExportWrapper("Z3_mk_bvsub", 3);
        var _Z3_mk_array_sort = Module["_Z3_mk_array_sort"] = createExportWrapper("Z3_mk_array_sort", 3);
        var _Z3_mk_array_sort_n = Module["_Z3_mk_array_sort_n"] = createExportWrapper("Z3_mk_array_sort_n", 4);
        var _Z3_mk_select = Module["_Z3_mk_select"] = createExportWrapper("Z3_mk_select", 3);
        var _Z3_mk_select_n = Module["_Z3_mk_select_n"] = createExportWrapper("Z3_mk_select_n", 4);
        var _Z3_mk_store = Module["_Z3_mk_store"] = createExportWrapper("Z3_mk_store", 4);
        var _Z3_mk_store_n = Module["_Z3_mk_store_n"] = createExportWrapper("Z3_mk_store_n", 5);
        var _Z3_mk_map = Module["_Z3_mk_map"] = createExportWrapper("Z3_mk_map", 4);
        var _Z3_mk_const_array = Module["_Z3_mk_const_array"] = createExportWrapper("Z3_mk_const_array", 3);
        var _Z3_mk_array_default = Module["_Z3_mk_array_default"] = createExportWrapper("Z3_mk_array_default", 2);
        var _Z3_mk_set_sort = Module["_Z3_mk_set_sort"] = createExportWrapper("Z3_mk_set_sort", 2);
        var _Z3_mk_empty_set = Module["_Z3_mk_empty_set"] = createExportWrapper("Z3_mk_empty_set", 2);
        var _Z3_mk_full_set = Module["_Z3_mk_full_set"] = createExportWrapper("Z3_mk_full_set", 2);
        var _Z3_mk_set_union = Module["_Z3_mk_set_union"] = createExportWrapper("Z3_mk_set_union", 3);
        var _Z3_mk_set_intersect = Module["_Z3_mk_set_intersect"] = createExportWrapper("Z3_mk_set_intersect", 3);
        var _Z3_mk_set_difference = Module["_Z3_mk_set_difference"] = createExportWrapper("Z3_mk_set_difference", 3);
        var _Z3_mk_set_complement = Module["_Z3_mk_set_complement"] = createExportWrapper("Z3_mk_set_complement", 2);
        var _Z3_mk_set_subset = Module["_Z3_mk_set_subset"] = createExportWrapper("Z3_mk_set_subset", 3);
        var _Z3_mk_array_ext = Module["_Z3_mk_array_ext"] = createExportWrapper("Z3_mk_array_ext", 3);
        var _Z3_mk_set_has_size = Module["_Z3_mk_set_has_size"] = createExportWrapper("Z3_mk_set_has_size", 3);
        var _Z3_mk_as_array = Module["_Z3_mk_as_array"] = createExportWrapper("Z3_mk_as_array", 2);
        var _Z3_mk_set_member = Module["_Z3_mk_set_member"] = createExportWrapper("Z3_mk_set_member", 3);
        var _Z3_mk_set_add = Module["_Z3_mk_set_add"] = createExportWrapper("Z3_mk_set_add", 3);
        var _Z3_mk_set_del = Module["_Z3_mk_set_del"] = createExportWrapper("Z3_mk_set_del", 3);
        var _Z3_get_array_arity = Module["_Z3_get_array_arity"] = createExportWrapper("Z3_get_array_arity", 2);
        var _Z3_get_array_sort_domain = Module["_Z3_get_array_sort_domain"] = createExportWrapper("Z3_get_array_sort_domain", 2);
        var _Z3_get_array_sort_domain_n = Module["_Z3_get_array_sort_domain_n"] = createExportWrapper("Z3_get_array_sort_domain_n", 3);
        var _Z3_get_array_sort_range = Module["_Z3_get_array_sort_range"] = createExportWrapper("Z3_get_array_sort_range", 2);
        var _Z3_mk_numeral = Module["_Z3_mk_numeral"] = createExportWrapper("Z3_mk_numeral", 3);
        var _Z3_mk_int = Module["_Z3_mk_int"] = createExportWrapper("Z3_mk_int", 3);
        var _Z3_mk_unsigned_int = Module["_Z3_mk_unsigned_int"] = createExportWrapper("Z3_mk_unsigned_int", 3);
        var _Z3_mk_int64 = Module["_Z3_mk_int64"] = createExportWrapper("Z3_mk_int64", 3);
        var _Z3_mk_unsigned_int64 = Module["_Z3_mk_unsigned_int64"] = createExportWrapper("Z3_mk_unsigned_int64", 3);
        var _Z3_is_numeral_ast = Module["_Z3_is_numeral_ast"] = createExportWrapper("Z3_is_numeral_ast", 2);
        var _Z3_get_numeral_binary_string = Module["_Z3_get_numeral_binary_string"] = createExportWrapper("Z3_get_numeral_binary_string", 2);
        var _Z3_get_numeral_string = Module["_Z3_get_numeral_string"] = createExportWrapper("Z3_get_numeral_string", 2);
        var _Z3_get_numeral_double = Module["_Z3_get_numeral_double"] = createExportWrapper("Z3_get_numeral_double", 2);
        var _Z3_get_numeral_decimal_string = Module["_Z3_get_numeral_decimal_string"] = createExportWrapper("Z3_get_numeral_decimal_string", 3);
        var _Z3_get_numeral_small = Module["_Z3_get_numeral_small"] = createExportWrapper("Z3_get_numeral_small", 4);
        var _Z3_get_numeral_int = Module["_Z3_get_numeral_int"] = createExportWrapper("Z3_get_numeral_int", 3);
        var _Z3_get_numeral_int64 = Module["_Z3_get_numeral_int64"] = createExportWrapper("Z3_get_numeral_int64", 3);
        var _Z3_get_numeral_uint = Module["_Z3_get_numeral_uint"] = createExportWrapper("Z3_get_numeral_uint", 3);
        var _Z3_get_numeral_uint64 = Module["_Z3_get_numeral_uint64"] = createExportWrapper("Z3_get_numeral_uint64", 3);
        var _Z3_get_numeral_rational_int64 = Module["_Z3_get_numeral_rational_int64"] = createExportWrapper("Z3_get_numeral_rational_int64", 4);
        var _Z3_mk_bv_numeral = Module["_Z3_mk_bv_numeral"] = createExportWrapper("Z3_mk_bv_numeral", 3);
        var _Z3_mk_quantifier = Module["_Z3_mk_quantifier"] = createExportWrapper("Z3_mk_quantifier", 9);
        var _Z3_mk_quantifier_ex = Module["_Z3_mk_quantifier_ex"] = createExportWrapper("Z3_mk_quantifier_ex", 13);
        var _Z3_mk_forall = Module["_Z3_mk_forall"] = createExportWrapper("Z3_mk_forall", 8);
        var _Z3_mk_exists = Module["_Z3_mk_exists"] = createExportWrapper("Z3_mk_exists", 8);
        var _Z3_mk_lambda = Module["_Z3_mk_lambda"] = createExportWrapper("Z3_mk_lambda", 5);
        var _Z3_mk_lambda_const = Module["_Z3_mk_lambda_const"] = createExportWrapper("Z3_mk_lambda_const", 4);
        var _Z3_mk_quantifier_const_ex = Module["_Z3_mk_quantifier_const_ex"] = createExportWrapper("Z3_mk_quantifier_const_ex", 12);
        var _Z3_mk_quantifier_const = Module["_Z3_mk_quantifier_const"] = createExportWrapper("Z3_mk_quantifier_const", 8);
        var _Z3_mk_forall_const = Module["_Z3_mk_forall_const"] = createExportWrapper("Z3_mk_forall_const", 7);
        var _Z3_mk_exists_const = Module["_Z3_mk_exists_const"] = createExportWrapper("Z3_mk_exists_const", 7);
        var _Z3_mk_pattern = Module["_Z3_mk_pattern"] = createExportWrapper("Z3_mk_pattern", 3);
        var _Z3_mk_bound = Module["_Z3_mk_bound"] = createExportWrapper("Z3_mk_bound", 3);
        var _Z3_is_quantifier_forall = Module["_Z3_is_quantifier_forall"] = createExportWrapper("Z3_is_quantifier_forall", 2);
        var _Z3_is_quantifier_exists = Module["_Z3_is_quantifier_exists"] = createExportWrapper("Z3_is_quantifier_exists", 2);
        var _Z3_is_lambda = Module["_Z3_is_lambda"] = createExportWrapper("Z3_is_lambda", 2);
        var _Z3_get_quantifier_weight = Module["_Z3_get_quantifier_weight"] = createExportWrapper("Z3_get_quantifier_weight", 2);
        var _Z3_get_quantifier_skolem_id = Module["_Z3_get_quantifier_skolem_id"] = createExportWrapper("Z3_get_quantifier_skolem_id", 2);
        var _Z3_get_quantifier_id = Module["_Z3_get_quantifier_id"] = createExportWrapper("Z3_get_quantifier_id", 2);
        var _Z3_get_quantifier_num_patterns = Module["_Z3_get_quantifier_num_patterns"] = createExportWrapper("Z3_get_quantifier_num_patterns", 2);
        var _Z3_get_quantifier_pattern_ast = Module["_Z3_get_quantifier_pattern_ast"] = createExportWrapper("Z3_get_quantifier_pattern_ast", 3);
        var _Z3_get_quantifier_num_no_patterns = Module["_Z3_get_quantifier_num_no_patterns"] = createExportWrapper("Z3_get_quantifier_num_no_patterns", 2);
        var _Z3_get_quantifier_no_pattern_ast = Module["_Z3_get_quantifier_no_pattern_ast"] = createExportWrapper("Z3_get_quantifier_no_pattern_ast", 3);
        var _Z3_get_quantifier_bound_name = Module["_Z3_get_quantifier_bound_name"] = createExportWrapper("Z3_get_quantifier_bound_name", 3);
        var _Z3_get_quantifier_bound_sort = Module["_Z3_get_quantifier_bound_sort"] = createExportWrapper("Z3_get_quantifier_bound_sort", 3);
        var _Z3_get_quantifier_body = Module["_Z3_get_quantifier_body"] = createExportWrapper("Z3_get_quantifier_body", 2);
        var _Z3_get_quantifier_num_bound = Module["_Z3_get_quantifier_num_bound"] = createExportWrapper("Z3_get_quantifier_num_bound", 2);
        var _Z3_get_pattern_num_terms = Module["_Z3_get_pattern_num_terms"] = createExportWrapper("Z3_get_pattern_num_terms", 2);
        var _Z3_get_pattern = Module["_Z3_get_pattern"] = createExportWrapper("Z3_get_pattern", 3);
        var _Z3_pattern_to_ast = Module["_Z3_pattern_to_ast"] = createExportWrapper("Z3_pattern_to_ast", 2);
        var _Z3_pattern_to_string = Module["_Z3_pattern_to_string"] = createExportWrapper("Z3_pattern_to_string", 2);
        var _Z3_rcf_del = Module["_Z3_rcf_del"] = createExportWrapper("Z3_rcf_del", 2);
        var _Z3_rcf_mk_rational = Module["_Z3_rcf_mk_rational"] = createExportWrapper("Z3_rcf_mk_rational", 2);
        var _Z3_rcf_mk_small_int = Module["_Z3_rcf_mk_small_int"] = createExportWrapper("Z3_rcf_mk_small_int", 2);
        var _Z3_rcf_mk_pi = Module["_Z3_rcf_mk_pi"] = createExportWrapper("Z3_rcf_mk_pi", 1);
        var _Z3_rcf_mk_e = Module["_Z3_rcf_mk_e"] = createExportWrapper("Z3_rcf_mk_e", 1);
        var _Z3_rcf_mk_infinitesimal = Module["_Z3_rcf_mk_infinitesimal"] = createExportWrapper("Z3_rcf_mk_infinitesimal", 1);
        var _Z3_rcf_mk_roots = Module["_Z3_rcf_mk_roots"] = createExportWrapper("Z3_rcf_mk_roots", 4);
        var _Z3_rcf_add = Module["_Z3_rcf_add"] = createExportWrapper("Z3_rcf_add", 3);
        var _Z3_rcf_sub = Module["_Z3_rcf_sub"] = createExportWrapper("Z3_rcf_sub", 3);
        var _Z3_rcf_mul = Module["_Z3_rcf_mul"] = createExportWrapper("Z3_rcf_mul", 3);
        var _Z3_rcf_div = Module["_Z3_rcf_div"] = createExportWrapper("Z3_rcf_div", 3);
        var _Z3_rcf_neg = Module["_Z3_rcf_neg"] = createExportWrapper("Z3_rcf_neg", 2);
        var _Z3_rcf_inv = Module["_Z3_rcf_inv"] = createExportWrapper("Z3_rcf_inv", 2);
        var _Z3_rcf_power = Module["_Z3_rcf_power"] = createExportWrapper("Z3_rcf_power", 3);
        var _Z3_rcf_lt = Module["_Z3_rcf_lt"] = createExportWrapper("Z3_rcf_lt", 3);
        var _Z3_rcf_gt = Module["_Z3_rcf_gt"] = createExportWrapper("Z3_rcf_gt", 3);
        var _Z3_rcf_le = Module["_Z3_rcf_le"] = createExportWrapper("Z3_rcf_le", 3);
        var _Z3_rcf_ge = Module["_Z3_rcf_ge"] = createExportWrapper("Z3_rcf_ge", 3);
        var _Z3_rcf_eq = Module["_Z3_rcf_eq"] = createExportWrapper("Z3_rcf_eq", 3);
        var _Z3_rcf_neq = Module["_Z3_rcf_neq"] = createExportWrapper("Z3_rcf_neq", 3);
        var _Z3_rcf_num_to_string = Module["_Z3_rcf_num_to_string"] = createExportWrapper("Z3_rcf_num_to_string", 4);
        var _Z3_rcf_num_to_decimal_string = Module["_Z3_rcf_num_to_decimal_string"] = createExportWrapper("Z3_rcf_num_to_decimal_string", 3);
        var _Z3_rcf_get_numerator_denominator = Module["_Z3_rcf_get_numerator_denominator"] = createExportWrapper("Z3_rcf_get_numerator_denominator", 4);
        var _Z3_rcf_is_rational = Module["_Z3_rcf_is_rational"] = createExportWrapper("Z3_rcf_is_rational", 2);
        var _Z3_rcf_is_algebraic = Module["_Z3_rcf_is_algebraic"] = createExportWrapper("Z3_rcf_is_algebraic", 2);
        var _Z3_rcf_is_infinitesimal = Module["_Z3_rcf_is_infinitesimal"] = createExportWrapper("Z3_rcf_is_infinitesimal", 2);
        var _Z3_rcf_is_transcendental = Module["_Z3_rcf_is_transcendental"] = createExportWrapper("Z3_rcf_is_transcendental", 2);
        var _Z3_rcf_extension_index = Module["_Z3_rcf_extension_index"] = createExportWrapper("Z3_rcf_extension_index", 2);
        var _Z3_rcf_transcendental_name = Module["_Z3_rcf_transcendental_name"] = createExportWrapper("Z3_rcf_transcendental_name", 2);
        var _Z3_rcf_infinitesimal_name = Module["_Z3_rcf_infinitesimal_name"] = createExportWrapper("Z3_rcf_infinitesimal_name", 2);
        var _Z3_rcf_num_coefficients = Module["_Z3_rcf_num_coefficients"] = createExportWrapper("Z3_rcf_num_coefficients", 2);
        var _Z3_rcf_coefficient = Module["_Z3_rcf_coefficient"] = createExportWrapper("Z3_rcf_coefficient", 3);
        var _Z3_rcf_interval = Module["_Z3_rcf_interval"] = createExportWrapper("Z3_rcf_interval", 8);
        var _Z3_rcf_num_sign_conditions = Module["_Z3_rcf_num_sign_conditions"] = createExportWrapper("Z3_rcf_num_sign_conditions", 2);
        var _Z3_rcf_sign_condition_sign = Module["_Z3_rcf_sign_condition_sign"] = createExportWrapper("Z3_rcf_sign_condition_sign", 3);
        var _Z3_rcf_num_sign_condition_coefficients = Module["_Z3_rcf_num_sign_condition_coefficients"] = createExportWrapper("Z3_rcf_num_sign_condition_coefficients", 3);
        var _Z3_rcf_sign_condition_coefficient = Module["_Z3_rcf_sign_condition_coefficient"] = createExportWrapper("Z3_rcf_sign_condition_coefficient", 4);
        var _Z3_mk_goal = Module["_Z3_mk_goal"] = createExportWrapper("Z3_mk_goal", 4);
        var _Z3_goal_inc_ref = Module["_Z3_goal_inc_ref"] = createExportWrapper("Z3_goal_inc_ref", 2);
        var _Z3_goal_dec_ref = Module["_Z3_goal_dec_ref"] = createExportWrapper("Z3_goal_dec_ref", 2);
        var _Z3_goal_precision = Module["_Z3_goal_precision"] = createExportWrapper("Z3_goal_precision", 2);
        var _Z3_goal_assert = Module["_Z3_goal_assert"] = createExportWrapper("Z3_goal_assert", 3);
        var _Z3_goal_inconsistent = Module["_Z3_goal_inconsistent"] = createExportWrapper("Z3_goal_inconsistent", 2);
        var _Z3_goal_depth = Module["_Z3_goal_depth"] = createExportWrapper("Z3_goal_depth", 2);
        var _Z3_goal_reset = Module["_Z3_goal_reset"] = createExportWrapper("Z3_goal_reset", 2);
        var _Z3_goal_size = Module["_Z3_goal_size"] = createExportWrapper("Z3_goal_size", 2);
        var _Z3_goal_formula = Module["_Z3_goal_formula"] = createExportWrapper("Z3_goal_formula", 3);
        var _Z3_goal_num_exprs = Module["_Z3_goal_num_exprs"] = createExportWrapper("Z3_goal_num_exprs", 2);
        var _Z3_goal_is_decided_sat = Module["_Z3_goal_is_decided_sat"] = createExportWrapper("Z3_goal_is_decided_sat", 2);
        var _Z3_goal_is_decided_unsat = Module["_Z3_goal_is_decided_unsat"] = createExportWrapper("Z3_goal_is_decided_unsat", 2);
        var _Z3_goal_convert_model = Module["_Z3_goal_convert_model"] = createExportWrapper("Z3_goal_convert_model", 3);
        var _Z3_goal_translate = Module["_Z3_goal_translate"] = createExportWrapper("Z3_goal_translate", 3);
        var _Z3_goal_to_string = Module["_Z3_goal_to_string"] = createExportWrapper("Z3_goal_to_string", 2);
        var _Z3_goal_to_dimacs_string = Module["_Z3_goal_to_dimacs_string"] = createExportWrapper("Z3_goal_to_dimacs_string", 3);
        var _Z3_algebraic_is_value = Module["_Z3_algebraic_is_value"] = createExportWrapper("Z3_algebraic_is_value", 2);
        var _Z3_algebraic_is_pos = Module["_Z3_algebraic_is_pos"] = createExportWrapper("Z3_algebraic_is_pos", 2);
        var _Z3_algebraic_sign = Module["_Z3_algebraic_sign"] = createExportWrapper("Z3_algebraic_sign", 2);
        var _Z3_algebraic_is_neg = Module["_Z3_algebraic_is_neg"] = createExportWrapper("Z3_algebraic_is_neg", 2);
        var _Z3_algebraic_is_zero = Module["_Z3_algebraic_is_zero"] = createExportWrapper("Z3_algebraic_is_zero", 2);
        var _Z3_algebraic_add = Module["_Z3_algebraic_add"] = createExportWrapper("Z3_algebraic_add", 3);
        var _Z3_algebraic_sub = Module["_Z3_algebraic_sub"] = createExportWrapper("Z3_algebraic_sub", 3);
        var _Z3_algebraic_mul = Module["_Z3_algebraic_mul"] = createExportWrapper("Z3_algebraic_mul", 3);
        var _Z3_algebraic_div = Module["_Z3_algebraic_div"] = createExportWrapper("Z3_algebraic_div", 3);
        var _Z3_algebraic_root = Module["_Z3_algebraic_root"] = createExportWrapper("Z3_algebraic_root", 3);
        var _Z3_algebraic_power = Module["_Z3_algebraic_power"] = createExportWrapper("Z3_algebraic_power", 3);
        var _Z3_algebraic_lt = Module["_Z3_algebraic_lt"] = createExportWrapper("Z3_algebraic_lt", 3);
        var _Z3_algebraic_gt = Module["_Z3_algebraic_gt"] = createExportWrapper("Z3_algebraic_gt", 3);
        var _Z3_algebraic_le = Module["_Z3_algebraic_le"] = createExportWrapper("Z3_algebraic_le", 3);
        var _Z3_algebraic_ge = Module["_Z3_algebraic_ge"] = createExportWrapper("Z3_algebraic_ge", 3);
        var _Z3_algebraic_eq = Module["_Z3_algebraic_eq"] = createExportWrapper("Z3_algebraic_eq", 3);
        var _Z3_algebraic_neq = Module["_Z3_algebraic_neq"] = createExportWrapper("Z3_algebraic_neq", 3);
        var _Z3_algebraic_get_poly = Module["_Z3_algebraic_get_poly"] = createExportWrapper("Z3_algebraic_get_poly", 2);
        var _Z3_algebraic_get_i = Module["_Z3_algebraic_get_i"] = createExportWrapper("Z3_algebraic_get_i", 2);
        var _Z3_mk_params = Module["_Z3_mk_params"] = createExportWrapper("Z3_mk_params", 1);
        var _Z3_params_inc_ref = Module["_Z3_params_inc_ref"] = createExportWrapper("Z3_params_inc_ref", 2);
        var _Z3_params_dec_ref = Module["_Z3_params_dec_ref"] = createExportWrapper("Z3_params_dec_ref", 2);
        var _Z3_params_set_bool = Module["_Z3_params_set_bool"] = createExportWrapper("Z3_params_set_bool", 4);
        var _Z3_params_set_uint = Module["_Z3_params_set_uint"] = createExportWrapper("Z3_params_set_uint", 4);
        var _Z3_params_set_double = Module["_Z3_params_set_double"] = createExportWrapper("Z3_params_set_double", 4);
        var _Z3_params_set_symbol = Module["_Z3_params_set_symbol"] = createExportWrapper("Z3_params_set_symbol", 4);
        var _Z3_params_to_string = Module["_Z3_params_to_string"] = createExportWrapper("Z3_params_to_string", 2);
        var _Z3_params_validate = Module["_Z3_params_validate"] = createExportWrapper("Z3_params_validate", 3);
        var _Z3_param_descrs_inc_ref = Module["_Z3_param_descrs_inc_ref"] = createExportWrapper("Z3_param_descrs_inc_ref", 2);
        var _Z3_param_descrs_dec_ref = Module["_Z3_param_descrs_dec_ref"] = createExportWrapper("Z3_param_descrs_dec_ref", 2);
        var _Z3_param_descrs_get_kind = Module["_Z3_param_descrs_get_kind"] = createExportWrapper("Z3_param_descrs_get_kind", 3);
        var _Z3_param_descrs_size = Module["_Z3_param_descrs_size"] = createExportWrapper("Z3_param_descrs_size", 2);
        var _Z3_param_descrs_get_name = Module["_Z3_param_descrs_get_name"] = createExportWrapper("Z3_param_descrs_get_name", 3);
        var _Z3_param_descrs_get_documentation = Module["_Z3_param_descrs_get_documentation"] = createExportWrapper("Z3_param_descrs_get_documentation", 3);
        var _Z3_param_descrs_to_string = Module["_Z3_param_descrs_to_string"] = createExportWrapper("Z3_param_descrs_to_string", 2);
        var _Z3_mk_parser_context = Module["_Z3_mk_parser_context"] = createExportWrapper("Z3_mk_parser_context", 1);
        var _Z3_parser_context_inc_ref = Module["_Z3_parser_context_inc_ref"] = createExportWrapper("Z3_parser_context_inc_ref", 2);
        var _Z3_parser_context_dec_ref = Module["_Z3_parser_context_dec_ref"] = createExportWrapper("Z3_parser_context_dec_ref", 2);
        var _Z3_parser_context_add_sort = Module["_Z3_parser_context_add_sort"] = createExportWrapper("Z3_parser_context_add_sort", 3);
        var _Z3_parser_context_add_decl = Module["_Z3_parser_context_add_decl"] = createExportWrapper("Z3_parser_context_add_decl", 3);
        var _Z3_parser_context_from_string = Module["_Z3_parser_context_from_string"] = createExportWrapper("Z3_parser_context_from_string", 3);
        var _Z3_parse_smtlib2_string = Module["_Z3_parse_smtlib2_string"] = createExportWrapper("Z3_parse_smtlib2_string", 8);
        var _Z3_parse_smtlib2_file = Module["_Z3_parse_smtlib2_file"] = createExportWrapper("Z3_parse_smtlib2_file", 8);
        var _Z3_mk_seq_sort = Module["_Z3_mk_seq_sort"] = createExportWrapper("Z3_mk_seq_sort", 2);
        var _Z3_mk_re_sort = Module["_Z3_mk_re_sort"] = createExportWrapper("Z3_mk_re_sort", 2);
        var _Z3_mk_string = Module["_Z3_mk_string"] = createExportWrapper("Z3_mk_string", 2);
        var _Z3_mk_lstring = Module["_Z3_mk_lstring"] = createExportWrapper("Z3_mk_lstring", 3);
        var _Z3_mk_u32string = Module["_Z3_mk_u32string"] = createExportWrapper("Z3_mk_u32string", 3);
        var _Z3_mk_char = Module["_Z3_mk_char"] = createExportWrapper("Z3_mk_char", 2);
        var _Z3_mk_string_sort = Module["_Z3_mk_string_sort"] = createExportWrapper("Z3_mk_string_sort", 1);
        var _Z3_mk_char_sort = Module["_Z3_mk_char_sort"] = createExportWrapper("Z3_mk_char_sort", 1);
        var _Z3_is_seq_sort = Module["_Z3_is_seq_sort"] = createExportWrapper("Z3_is_seq_sort", 2);
        var _Z3_is_re_sort = Module["_Z3_is_re_sort"] = createExportWrapper("Z3_is_re_sort", 2);
        var _Z3_get_seq_sort_basis = Module["_Z3_get_seq_sort_basis"] = createExportWrapper("Z3_get_seq_sort_basis", 2);
        var _Z3_get_re_sort_basis = Module["_Z3_get_re_sort_basis"] = createExportWrapper("Z3_get_re_sort_basis", 2);
        var _Z3_is_char_sort = Module["_Z3_is_char_sort"] = createExportWrapper("Z3_is_char_sort", 2);
        var _Z3_is_string_sort = Module["_Z3_is_string_sort"] = createExportWrapper("Z3_is_string_sort", 2);
        var _Z3_is_string = Module["_Z3_is_string"] = createExportWrapper("Z3_is_string", 2);
        var _Z3_get_string = Module["_Z3_get_string"] = createExportWrapper("Z3_get_string", 2);
        var _Z3_get_lstring = Module["_Z3_get_lstring"] = createExportWrapper("Z3_get_lstring", 3);
        var _Z3_get_string_length = Module["_Z3_get_string_length"] = createExportWrapper("Z3_get_string_length", 2);
        var _Z3_get_string_contents = Module["_Z3_get_string_contents"] = createExportWrapper("Z3_get_string_contents", 4);
        var _Z3_mk_seq_empty = Module["_Z3_mk_seq_empty"] = createExportWrapper("Z3_mk_seq_empty", 2);
        var _Z3_mk_seq_unit = Module["_Z3_mk_seq_unit"] = createExportWrapper("Z3_mk_seq_unit", 2);
        var _Z3_mk_seq_concat = Module["_Z3_mk_seq_concat"] = createExportWrapper("Z3_mk_seq_concat", 3);
        var _Z3_mk_seq_prefix = Module["_Z3_mk_seq_prefix"] = createExportWrapper("Z3_mk_seq_prefix", 3);
        var _Z3_mk_seq_suffix = Module["_Z3_mk_seq_suffix"] = createExportWrapper("Z3_mk_seq_suffix", 3);
        var _Z3_mk_seq_contains = Module["_Z3_mk_seq_contains"] = createExportWrapper("Z3_mk_seq_contains", 3);
        var _Z3_mk_str_lt = Module["_Z3_mk_str_lt"] = createExportWrapper("Z3_mk_str_lt", 3);
        var _Z3_mk_str_le = Module["_Z3_mk_str_le"] = createExportWrapper("Z3_mk_str_le", 3);
        var _Z3_mk_string_to_code = Module["_Z3_mk_string_to_code"] = createExportWrapper("Z3_mk_string_to_code", 2);
        var _Z3_mk_string_from_code = Module["_Z3_mk_string_from_code"] = createExportWrapper("Z3_mk_string_from_code", 2);
        var _Z3_mk_seq_extract = Module["_Z3_mk_seq_extract"] = createExportWrapper("Z3_mk_seq_extract", 4);
        var _Z3_mk_seq_replace = Module["_Z3_mk_seq_replace"] = createExportWrapper("Z3_mk_seq_replace", 4);
        var _Z3_mk_seq_at = Module["_Z3_mk_seq_at"] = createExportWrapper("Z3_mk_seq_at", 3);
        var _Z3_mk_seq_nth = Module["_Z3_mk_seq_nth"] = createExportWrapper("Z3_mk_seq_nth", 3);
        var _Z3_mk_seq_length = Module["_Z3_mk_seq_length"] = createExportWrapper("Z3_mk_seq_length", 2);
        var _Z3_mk_seq_index = Module["_Z3_mk_seq_index"] = createExportWrapper("Z3_mk_seq_index", 4);
        var _Z3_mk_seq_last_index = Module["_Z3_mk_seq_last_index"] = createExportWrapper("Z3_mk_seq_last_index", 3);
        var _Z3_mk_seq_to_re = Module["_Z3_mk_seq_to_re"] = createExportWrapper("Z3_mk_seq_to_re", 2);
        var _Z3_mk_seq_in_re = Module["_Z3_mk_seq_in_re"] = createExportWrapper("Z3_mk_seq_in_re", 3);
        var _Z3_mk_int_to_str = Module["_Z3_mk_int_to_str"] = createExportWrapper("Z3_mk_int_to_str", 2);
        var _Z3_mk_str_to_int = Module["_Z3_mk_str_to_int"] = createExportWrapper("Z3_mk_str_to_int", 2);
        var _Z3_mk_ubv_to_str = Module["_Z3_mk_ubv_to_str"] = createExportWrapper("Z3_mk_ubv_to_str", 2);
        var _Z3_mk_sbv_to_str = Module["_Z3_mk_sbv_to_str"] = createExportWrapper("Z3_mk_sbv_to_str", 2);
        var _Z3_mk_re_loop = Module["_Z3_mk_re_loop"] = createExportWrapper("Z3_mk_re_loop", 4);
        var _Z3_mk_re_power = Module["_Z3_mk_re_power"] = createExportWrapper("Z3_mk_re_power", 3);
        var _Z3_mk_re_plus = Module["_Z3_mk_re_plus"] = createExportWrapper("Z3_mk_re_plus", 2);
        var _Z3_mk_re_star = Module["_Z3_mk_re_star"] = createExportWrapper("Z3_mk_re_star", 2);
        var _Z3_mk_re_option = Module["_Z3_mk_re_option"] = createExportWrapper("Z3_mk_re_option", 2);
        var _Z3_mk_re_complement = Module["_Z3_mk_re_complement"] = createExportWrapper("Z3_mk_re_complement", 2);
        var _Z3_mk_re_diff = Module["_Z3_mk_re_diff"] = createExportWrapper("Z3_mk_re_diff", 3);
        var _Z3_mk_re_union = Module["_Z3_mk_re_union"] = createExportWrapper("Z3_mk_re_union", 3);
        var _Z3_mk_re_intersect = Module["_Z3_mk_re_intersect"] = createExportWrapper("Z3_mk_re_intersect", 3);
        var _Z3_mk_re_concat = Module["_Z3_mk_re_concat"] = createExportWrapper("Z3_mk_re_concat", 3);
        var _Z3_mk_re_range = Module["_Z3_mk_re_range"] = createExportWrapper("Z3_mk_re_range", 3);
        var _Z3_mk_re_allchar = Module["_Z3_mk_re_allchar"] = createExportWrapper("Z3_mk_re_allchar", 2);
        var _Z3_mk_re_empty = Module["_Z3_mk_re_empty"] = createExportWrapper("Z3_mk_re_empty", 2);
        var _Z3_mk_re_full = Module["_Z3_mk_re_full"] = createExportWrapper("Z3_mk_re_full", 2);
        var _Z3_mk_char_le = Module["_Z3_mk_char_le"] = createExportWrapper("Z3_mk_char_le", 3);
        var _Z3_mk_char_to_int = Module["_Z3_mk_char_to_int"] = createExportWrapper("Z3_mk_char_to_int", 2);
        var _Z3_mk_char_to_bv = Module["_Z3_mk_char_to_bv"] = createExportWrapper("Z3_mk_char_to_bv", 2);
        var _Z3_mk_char_from_bv = Module["_Z3_mk_char_from_bv"] = createExportWrapper("Z3_mk_char_from_bv", 2);
        var _Z3_mk_char_is_digit = Module["_Z3_mk_char_is_digit"] = createExportWrapper("Z3_mk_char_is_digit", 2);
        var _Z3_mk_seq_map = Module["_Z3_mk_seq_map"] = createExportWrapper("Z3_mk_seq_map", 3);
        var _Z3_mk_seq_mapi = Module["_Z3_mk_seq_mapi"] = createExportWrapper("Z3_mk_seq_mapi", 4);
        var _Z3_mk_seq_foldl = Module["_Z3_mk_seq_foldl"] = createExportWrapper("Z3_mk_seq_foldl", 4);
        var _Z3_mk_seq_foldli = Module["_Z3_mk_seq_foldli"] = createExportWrapper("Z3_mk_seq_foldli", 5);
        var _Z3_global_param_set = Module["_Z3_global_param_set"] = createExportWrapper("Z3_global_param_set", 2);
        var _Z3_global_param_reset_all = Module["_Z3_global_param_reset_all"] = createExportWrapper("Z3_global_param_reset_all", 0);
        var _Z3_global_param_get = Module["_Z3_global_param_get"] = createExportWrapper("Z3_global_param_get", 2);
        var _Z3_get_global_param_descrs = Module["_Z3_get_global_param_descrs"] = createExportWrapper("Z3_get_global_param_descrs", 1);
        var _Z3_mk_config = Module["_Z3_mk_config"] = createExportWrapper("Z3_mk_config", 0);
        var _Z3_del_config = Module["_Z3_del_config"] = createExportWrapper("Z3_del_config", 1);
        var _Z3_set_param_value = Module["_Z3_set_param_value"] = createExportWrapper("Z3_set_param_value", 3);
        var _Z3_update_param_value = Module["_Z3_update_param_value"] = createExportWrapper("Z3_update_param_value", 3);
        var _Z3_mk_ast_map = Module["_Z3_mk_ast_map"] = createExportWrapper("Z3_mk_ast_map", 1);
        var _Z3_ast_map_inc_ref = Module["_Z3_ast_map_inc_ref"] = createExportWrapper("Z3_ast_map_inc_ref", 2);
        var _Z3_ast_map_dec_ref = Module["_Z3_ast_map_dec_ref"] = createExportWrapper("Z3_ast_map_dec_ref", 2);
        var _Z3_ast_map_contains = Module["_Z3_ast_map_contains"] = createExportWrapper("Z3_ast_map_contains", 3);
        var _Z3_ast_map_find = Module["_Z3_ast_map_find"] = createExportWrapper("Z3_ast_map_find", 3);
        var _Z3_ast_map_insert = Module["_Z3_ast_map_insert"] = createExportWrapper("Z3_ast_map_insert", 4);
        var _Z3_ast_map_reset = Module["_Z3_ast_map_reset"] = createExportWrapper("Z3_ast_map_reset", 2);
        var _Z3_ast_map_erase = Module["_Z3_ast_map_erase"] = createExportWrapper("Z3_ast_map_erase", 3);
        var _Z3_ast_map_size = Module["_Z3_ast_map_size"] = createExportWrapper("Z3_ast_map_size", 2);
        var _Z3_ast_map_keys = Module["_Z3_ast_map_keys"] = createExportWrapper("Z3_ast_map_keys", 2);
        var _Z3_ast_map_to_string = Module["_Z3_ast_map_to_string"] = createExportWrapper("Z3_ast_map_to_string", 2);
        var _free = Module["_free"] = createExportWrapper("free", 1);
        var _malloc = Module["_malloc"] = createExportWrapper("malloc", 1);
        var _fflush = createExportWrapper("fflush", 1);
        var __emscripten_tls_init = createExportWrapper("_emscripten_tls_init", 0);
        var __emscripten_thread_init = createExportWrapper("_emscripten_thread_init", 6);
        var __emscripten_thread_crashed = createExportWrapper("_emscripten_thread_crashed", 0);
        var _emscripten_main_thread_process_queued_calls = createExportWrapper("emscripten_main_thread_process_queued_calls", 0);
        var _emscripten_main_runtime_thread_id = createExportWrapper("emscripten_main_runtime_thread_id", 0);
        var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports["emscripten_stack_get_base"])();
        var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"])();
        var __emscripten_run_on_main_thread_js = createExportWrapper("_emscripten_run_on_main_thread_js", 5);
        var __emscripten_thread_free_data = createExportWrapper("_emscripten_thread_free_data", 1);
        var __emscripten_thread_exit = createExportWrapper("_emscripten_thread_exit", 1);
        var _strerror = createExportWrapper("strerror", 1);
        var __emscripten_check_mailbox = createExportWrapper("_emscripten_check_mailbox", 0);
        var _setThrew = createExportWrapper("setThrew", 2);
        var __emscripten_tempret_set = createExportWrapper("_emscripten_tempret_set", 1);
        var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports["emscripten_stack_init"])();
        var _emscripten_stack_set_limits = (a0, a1) => (_emscripten_stack_set_limits = wasmExports["emscripten_stack_set_limits"])(a0, a1);
        var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports["emscripten_stack_get_free"])();
        var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(a0);
        var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
        var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();
        var ___cxa_decrement_exception_refcount = createExportWrapper("__cxa_decrement_exception_refcount", 1);
        var ___cxa_increment_exception_refcount = createExportWrapper("__cxa_increment_exception_refcount", 1);
        var ___get_exception_message = createExportWrapper("__get_exception_message", 3);
        var ___cxa_can_catch = createExportWrapper("__cxa_can_catch", 3);
        var ___cxa_get_exception_ptr = createExportWrapper("__cxa_get_exception_ptr", 1);
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_ii(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vii(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_i(index) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_v(index) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiii(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_dii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiid(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viid(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vid(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_id(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_j(index) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
            return 0n;
          }
        }
        function invoke_iid(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viij(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiij(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viji(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_jii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
            return 0n;
          }
        }
        function invoke_diid(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiji(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iij(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_ji(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
            return 0n;
          }
        }
        function invoke_jiij(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
            return 0n;
          }
        }
        function invoke_diiid(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiid(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_di(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viidi(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiif(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiji(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vij(index, a1, a2) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_fii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iijii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_diii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_jiiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
            return 0n;
          }
        }
        function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiiiij(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_fiii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vijj(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vifi(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiif(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vidi(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viijji(index, a1, a2, a3, a4, a5) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiid(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (!(e instanceof EmscriptenEH))
              throw e;
            _setThrew(1, 0);
          }
        }
        Module["ccall"] = ccall;
        Module["UTF8ToString"] = UTF8ToString;
        Module["intArrayFromString"] = intArrayFromString;
        Module["FS"] = FS;
        Module["PThread"] = PThread;
        var missingLibrarySymbols = [
          "writeI53ToI64",
          "writeI53ToI64Clamped",
          "writeI53ToI64Signaling",
          "writeI53ToU64Clamped",
          "writeI53ToU64Signaling",
          "readI53FromI64",
          "readI53FromU64",
          "convertI32PairToI53",
          "convertI32PairToI53Checked",
          "convertU32PairToI53",
          "getTempRet0",
          "growMemory",
          "inetPton4",
          "inetNtop4",
          "inetPton6",
          "inetNtop6",
          "readSockaddr",
          "writeSockaddr",
          "emscriptenLog",
          "jstoi_q",
          "listenOnce",
          "autoResumeAudioContext",
          "getDynCaller",
          "dynCall",
          "runtimeKeepalivePop",
          "asmjsMangle",
          "HandleAllocator",
          "getNativeTypeSize",
          "STACK_SIZE",
          "STACK_ALIGN",
          "POINTER_SIZE",
          "ASSERTIONS",
          "cwrap",
          "uleb128Encode",
          "sigToWasmTypes",
          "generateFuncType",
          "convertJsFunctionToWasm",
          "getEmptyTableSlot",
          "updateTableMap",
          "getFunctionAddress",
          "addFunction",
          "removeFunction",
          "reallyNegative",
          "unSign",
          "strLen",
          "reSign",
          "formatString",
          "intArrayToString",
          "AsciiToString",
          "UTF16ToString",
          "stringToUTF16",
          "lengthBytesUTF16",
          "UTF32ToString",
          "stringToUTF32",
          "lengthBytesUTF32",
          "stringToNewUTF8",
          "registerKeyEventCallback",
          "maybeCStringToJsString",
          "findEventTarget",
          "getBoundingClientRect",
          "fillMouseEventData",
          "registerMouseEventCallback",
          "registerWheelEventCallback",
          "registerUiEventCallback",
          "registerFocusEventCallback",
          "fillDeviceOrientationEventData",
          "registerDeviceOrientationEventCallback",
          "fillDeviceMotionEventData",
          "registerDeviceMotionEventCallback",
          "screenOrientation",
          "fillOrientationChangeEventData",
          "registerOrientationChangeEventCallback",
          "fillFullscreenChangeEventData",
          "registerFullscreenChangeEventCallback",
          "JSEvents_requestFullscreen",
          "JSEvents_resizeCanvasForFullscreen",
          "registerRestoreOldStyle",
          "hideEverythingExceptGivenElement",
          "restoreHiddenElements",
          "setLetterbox",
          "softFullscreenResizeWebGLRenderTarget",
          "doRequestFullscreen",
          "fillPointerlockChangeEventData",
          "registerPointerlockChangeEventCallback",
          "registerPointerlockErrorEventCallback",
          "requestPointerLock",
          "fillVisibilityChangeEventData",
          "registerVisibilityChangeEventCallback",
          "registerTouchEventCallback",
          "fillGamepadEventData",
          "registerGamepadEventCallback",
          "registerBeforeUnloadEventCallback",
          "fillBatteryEventData",
          "battery",
          "registerBatteryEventCallback",
          "setCanvasElementSizeCallingThread",
          "setCanvasElementSizeMainThread",
          "setCanvasElementSize",
          "getCanvasSizeCallingThread",
          "getCanvasSizeMainThread",
          "getCanvasElementSize",
          "jsStackTrace",
          "getCallstack",
          "convertPCtoSourceLocation",
          "checkWasiClock",
          "wasiRightsToMuslOFlags",
          "wasiOFlagsToMuslOFlags",
          "safeSetTimeout",
          "setImmediateWrapped",
          "safeRequestAnimationFrame",
          "clearImmediateWrapped",
          "polyfillSetImmediate",
          "registerPostMainLoop",
          "registerPreMainLoop",
          "getPromise",
          "makePromise",
          "idsToPromises",
          "makePromiseCallback",
          "Browser_asyncPrepareDataCounter",
          "isLeapYear",
          "ydayFromDate",
          "arraySum",
          "addDays",
          "getSocketFromFD",
          "getSocketAddress",
          "FS_unlink",
          "FS_mkdirTree",
          "_setNetworkCallback",
          "heapObjectForWebGLType",
          "toTypedArrayIndex",
          "webgl_enable_ANGLE_instanced_arrays",
          "webgl_enable_OES_vertex_array_object",
          "webgl_enable_WEBGL_draw_buffers",
          "webgl_enable_WEBGL_multi_draw",
          "webgl_enable_EXT_polygon_offset_clamp",
          "webgl_enable_EXT_clip_control",
          "webgl_enable_WEBGL_polygon_mode",
          "emscriptenWebGLGet",
          "computeUnpackAlignedImageSize",
          "colorChannelsInGlTextureFormat",
          "emscriptenWebGLGetTexPixelData",
          "emscriptenWebGLGetUniform",
          "webglGetUniformLocation",
          "webglPrepareUniformLocationsBeforeFirstUse",
          "webglGetLeftBracePos",
          "emscriptenWebGLGetVertexAttrib",
          "__glGetActiveAttribOrUniform",
          "writeGLArray",
          "emscripten_webgl_destroy_context_before_on_calling_thread",
          "registerWebGlEventCallback",
          "runAndAbortIfError",
          "ALLOC_NORMAL",
          "ALLOC_STACK",
          "allocate",
          "writeStringToMemory",
          "writeAsciiToMemory",
          "setErrNo",
          "demangle",
          "stackTrace"
        ];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = [
          "run",
          "addOnPreRun",
          "addOnInit",
          "addOnPreMain",
          "addOnExit",
          "addOnPostRun",
          "addRunDependency",
          "removeRunDependency",
          "out",
          "err",
          "callMain",
          "abort",
          "wasmMemory",
          "wasmExports",
          "writeStackCookie",
          "checkStackCookie",
          "INT53_MAX",
          "INT53_MIN",
          "bigintToI53Checked",
          "stackSave",
          "stackRestore",
          "stackAlloc",
          "setTempRet0",
          "ptrToString",
          "zeroMemory",
          "exitJS",
          "getHeapMax",
          "abortOnCannotGrowMemory",
          "ENV",
          "ERRNO_CODES",
          "strError",
          "DNS",
          "Protocols",
          "Sockets",
          "timers",
          "warnOnce",
          "readEmAsmArgsArray",
          "readEmAsmArgs",
          "runEmAsmFunction",
          "runMainThreadEmAsm",
          "jstoi_s",
          "getExecutableName",
          "handleException",
          "keepRuntimeAlive",
          "runtimeKeepalivePush",
          "callUserCallback",
          "maybeExit",
          "asyncLoad",
          "alignMemory",
          "mmapAlloc",
          "wasmTable",
          "noExitRuntime",
          "getCFunc",
          "freeTableIndexes",
          "functionsInTableMap",
          "setValue",
          "getValue",
          "PATH",
          "PATH_FS",
          "UTF8Decoder",
          "UTF8ArrayToString",
          "stringToUTF8Array",
          "stringToUTF8",
          "lengthBytesUTF8",
          "stringToAscii",
          "UTF16Decoder",
          "stringToUTF8OnStack",
          "writeArrayToMemory",
          "JSEvents",
          "specialHTMLTargets",
          "findCanvasEventTarget",
          "currentFullscreenStrategy",
          "restoreOldWindowedStyle",
          "UNWIND_CACHE",
          "ExitStatus",
          "getEnvStrings",
          "doReadv",
          "doWritev",
          "initRandomFill",
          "randomFill",
          "promiseMap",
          "uncaughtExceptionCount",
          "exceptionLast",
          "exceptionCaught",
          "ExceptionInfo",
          "findMatchingCatch",
          "getExceptionMessageCommon",
          "incrementExceptionRefcount",
          "decrementExceptionRefcount",
          "getExceptionMessage",
          "Browser",
          "getPreloadedImageData__data",
          "wget",
          "MONTH_DAYS_REGULAR",
          "MONTH_DAYS_LEAP",
          "MONTH_DAYS_REGULAR_CUMULATIVE",
          "MONTH_DAYS_LEAP_CUMULATIVE",
          "SYSCALLS",
          "preloadPlugins",
          "FS_createPreloadedFile",
          "FS_modeStringToFlags",
          "FS_getMode",
          "FS_stdin_getChar_buffer",
          "FS_stdin_getChar",
          "FS_createPath",
          "FS_createDevice",
          "FS_readFile",
          "FS_createDataFile",
          "FS_createLazyFile",
          "MEMFS",
          "TTY",
          "PIPEFS",
          "SOCKFS",
          "tempFixedLengthArray",
          "miniTempWebGLFloatBuffers",
          "miniTempWebGLIntBuffers",
          "GL",
          "AL",
          "GLUT",
          "EGL",
          "GLEW",
          "IDBStore",
          "SDL",
          "SDL_gfx",
          "allocateUTF8",
          "allocateUTF8OnStack",
          "print",
          "printErr",
          "terminateWorker",
          "cleanupThread",
          "registerTLSInit",
          "spawnThread",
          "exitOnMainThread",
          "proxyToMainThread",
          "proxiedJSCallArgs",
          "invokeEntryPoint",
          "checkMailbox"
        ];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function stackCheckInit() {
          assert(!ENVIRONMENT_IS_PTHREAD);
          _emscripten_stack_init();
          writeStackCookie();
        }
        function run() {
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module);
            initRuntime();
            startWorker(Module);
            return;
          }
          stackCheckInit();
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT)
              return;
            initRuntime();
            readyPromiseResolve(Module);
            Module["onRuntimeInitialized"]?.();
            assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(() => {
              setTimeout(() => Module["setStatus"](""), 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
          checkStackCookie();
        }
        function checkUnflushedContent() {
          var oldOut = out;
          var oldErr = err;
          var has = false;
          out = err = (x) => {
            has = true;
          };
          try {
            _fflush(0);
            ["stdout", "stderr"].forEach((name) => {
              var info = FS.analyzePath("/dev/" + name);
              if (!info)
                return;
              var stream = info.object;
              var rdev = stream.rdev;
              var tty = TTY.ttys[rdev];
              if (tty?.output?.length) {
                has = true;
              }
            });
          } catch (e) {
          }
          out = oldOut;
          err = oldErr;
          if (has) {
            warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        moduleRtn = readyPromise;
        for (const prop of Object.keys(Module)) {
          if (!(prop in moduleArg)) {
            Object.defineProperty(moduleArg, prop, {
              configurable: true,
              get() {
                abort(`Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
              }
            });
          }
        }
        return moduleRtn;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = initZ3;
    else if (typeof define === "function" && define["amd"])
      define([], () => initZ3);
    var isPthread = globalThis.self?.name?.startsWith("em-pthread");
    var isNode = typeof globalThis.process?.versions?.node == "string";
    if (isNode)
      isPthread = __require("worker_threads").workerData === "em-pthread";
    isPthread && initZ3();
  }
});

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f)
        i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++)
      if (k[i] !== "default")
        __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async)
        inner = dispose;
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    if (inner)
      dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1)
          return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async)
            return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } else
          s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1)
      return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError)
      throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    init_cjs_shim();
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/async-mutex/lib/errors.js
var require_errors = __commonJS({
  "node_modules/async-mutex/lib/errors.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.E_CANCELED = exports.E_ALREADY_LOCKED = exports.E_TIMEOUT = void 0;
    exports.E_TIMEOUT = new Error("timeout while waiting for mutex to become available");
    exports.E_ALREADY_LOCKED = new Error("mutex already locked");
    exports.E_CANCELED = new Error("request for lock canceled");
  }
});

// node_modules/async-mutex/lib/Semaphore.js
var require_Semaphore = __commonJS({
  "node_modules/async-mutex/lib/Semaphore.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var errors_1 = require_errors();
    var Semaphore = (
      /** @class */
      function() {
        function Semaphore2(_maxConcurrency, _cancelError) {
          if (_cancelError === void 0) {
            _cancelError = errors_1.E_CANCELED;
          }
          this._maxConcurrency = _maxConcurrency;
          this._cancelError = _cancelError;
          this._queue = [];
          this._waiters = [];
          if (_maxConcurrency <= 0) {
            throw new Error("semaphore must be initialized to a positive value");
          }
          this._value = _maxConcurrency;
        }
        Semaphore2.prototype.acquire = function() {
          var _this = this;
          var locked = this.isLocked();
          var ticketPromise = new Promise(function(resolve, reject) {
            return _this._queue.push({ resolve, reject });
          });
          if (!locked)
            this._dispatch();
          return ticketPromise;
        };
        Semaphore2.prototype.runExclusive = function(callback) {
          return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
            var _a, value, release;
            return (0, tslib_1.__generator)(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, this.acquire()];
                case 1:
                  _a = _b.sent(), value = _a[0], release = _a[1];
                  _b.label = 2;
                case 2:
                  _b.trys.push([2, , 4, 5]);
                  return [4, callback(value)];
                case 3:
                  return [2, _b.sent()];
                case 4:
                  release();
                  return [
                    7
                    /*endfinally*/
                  ];
                case 5:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        Semaphore2.prototype.waitForUnlock = function() {
          return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
            var waitPromise;
            var _this = this;
            return (0, tslib_1.__generator)(this, function(_a) {
              if (!this.isLocked()) {
                return [2, Promise.resolve()];
              }
              waitPromise = new Promise(function(resolve) {
                return _this._waiters.push({ resolve });
              });
              return [2, waitPromise];
            });
          });
        };
        Semaphore2.prototype.isLocked = function() {
          return this._value <= 0;
        };
        Semaphore2.prototype.release = function() {
          if (this._maxConcurrency > 1) {
            throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
          }
          if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = void 0;
            releaser();
          }
        };
        Semaphore2.prototype.cancel = function() {
          var _this = this;
          this._queue.forEach(function(ticket) {
            return ticket.reject(_this._cancelError);
          });
          this._queue = [];
        };
        Semaphore2.prototype._dispatch = function() {
          var _this = this;
          var nextTicket = this._queue.shift();
          if (!nextTicket)
            return;
          var released = false;
          this._currentReleaser = function() {
            if (released)
              return;
            released = true;
            _this._value++;
            _this._resolveWaiters();
            _this._dispatch();
          };
          nextTicket.resolve([this._value--, this._currentReleaser]);
        };
        Semaphore2.prototype._resolveWaiters = function() {
          this._waiters.forEach(function(waiter) {
            return waiter.resolve();
          });
          this._waiters = [];
        };
        return Semaphore2;
      }()
    );
    exports.default = Semaphore;
  }
});

// node_modules/async-mutex/lib/Mutex.js
var require_Mutex = __commonJS({
  "node_modules/async-mutex/lib/Mutex.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Semaphore_1 = require_Semaphore();
    var Mutex = (
      /** @class */
      function() {
        function Mutex2(cancelError) {
          this._semaphore = new Semaphore_1.default(1, cancelError);
        }
        Mutex2.prototype.acquire = function() {
          return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
            var _a, releaser;
            return (0, tslib_1.__generator)(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, this._semaphore.acquire()];
                case 1:
                  _a = _b.sent(), releaser = _a[1];
                  return [2, releaser];
              }
            });
          });
        };
        Mutex2.prototype.runExclusive = function(callback) {
          return this._semaphore.runExclusive(function() {
            return callback();
          });
        };
        Mutex2.prototype.isLocked = function() {
          return this._semaphore.isLocked();
        };
        Mutex2.prototype.waitForUnlock = function() {
          return this._semaphore.waitForUnlock();
        };
        Mutex2.prototype.release = function() {
          this._semaphore.release();
        };
        Mutex2.prototype.cancel = function() {
          return this._semaphore.cancel();
        };
        return Mutex2;
      }()
    );
    exports.default = Mutex;
  }
});

// node_modules/async-mutex/lib/withTimeout.js
var require_withTimeout = __commonJS({
  "node_modules/async-mutex/lib/withTimeout.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withTimeout = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var errors_1 = require_errors();
    function withTimeout(sync, timeout, timeoutError) {
      var _this = this;
      if (timeoutError === void 0) {
        timeoutError = errors_1.E_TIMEOUT;
      }
      return {
        acquire: function() {
          return new Promise(function(resolve, reject) {
            return (0, tslib_1.__awaiter)(_this, void 0, void 0, function() {
              var isTimeout, handle, ticket, release, e_1;
              return (0, tslib_1.__generator)(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    isTimeout = false;
                    handle = setTimeout(function() {
                      isTimeout = true;
                      reject(timeoutError);
                    }, timeout);
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, sync.acquire()];
                  case 2:
                    ticket = _a.sent();
                    if (isTimeout) {
                      release = Array.isArray(ticket) ? ticket[1] : ticket;
                      release();
                    } else {
                      clearTimeout(handle);
                      resolve(ticket);
                    }
                    return [3, 4];
                  case 3:
                    e_1 = _a.sent();
                    if (!isTimeout) {
                      clearTimeout(handle);
                      reject(e_1);
                    }
                    return [3, 4];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
        },
        runExclusive: function(callback) {
          return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
            var release, ticket;
            return (0, tslib_1.__generator)(this, function(_a) {
              switch (_a.label) {
                case 0:
                  release = function() {
                    return void 0;
                  };
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, , 7, 8]);
                  return [4, this.acquire()];
                case 2:
                  ticket = _a.sent();
                  if (!Array.isArray(ticket))
                    return [3, 4];
                  release = ticket[1];
                  return [4, callback(ticket[0])];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  release = ticket;
                  return [4, callback()];
                case 5:
                  return [2, _a.sent()];
                case 6:
                  return [3, 8];
                case 7:
                  release();
                  return [
                    7
                    /*endfinally*/
                  ];
                case 8:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
        release: function() {
          sync.release();
        },
        cancel: function() {
          return sync.cancel();
        },
        waitForUnlock: function() {
          return sync.waitForUnlock();
        },
        isLocked: function() {
          return sync.isLocked();
        }
      };
    }
    exports.withTimeout = withTimeout;
  }
});

// node_modules/async-mutex/lib/tryAcquire.js
var require_tryAcquire = __commonJS({
  "node_modules/async-mutex/lib/tryAcquire.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tryAcquire = void 0;
    var errors_1 = require_errors();
    var withTimeout_1 = require_withTimeout();
    function tryAcquire(sync, alreadyAcquiredError) {
      if (alreadyAcquiredError === void 0) {
        alreadyAcquiredError = errors_1.E_ALREADY_LOCKED;
      }
      return (0, withTimeout_1.withTimeout)(sync, 0, alreadyAcquiredError);
    }
    exports.tryAcquire = tryAcquire;
  }
});

// node_modules/async-mutex/lib/index.js
var require_lib = __commonJS({
  "node_modules/async-mutex/lib/index.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tryAcquire = exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Mutex_1 = require_Mutex();
    Object.defineProperty(exports, "Mutex", { enumerable: true, get: function() {
      return Mutex_1.default;
    } });
    var Semaphore_1 = require_Semaphore();
    Object.defineProperty(exports, "Semaphore", { enumerable: true, get: function() {
      return Semaphore_1.default;
    } });
    var withTimeout_1 = require_withTimeout();
    Object.defineProperty(exports, "withTimeout", { enumerable: true, get: function() {
      return withTimeout_1.withTimeout;
    } });
    var tryAcquire_1 = require_tryAcquire();
    Object.defineProperty(exports, "tryAcquire", { enumerable: true, get: function() {
      return tryAcquire_1.tryAcquire;
    } });
    (0, tslib_1.__exportStar)(require_errors(), exports);
  }
});

// node_modules/z3-solver/build/low-level/types.__GENERATED__.js
var require_types_GENERATED = __commonJS({
  "node_modules/z3-solver/build/low-level/types.__GENERATED__.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Z3_goal_prec = exports.Z3_error_code = exports.Z3_ast_print_mode = exports.Z3_param_kind = exports.Z3_decl_kind = exports.Z3_ast_kind = exports.Z3_sort_kind = exports.Z3_parameter_kind = exports.Z3_symbol_kind = exports.Z3_lbool = void 0;
    var Z3_lbool;
    (function(Z3_lbool2) {
      Z3_lbool2[Z3_lbool2["Z3_L_FALSE"] = -1] = "Z3_L_FALSE";
      Z3_lbool2[Z3_lbool2["Z3_L_UNDEF"] = 0] = "Z3_L_UNDEF";
      Z3_lbool2[Z3_lbool2["Z3_L_TRUE"] = 1] = "Z3_L_TRUE";
    })(Z3_lbool || (exports.Z3_lbool = Z3_lbool = {}));
    var Z3_symbol_kind;
    (function(Z3_symbol_kind2) {
      Z3_symbol_kind2[Z3_symbol_kind2["Z3_INT_SYMBOL"] = 0] = "Z3_INT_SYMBOL";
      Z3_symbol_kind2[Z3_symbol_kind2["Z3_STRING_SYMBOL"] = 1] = "Z3_STRING_SYMBOL";
    })(Z3_symbol_kind || (exports.Z3_symbol_kind = Z3_symbol_kind = {}));
    var Z3_parameter_kind;
    (function(Z3_parameter_kind2) {
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_INT"] = 0] = "Z3_PARAMETER_INT";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_DOUBLE"] = 1] = "Z3_PARAMETER_DOUBLE";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_RATIONAL"] = 2] = "Z3_PARAMETER_RATIONAL";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SYMBOL"] = 3] = "Z3_PARAMETER_SYMBOL";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SORT"] = 4] = "Z3_PARAMETER_SORT";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_AST"] = 5] = "Z3_PARAMETER_AST";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_FUNC_DECL"] = 6] = "Z3_PARAMETER_FUNC_DECL";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_INTERNAL"] = 7] = "Z3_PARAMETER_INTERNAL";
      Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_ZSTRING"] = 8] = "Z3_PARAMETER_ZSTRING";
    })(Z3_parameter_kind || (exports.Z3_parameter_kind = Z3_parameter_kind = {}));
    var Z3_sort_kind;
    (function(Z3_sort_kind2) {
      Z3_sort_kind2[Z3_sort_kind2["Z3_UNINTERPRETED_SORT"] = 0] = "Z3_UNINTERPRETED_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_BOOL_SORT"] = 1] = "Z3_BOOL_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_INT_SORT"] = 2] = "Z3_INT_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_REAL_SORT"] = 3] = "Z3_REAL_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_BV_SORT"] = 4] = "Z3_BV_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_ARRAY_SORT"] = 5] = "Z3_ARRAY_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_DATATYPE_SORT"] = 6] = "Z3_DATATYPE_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_RELATION_SORT"] = 7] = "Z3_RELATION_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_FINITE_DOMAIN_SORT"] = 8] = "Z3_FINITE_DOMAIN_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_FLOATING_POINT_SORT"] = 9] = "Z3_FLOATING_POINT_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_ROUNDING_MODE_SORT"] = 10] = "Z3_ROUNDING_MODE_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_SEQ_SORT"] = 11] = "Z3_SEQ_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_RE_SORT"] = 12] = "Z3_RE_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_CHAR_SORT"] = 13] = "Z3_CHAR_SORT";
      Z3_sort_kind2[Z3_sort_kind2["Z3_TYPE_VAR"] = 14] = "Z3_TYPE_VAR";
      Z3_sort_kind2[Z3_sort_kind2["Z3_UNKNOWN_SORT"] = 1e3] = "Z3_UNKNOWN_SORT";
    })(Z3_sort_kind || (exports.Z3_sort_kind = Z3_sort_kind = {}));
    var Z3_ast_kind;
    (function(Z3_ast_kind2) {
      Z3_ast_kind2[Z3_ast_kind2["Z3_NUMERAL_AST"] = 0] = "Z3_NUMERAL_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_APP_AST"] = 1] = "Z3_APP_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_VAR_AST"] = 2] = "Z3_VAR_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_QUANTIFIER_AST"] = 3] = "Z3_QUANTIFIER_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_SORT_AST"] = 4] = "Z3_SORT_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_FUNC_DECL_AST"] = 5] = "Z3_FUNC_DECL_AST";
      Z3_ast_kind2[Z3_ast_kind2["Z3_UNKNOWN_AST"] = 1e3] = "Z3_UNKNOWN_AST";
    })(Z3_ast_kind || (exports.Z3_ast_kind = Z3_ast_kind = {}));
    var Z3_decl_kind;
    (function(Z3_decl_kind2) {
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TRUE"] = 256] = "Z3_OP_TRUE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FALSE"] = 257] = "Z3_OP_FALSE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EQ"] = 258] = "Z3_OP_EQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DISTINCT"] = 259] = "Z3_OP_DISTINCT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ITE"] = 260] = "Z3_OP_ITE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AND"] = 261] = "Z3_OP_AND";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OR"] = 262] = "Z3_OP_OR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IFF"] = 263] = "Z3_OP_IFF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR"] = 264] = "Z3_OP_XOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_NOT"] = 265] = "Z3_OP_NOT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IMPLIES"] = 266] = "Z3_OP_IMPLIES";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OEQ"] = 267] = "Z3_OP_OEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ANUM"] = 512] = "Z3_OP_ANUM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AGNUM"] = 513] = "Z3_OP_AGNUM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LE"] = 514] = "Z3_OP_LE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GE"] = 515] = "Z3_OP_GE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LT"] = 516] = "Z3_OP_LT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GT"] = 517] = "Z3_OP_GT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ADD"] = 518] = "Z3_OP_ADD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SUB"] = 519] = "Z3_OP_SUB";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UMINUS"] = 520] = "Z3_OP_UMINUS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MUL"] = 521] = "Z3_OP_MUL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DIV"] = 522] = "Z3_OP_DIV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IDIV"] = 523] = "Z3_OP_IDIV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REM"] = 524] = "Z3_OP_REM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MOD"] = 525] = "Z3_OP_MOD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_REAL"] = 526] = "Z3_OP_TO_REAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_INT"] = 527] = "Z3_OP_TO_INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IS_INT"] = 528] = "Z3_OP_IS_INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_POWER"] = 529] = "Z3_OP_POWER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ABS"] = 530] = "Z3_OP_ABS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STORE"] = 768] = "Z3_OP_STORE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SELECT"] = 769] = "Z3_OP_SELECT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONST_ARRAY"] = 770] = "Z3_OP_CONST_ARRAY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_MAP"] = 771] = "Z3_OP_ARRAY_MAP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_DEFAULT"] = 772] = "Z3_OP_ARRAY_DEFAULT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_UNION"] = 773] = "Z3_OP_SET_UNION";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_INTERSECT"] = 774] = "Z3_OP_SET_INTERSECT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_DIFFERENCE"] = 775] = "Z3_OP_SET_DIFFERENCE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_COMPLEMENT"] = 776] = "Z3_OP_SET_COMPLEMENT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_SUBSET"] = 777] = "Z3_OP_SET_SUBSET";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AS_ARRAY"] = 778] = "Z3_OP_AS_ARRAY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_EXT"] = 779] = "Z3_OP_ARRAY_EXT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_HAS_SIZE"] = 780] = "Z3_OP_SET_HAS_SIZE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_CARD"] = 781] = "Z3_OP_SET_CARD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNUM"] = 1024] = "Z3_OP_BNUM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT1"] = 1025] = "Z3_OP_BIT1";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT0"] = 1026] = "Z3_OP_BIT0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNEG"] = 1027] = "Z3_OP_BNEG";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BADD"] = 1028] = "Z3_OP_BADD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSUB"] = 1029] = "Z3_OP_BSUB";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BMUL"] = 1030] = "Z3_OP_BMUL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV"] = 1031] = "Z3_OP_BSDIV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV"] = 1032] = "Z3_OP_BUDIV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM"] = 1033] = "Z3_OP_BSREM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM"] = 1034] = "Z3_OP_BUREM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD"] = 1035] = "Z3_OP_BSMOD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV0"] = 1036] = "Z3_OP_BSDIV0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV0"] = 1037] = "Z3_OP_BUDIV0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM0"] = 1038] = "Z3_OP_BSREM0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM0"] = 1039] = "Z3_OP_BUREM0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD0"] = 1040] = "Z3_OP_BSMOD0";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULEQ"] = 1041] = "Z3_OP_ULEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLEQ"] = 1042] = "Z3_OP_SLEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGEQ"] = 1043] = "Z3_OP_UGEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGEQ"] = 1044] = "Z3_OP_SGEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULT"] = 1045] = "Z3_OP_ULT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLT"] = 1046] = "Z3_OP_SLT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGT"] = 1047] = "Z3_OP_UGT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGT"] = 1048] = "Z3_OP_SGT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BAND"] = 1049] = "Z3_OP_BAND";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BOR"] = 1050] = "Z3_OP_BOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOT"] = 1051] = "Z3_OP_BNOT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXOR"] = 1052] = "Z3_OP_BXOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNAND"] = 1053] = "Z3_OP_BNAND";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOR"] = 1054] = "Z3_OP_BNOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXNOR"] = 1055] = "Z3_OP_BXNOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONCAT"] = 1056] = "Z3_OP_CONCAT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SIGN_EXT"] = 1057] = "Z3_OP_SIGN_EXT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ZERO_EXT"] = 1058] = "Z3_OP_ZERO_EXT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXTRACT"] = 1059] = "Z3_OP_EXTRACT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REPEAT"] = 1060] = "Z3_OP_REPEAT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDOR"] = 1061] = "Z3_OP_BREDOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDAND"] = 1062] = "Z3_OP_BREDAND";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BCOMP"] = 1063] = "Z3_OP_BCOMP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSHL"] = 1064] = "Z3_OP_BSHL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BLSHR"] = 1065] = "Z3_OP_BLSHR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BASHR"] = 1066] = "Z3_OP_BASHR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_LEFT"] = 1067] = "Z3_OP_ROTATE_LEFT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_RIGHT"] = 1068] = "Z3_OP_ROTATE_RIGHT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_LEFT"] = 1069] = "Z3_OP_EXT_ROTATE_LEFT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_RIGHT"] = 1070] = "Z3_OP_EXT_ROTATE_RIGHT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT2BOOL"] = 1071] = "Z3_OP_BIT2BOOL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT2BV"] = 1072] = "Z3_OP_INT2BV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BV2INT"] = 1073] = "Z3_OP_BV2INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SBV2INT"] = 1074] = "Z3_OP_SBV2INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CARRY"] = 1075] = "Z3_OP_CARRY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR3"] = 1076] = "Z3_OP_XOR3";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_OVFL"] = 1077] = "Z3_OP_BSMUL_NO_OVFL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUMUL_NO_OVFL"] = 1078] = "Z3_OP_BUMUL_NO_OVFL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_UDFL"] = 1079] = "Z3_OP_BSMUL_NO_UDFL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV_I"] = 1080] = "Z3_OP_BSDIV_I";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV_I"] = 1081] = "Z3_OP_BUDIV_I";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM_I"] = 1082] = "Z3_OP_BSREM_I";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM_I"] = 1083] = "Z3_OP_BUREM_I";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD_I"] = 1084] = "Z3_OP_BSMOD_I";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNDEF"] = 1280] = "Z3_OP_PR_UNDEF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRUE"] = 1281] = "Z3_OP_PR_TRUE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSERTED"] = 1282] = "Z3_OP_PR_ASSERTED";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_GOAL"] = 1283] = "Z3_OP_PR_GOAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS"] = 1284] = "Z3_OP_PR_MODUS_PONENS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REFLEXIVITY"] = 1285] = "Z3_OP_PR_REFLEXIVITY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SYMMETRY"] = 1286] = "Z3_OP_PR_SYMMETRY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY"] = 1287] = "Z3_OP_PR_TRANSITIVITY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY_STAR"] = 1288] = "Z3_OP_PR_TRANSITIVITY_STAR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MONOTONICITY"] = 1289] = "Z3_OP_PR_MONOTONICITY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INTRO"] = 1290] = "Z3_OP_PR_QUANT_INTRO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_BIND"] = 1291] = "Z3_OP_PR_BIND";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DISTRIBUTIVITY"] = 1292] = "Z3_OP_PR_DISTRIBUTIVITY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_AND_ELIM"] = 1293] = "Z3_OP_PR_AND_ELIM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NOT_OR_ELIM"] = 1294] = "Z3_OP_PR_NOT_OR_ELIM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE"] = 1295] = "Z3_OP_PR_REWRITE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE_STAR"] = 1296] = "Z3_OP_PR_REWRITE_STAR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PULL_QUANT"] = 1297] = "Z3_OP_PR_PULL_QUANT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PUSH_QUANT"] = 1298] = "Z3_OP_PR_PUSH_QUANT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ELIM_UNUSED_VARS"] = 1299] = "Z3_OP_PR_ELIM_UNUSED_VARS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DER"] = 1300] = "Z3_OP_PR_DER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INST"] = 1301] = "Z3_OP_PR_QUANT_INST";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPOTHESIS"] = 1302] = "Z3_OP_PR_HYPOTHESIS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA"] = 1303] = "Z3_OP_PR_LEMMA";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNIT_RESOLUTION"] = 1304] = "Z3_OP_PR_UNIT_RESOLUTION";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_TRUE"] = 1305] = "Z3_OP_PR_IFF_TRUE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_FALSE"] = 1306] = "Z3_OP_PR_IFF_FALSE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_COMMUTATIVITY"] = 1307] = "Z3_OP_PR_COMMUTATIVITY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_AXIOM"] = 1308] = "Z3_OP_PR_DEF_AXIOM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSUMPTION_ADD"] = 1309] = "Z3_OP_PR_ASSUMPTION_ADD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA_ADD"] = 1310] = "Z3_OP_PR_LEMMA_ADD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REDUNDANT_DEL"] = 1311] = "Z3_OP_PR_REDUNDANT_DEL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_CLAUSE_TRAIL"] = 1312] = "Z3_OP_PR_CLAUSE_TRAIL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_INTRO"] = 1313] = "Z3_OP_PR_DEF_INTRO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_APPLY_DEF"] = 1314] = "Z3_OP_PR_APPLY_DEF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_OEQ"] = 1315] = "Z3_OP_PR_IFF_OEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_POS"] = 1316] = "Z3_OP_PR_NNF_POS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_NEG"] = 1317] = "Z3_OP_PR_NNF_NEG";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SKOLEMIZE"] = 1318] = "Z3_OP_PR_SKOLEMIZE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS_OEQ"] = 1319] = "Z3_OP_PR_MODUS_PONENS_OEQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TH_LEMMA"] = 1320] = "Z3_OP_PR_TH_LEMMA";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPER_RESOLVE"] = 1321] = "Z3_OP_PR_HYPER_RESOLVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_STORE"] = 1536] = "Z3_OP_RA_STORE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_EMPTY"] = 1537] = "Z3_OP_RA_EMPTY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_IS_EMPTY"] = 1538] = "Z3_OP_RA_IS_EMPTY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_JOIN"] = 1539] = "Z3_OP_RA_JOIN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_UNION"] = 1540] = "Z3_OP_RA_UNION";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_WIDEN"] = 1541] = "Z3_OP_RA_WIDEN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_PROJECT"] = 1542] = "Z3_OP_RA_PROJECT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_FILTER"] = 1543] = "Z3_OP_RA_FILTER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_NEGATION_FILTER"] = 1544] = "Z3_OP_RA_NEGATION_FILTER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_RENAME"] = 1545] = "Z3_OP_RA_RENAME";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_COMPLEMENT"] = 1546] = "Z3_OP_RA_COMPLEMENT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_SELECT"] = 1547] = "Z3_OP_RA_SELECT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_CLONE"] = 1548] = "Z3_OP_RA_CLONE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_CONSTANT"] = 1549] = "Z3_OP_FD_CONSTANT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_LT"] = 1550] = "Z3_OP_FD_LT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_UNIT"] = 1551] = "Z3_OP_SEQ_UNIT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EMPTY"] = 1552] = "Z3_OP_SEQ_EMPTY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONCAT"] = 1553] = "Z3_OP_SEQ_CONCAT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_PREFIX"] = 1554] = "Z3_OP_SEQ_PREFIX";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_SUFFIX"] = 1555] = "Z3_OP_SEQ_SUFFIX";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONTAINS"] = 1556] = "Z3_OP_SEQ_CONTAINS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EXTRACT"] = 1557] = "Z3_OP_SEQ_EXTRACT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE"] = 1558] = "Z3_OP_SEQ_REPLACE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE"] = 1559] = "Z3_OP_SEQ_REPLACE_RE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE_ALL"] = 1560] = "Z3_OP_SEQ_REPLACE_RE_ALL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_ALL"] = 1561] = "Z3_OP_SEQ_REPLACE_ALL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_AT"] = 1562] = "Z3_OP_SEQ_AT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_NTH"] = 1563] = "Z3_OP_SEQ_NTH";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LENGTH"] = 1564] = "Z3_OP_SEQ_LENGTH";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_INDEX"] = 1565] = "Z3_OP_SEQ_INDEX";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LAST_INDEX"] = 1566] = "Z3_OP_SEQ_LAST_INDEX";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_TO_RE"] = 1567] = "Z3_OP_SEQ_TO_RE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_IN_RE"] = 1568] = "Z3_OP_SEQ_IN_RE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_MAP"] = 1569] = "Z3_OP_SEQ_MAP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_MAPI"] = 1570] = "Z3_OP_SEQ_MAPI";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_FOLDL"] = 1571] = "Z3_OP_SEQ_FOLDL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_FOLDLI"] = 1572] = "Z3_OP_SEQ_FOLDLI";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_INT"] = 1573] = "Z3_OP_STR_TO_INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT_TO_STR"] = 1574] = "Z3_OP_INT_TO_STR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UBV_TO_STR"] = 1575] = "Z3_OP_UBV_TO_STR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SBV_TO_STR"] = 1576] = "Z3_OP_SBV_TO_STR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_CODE"] = 1577] = "Z3_OP_STR_TO_CODE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_FROM_CODE"] = 1578] = "Z3_OP_STR_FROM_CODE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LT"] = 1579] = "Z3_OP_STRING_LT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LE"] = 1580] = "Z3_OP_STRING_LE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_PLUS"] = 1581] = "Z3_OP_RE_PLUS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_STAR"] = 1582] = "Z3_OP_RE_STAR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OPTION"] = 1583] = "Z3_OP_RE_OPTION";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_CONCAT"] = 1584] = "Z3_OP_RE_CONCAT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_UNION"] = 1585] = "Z3_OP_RE_UNION";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_RANGE"] = 1586] = "Z3_OP_RE_RANGE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DIFF"] = 1587] = "Z3_OP_RE_DIFF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_INTERSECT"] = 1588] = "Z3_OP_RE_INTERSECT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_LOOP"] = 1589] = "Z3_OP_RE_LOOP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_POWER"] = 1590] = "Z3_OP_RE_POWER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_COMPLEMENT"] = 1591] = "Z3_OP_RE_COMPLEMENT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_EMPTY_SET"] = 1592] = "Z3_OP_RE_EMPTY_SET";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_SET"] = 1593] = "Z3_OP_RE_FULL_SET";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_CHAR_SET"] = 1594] = "Z3_OP_RE_FULL_CHAR_SET";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OF_PRED"] = 1595] = "Z3_OP_RE_OF_PRED";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_REVERSE"] = 1596] = "Z3_OP_RE_REVERSE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DERIVATIVE"] = 1597] = "Z3_OP_RE_DERIVATIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_CONST"] = 1598] = "Z3_OP_CHAR_CONST";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_LE"] = 1599] = "Z3_OP_CHAR_LE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_INT"] = 1600] = "Z3_OP_CHAR_TO_INT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_BV"] = 1601] = "Z3_OP_CHAR_TO_BV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_FROM_BV"] = 1602] = "Z3_OP_CHAR_FROM_BV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_IS_DIGIT"] = 1603] = "Z3_OP_CHAR_IS_DIGIT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL"] = 1792] = "Z3_OP_LABEL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL_LIT"] = 1793] = "Z3_OP_LABEL_LIT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_CONSTRUCTOR"] = 2048] = "Z3_OP_DT_CONSTRUCTOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_RECOGNISER"] = 2049] = "Z3_OP_DT_RECOGNISER";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_IS"] = 2050] = "Z3_OP_DT_IS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_ACCESSOR"] = 2051] = "Z3_OP_DT_ACCESSOR";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_UPDATE_FIELD"] = 2052] = "Z3_OP_DT_UPDATE_FIELD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_MOST"] = 2304] = "Z3_OP_PB_AT_MOST";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_LEAST"] = 2305] = "Z3_OP_PB_AT_LEAST";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_LE"] = 2306] = "Z3_OP_PB_LE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_GE"] = 2307] = "Z3_OP_PB_GE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_EQ"] = 2308] = "Z3_OP_PB_EQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_LO"] = 40960] = "Z3_OP_SPECIAL_RELATION_LO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PO"] = 40961] = "Z3_OP_SPECIAL_RELATION_PO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PLO"] = 40962] = "Z3_OP_SPECIAL_RELATION_PLO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TO"] = 40963] = "Z3_OP_SPECIAL_RELATION_TO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TC"] = 40964] = "Z3_OP_SPECIAL_RELATION_TC";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TRC"] = 40965] = "Z3_OP_SPECIAL_RELATION_TRC";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN"] = 45056] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY"] = 45057] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_POSITIVE"] = 45058] = "Z3_OP_FPA_RM_TOWARD_POSITIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_NEGATIVE"] = 45059] = "Z3_OP_FPA_RM_TOWARD_NEGATIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_ZERO"] = 45060] = "Z3_OP_FPA_RM_TOWARD_ZERO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NUM"] = 45061] = "Z3_OP_FPA_NUM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_INF"] = 45062] = "Z3_OP_FPA_PLUS_INF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_INF"] = 45063] = "Z3_OP_FPA_MINUS_INF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NAN"] = 45064] = "Z3_OP_FPA_NAN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_ZERO"] = 45065] = "Z3_OP_FPA_PLUS_ZERO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_ZERO"] = 45066] = "Z3_OP_FPA_MINUS_ZERO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ADD"] = 45067] = "Z3_OP_FPA_ADD";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SUB"] = 45068] = "Z3_OP_FPA_SUB";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NEG"] = 45069] = "Z3_OP_FPA_NEG";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MUL"] = 45070] = "Z3_OP_FPA_MUL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_DIV"] = 45071] = "Z3_OP_FPA_DIV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_REM"] = 45072] = "Z3_OP_FPA_REM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ABS"] = 45073] = "Z3_OP_FPA_ABS";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MIN"] = 45074] = "Z3_OP_FPA_MIN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MAX"] = 45075] = "Z3_OP_FPA_MAX";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FMA"] = 45076] = "Z3_OP_FPA_FMA";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SQRT"] = 45077] = "Z3_OP_FPA_SQRT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ROUND_TO_INTEGRAL"] = 45078] = "Z3_OP_FPA_ROUND_TO_INTEGRAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_EQ"] = 45079] = "Z3_OP_FPA_EQ";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LT"] = 45080] = "Z3_OP_FPA_LT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GT"] = 45081] = "Z3_OP_FPA_GT";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LE"] = 45082] = "Z3_OP_FPA_LE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GE"] = 45083] = "Z3_OP_FPA_GE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NAN"] = 45084] = "Z3_OP_FPA_IS_NAN";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_INF"] = 45085] = "Z3_OP_FPA_IS_INF";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_ZERO"] = 45086] = "Z3_OP_FPA_IS_ZERO";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NORMAL"] = 45087] = "Z3_OP_FPA_IS_NORMAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_SUBNORMAL"] = 45088] = "Z3_OP_FPA_IS_SUBNORMAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NEGATIVE"] = 45089] = "Z3_OP_FPA_IS_NEGATIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_POSITIVE"] = 45090] = "Z3_OP_FPA_IS_POSITIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FP"] = 45091] = "Z3_OP_FPA_FP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP"] = 45092] = "Z3_OP_FPA_TO_FP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP_UNSIGNED"] = 45093] = "Z3_OP_FPA_TO_FP_UNSIGNED";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_UBV"] = 45094] = "Z3_OP_FPA_TO_UBV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_SBV"] = 45095] = "Z3_OP_FPA_TO_SBV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_REAL"] = 45096] = "Z3_OP_FPA_TO_REAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_IEEE_BV"] = 45097] = "Z3_OP_FPA_TO_IEEE_BV";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BVWRAP"] = 45098] = "Z3_OP_FPA_BVWRAP";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BV2RM"] = 45099] = "Z3_OP_FPA_BV2RM";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INTERNAL"] = 45100] = "Z3_OP_INTERNAL";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RECURSIVE"] = 45101] = "Z3_OP_RECURSIVE";
      Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UNINTERPRETED"] = 45102] = "Z3_OP_UNINTERPRETED";
    })(Z3_decl_kind || (exports.Z3_decl_kind = Z3_decl_kind = {}));
    var Z3_param_kind;
    (function(Z3_param_kind2) {
      Z3_param_kind2[Z3_param_kind2["Z3_PK_UINT"] = 0] = "Z3_PK_UINT";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_BOOL"] = 1] = "Z3_PK_BOOL";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_DOUBLE"] = 2] = "Z3_PK_DOUBLE";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_SYMBOL"] = 3] = "Z3_PK_SYMBOL";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_STRING"] = 4] = "Z3_PK_STRING";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_OTHER"] = 5] = "Z3_PK_OTHER";
      Z3_param_kind2[Z3_param_kind2["Z3_PK_INVALID"] = 6] = "Z3_PK_INVALID";
    })(Z3_param_kind || (exports.Z3_param_kind = Z3_param_kind = {}));
    var Z3_ast_print_mode;
    (function(Z3_ast_print_mode2) {
      Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB_FULL"] = 0] = "Z3_PRINT_SMTLIB_FULL";
      Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_LOW_LEVEL"] = 1] = "Z3_PRINT_LOW_LEVEL";
      Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB2_COMPLIANT"] = 2] = "Z3_PRINT_SMTLIB2_COMPLIANT";
    })(Z3_ast_print_mode || (exports.Z3_ast_print_mode = Z3_ast_print_mode = {}));
    var Z3_error_code;
    (function(Z3_error_code2) {
      Z3_error_code2[Z3_error_code2["Z3_OK"] = 0] = "Z3_OK";
      Z3_error_code2[Z3_error_code2["Z3_SORT_ERROR"] = 1] = "Z3_SORT_ERROR";
      Z3_error_code2[Z3_error_code2["Z3_IOB"] = 2] = "Z3_IOB";
      Z3_error_code2[Z3_error_code2["Z3_INVALID_ARG"] = 3] = "Z3_INVALID_ARG";
      Z3_error_code2[Z3_error_code2["Z3_PARSER_ERROR"] = 4] = "Z3_PARSER_ERROR";
      Z3_error_code2[Z3_error_code2["Z3_NO_PARSER"] = 5] = "Z3_NO_PARSER";
      Z3_error_code2[Z3_error_code2["Z3_INVALID_PATTERN"] = 6] = "Z3_INVALID_PATTERN";
      Z3_error_code2[Z3_error_code2["Z3_MEMOUT_FAIL"] = 7] = "Z3_MEMOUT_FAIL";
      Z3_error_code2[Z3_error_code2["Z3_FILE_ACCESS_ERROR"] = 8] = "Z3_FILE_ACCESS_ERROR";
      Z3_error_code2[Z3_error_code2["Z3_INTERNAL_FATAL"] = 9] = "Z3_INTERNAL_FATAL";
      Z3_error_code2[Z3_error_code2["Z3_INVALID_USAGE"] = 10] = "Z3_INVALID_USAGE";
      Z3_error_code2[Z3_error_code2["Z3_DEC_REF_ERROR"] = 11] = "Z3_DEC_REF_ERROR";
      Z3_error_code2[Z3_error_code2["Z3_EXCEPTION"] = 12] = "Z3_EXCEPTION";
    })(Z3_error_code || (exports.Z3_error_code = Z3_error_code = {}));
    var Z3_goal_prec;
    (function(Z3_goal_prec2) {
      Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_PRECISE"] = 0] = "Z3_GOAL_PRECISE";
      Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER"] = 1] = "Z3_GOAL_UNDER";
      Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_OVER"] = 2] = "Z3_GOAL_OVER";
      Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER_OVER"] = 3] = "Z3_GOAL_UNDER_OVER";
    })(Z3_goal_prec || (exports.Z3_goal_prec = Z3_goal_prec = {}));
  }
});

// node_modules/z3-solver/build/low-level/wrapper.__GENERATED__.js
var require_wrapper_GENERATED = __commonJS({
  "node_modules/z3-solver/build/low-level/wrapper.__GENERATED__.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = init;
    async function init(initModule) {
      let Mod = await initModule();
      function intArrayToByteArr(ints) {
        return new Uint8Array(new Uint32Array(ints).buffer);
      }
      function boolArrayToByteArr(bools) {
        return bools.map((b) => b ? 1 : 0);
      }
      function readUintArray(address, count) {
        return Array.from(new Uint32Array(Mod.HEAPU32.buffer, address, count));
      }
      let outAddress = Mod._malloc(24);
      let outUintArray = new Uint32Array(Mod.HEAPU32.buffer, outAddress, 4);
      let getOutUint = (i) => outUintArray[i];
      let outIntArray = new Int32Array(Mod.HEAPU32.buffer, outAddress, 4);
      let getOutInt = (i) => outIntArray[i];
      let outUint64Array = new BigUint64Array(Mod.HEAPU32.buffer, outAddress, 2);
      let getOutUint64 = (i) => outUint64Array[i];
      let outInt64Array = new BigInt64Array(Mod.HEAPU32.buffer, outAddress, 2);
      let getOutInt64 = (i) => outInt64Array[i];
      return {
        em: Mod,
        Z3: {
          mk_context: function(c) {
            let ctx = Mod._Z3_mk_context(c);
            Mod._set_noop_error_handler(ctx);
            return ctx;
          },
          mk_context_rc: function(c) {
            let ctx = Mod._Z3_mk_context_rc(c);
            Mod._set_noop_error_handler(ctx);
            return ctx;
          },
          global_param_set: function(param_id, param_value) {
            return Mod.ccall("Z3_global_param_set", "void", ["string", "string"], [param_id, param_value]);
          },
          global_param_reset_all: Mod._Z3_global_param_reset_all,
          global_param_get: function(param_id) {
            let ret = Mod.ccall("Z3_global_param_get", "boolean", ["string", "number"], [param_id, outAddress]);
            if (!ret) {
              return null;
            }
            return Mod.UTF8ToString(getOutUint(0));
          },
          mk_config: Mod._Z3_mk_config,
          del_config: Mod._Z3_del_config,
          set_param_value: function(c, param_id, param_value) {
            return Mod.ccall("Z3_set_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
          },
          del_context: Mod._Z3_del_context,
          inc_ref: Mod._Z3_inc_ref,
          dec_ref: Mod._Z3_dec_ref,
          update_param_value: function(c, param_id, param_value) {
            return Mod.ccall("Z3_update_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
          },
          get_global_param_descrs: Mod._Z3_get_global_param_descrs,
          interrupt: Mod._Z3_interrupt,
          enable_concurrent_dec_ref: Mod._Z3_enable_concurrent_dec_ref,
          mk_params: Mod._Z3_mk_params,
          params_inc_ref: Mod._Z3_params_inc_ref,
          params_dec_ref: Mod._Z3_params_dec_ref,
          params_set_bool: Mod._Z3_params_set_bool,
          params_set_uint: Mod._Z3_params_set_uint,
          params_set_double: Mod._Z3_params_set_double,
          params_set_symbol: Mod._Z3_params_set_symbol,
          params_to_string: function(c, p) {
            return Mod.ccall("Z3_params_to_string", "string", ["number", "number"], [c, p]);
          },
          params_validate: Mod._Z3_params_validate,
          param_descrs_inc_ref: Mod._Z3_param_descrs_inc_ref,
          param_descrs_dec_ref: Mod._Z3_param_descrs_dec_ref,
          param_descrs_get_kind: Mod._Z3_param_descrs_get_kind,
          param_descrs_size: function(c, p) {
            let ret = Mod.ccall("Z3_param_descrs_size", "number", ["number", "number"], [c, p]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          param_descrs_get_name: Mod._Z3_param_descrs_get_name,
          param_descrs_get_documentation: function(c, p, s) {
            return Mod.ccall("Z3_param_descrs_get_documentation", "string", ["number", "number", "number"], [c, p, s]);
          },
          param_descrs_to_string: function(c, p) {
            return Mod.ccall("Z3_param_descrs_to_string", "string", ["number", "number"], [c, p]);
          },
          mk_int_symbol: Mod._Z3_mk_int_symbol,
          mk_string_symbol: function(c, s) {
            return Mod.ccall("Z3_mk_string_symbol", "number", ["number", "string"], [c, s]);
          },
          mk_uninterpreted_sort: Mod._Z3_mk_uninterpreted_sort,
          mk_type_variable: Mod._Z3_mk_type_variable,
          mk_bool_sort: Mod._Z3_mk_bool_sort,
          mk_int_sort: Mod._Z3_mk_int_sort,
          mk_real_sort: Mod._Z3_mk_real_sort,
          mk_bv_sort: Mod._Z3_mk_bv_sort,
          mk_finite_domain_sort: Mod._Z3_mk_finite_domain_sort,
          mk_array_sort: Mod._Z3_mk_array_sort,
          mk_array_sort_n: function(c, domain, range) {
            return Mod.ccall("Z3_mk_array_sort_n", "number", ["number", "number", "array", "number"], [
              c,
              domain.length,
              intArrayToByteArr(domain),
              range
            ]);
          },
          mk_tuple_sort: function(c, mk_tuple_name, field_names, field_sorts) {
            if (field_names.length !== field_sorts.length) {
              throw new TypeError(`field_names and field_sorts must be the same length (got ${field_names.length} and {field_sorts.length})`);
            }
            let outArray_proj_decl = Mod._malloc(4 * field_names.length);
            try {
              let ret = Mod.ccall("Z3_mk_tuple_sort", "number", [
                "number",
                "number",
                "number",
                "array",
                "array",
                "number",
                "number"
              ], [
                c,
                mk_tuple_name,
                field_names.length,
                intArrayToByteArr(field_names),
                intArrayToByteArr(field_sorts),
                outAddress,
                outArray_proj_decl
              ]);
              return {
                rv: ret,
                mk_tuple_decl: getOutUint(0),
                proj_decl: readUintArray(outArray_proj_decl, field_names.length)
              };
            } finally {
              Mod._free(outArray_proj_decl);
            }
          },
          mk_enumeration_sort: function(c, name, enum_names) {
            let outArray_enum_consts = Mod._malloc(4 * enum_names.length);
            try {
              let outArray_enum_testers = Mod._malloc(4 * enum_names.length);
              try {
                let ret = Mod.ccall("Z3_mk_enumeration_sort", "number", ["number", "number", "number", "array", "number", "number"], [
                  c,
                  name,
                  enum_names.length,
                  intArrayToByteArr(enum_names),
                  outArray_enum_consts,
                  outArray_enum_testers
                ]);
                return {
                  rv: ret,
                  enum_consts: readUintArray(outArray_enum_consts, enum_names.length),
                  enum_testers: readUintArray(outArray_enum_testers, enum_names.length)
                };
              } finally {
                Mod._free(outArray_enum_testers);
              }
            } finally {
              Mod._free(outArray_enum_consts);
            }
          },
          mk_list_sort: function(c, name, elem_sort) {
            let ret = Mod.ccall("Z3_mk_list_sort", "number", [
              "number",
              "number",
              "number",
              "number",
              "number",
              "number",
              "number",
              "number",
              "number"
            ], [
              c,
              name,
              elem_sort,
              outAddress,
              outAddress + 4,
              outAddress + 8,
              outAddress + 12,
              outAddress + 16,
              outAddress + 20
            ]);
            return {
              rv: ret,
              nil_decl: getOutUint(0),
              is_nil_decl: getOutUint(1),
              cons_decl: getOutUint(2),
              is_cons_decl: getOutUint(3),
              head_decl: getOutUint(4),
              tail_decl: getOutUint(5)
            };
          },
          mk_constructor: function(c, name, recognizer, field_names, sorts, sort_refs) {
            if (field_names.length !== sorts.length) {
              throw new TypeError(`field_names and sorts must be the same length (got ${field_names.length} and {sorts.length})`);
            }
            if (field_names.length !== sort_refs.length) {
              throw new TypeError(`field_names and sort_refs must be the same length (got ${field_names.length} and {sort_refs.length})`);
            }
            return Mod.ccall("Z3_mk_constructor", "number", ["number", "number", "number", "number", "array", "array", "array"], [
              c,
              name,
              recognizer,
              field_names.length,
              intArrayToByteArr(field_names),
              intArrayToByteArr(sorts),
              intArrayToByteArr(sort_refs)
            ]);
          },
          constructor_num_fields: function(c, constr) {
            let ret = Mod.ccall("Z3_constructor_num_fields", "number", ["number", "number"], [c, constr]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          del_constructor: Mod._Z3_del_constructor,
          mk_datatype: function(c, name, constructors) {
            return Mod.ccall("Z3_mk_datatype", "number", ["number", "number", "number", "array"], [
              c,
              name,
              constructors.length,
              intArrayToByteArr(constructors)
            ]);
          },
          mk_datatype_sort: Mod._Z3_mk_datatype_sort,
          mk_constructor_list: function(c, constructors) {
            return Mod.ccall("Z3_mk_constructor_list", "number", ["number", "number", "array"], [
              c,
              constructors.length,
              intArrayToByteArr(constructors)
            ]);
          },
          del_constructor_list: Mod._Z3_del_constructor_list,
          mk_datatypes: function(c, sort_names, constructor_lists) {
            if (sort_names.length !== constructor_lists.length) {
              throw new TypeError(`sort_names and constructor_lists must be the same length (got ${sort_names.length} and {constructor_lists.length})`);
            }
            let outArray_sorts = Mod._malloc(4 * sort_names.length);
            try {
              let ret = Mod.ccall("Z3_mk_datatypes", "void", ["number", "number", "array", "number", "array"], [
                c,
                sort_names.length,
                intArrayToByteArr(sort_names),
                outArray_sorts,
                intArrayToByteArr(constructor_lists)
              ]);
              return readUintArray(outArray_sorts, sort_names.length);
            } finally {
              Mod._free(outArray_sorts);
            }
          },
          query_constructor: function(c, constr, num_fields) {
            let outArray_accessors = Mod._malloc(4 * num_fields);
            try {
              let ret = Mod.ccall("Z3_query_constructor", "void", ["number", "number", "number", "number", "number", "number"], [
                c,
                constr,
                num_fields,
                outAddress,
                outAddress + 4,
                outArray_accessors
              ]);
              return {
                constructor: getOutUint(0),
                tester: getOutUint(1),
                accessors: readUintArray(outArray_accessors, num_fields)
              };
            } finally {
              Mod._free(outArray_accessors);
            }
          },
          mk_func_decl: function(c, s, domain, range) {
            return Mod.ccall("Z3_mk_func_decl", "number", ["number", "number", "number", "array", "number"], [
              c,
              s,
              domain.length,
              intArrayToByteArr(domain),
              range
            ]);
          },
          mk_app: function(c, d, args) {
            return Mod.ccall("Z3_mk_app", "number", ["number", "number", "number", "array"], [c, d, args.length, intArrayToByteArr(args)]);
          },
          mk_const: Mod._Z3_mk_const,
          mk_fresh_func_decl: function(c, prefix, domain, range) {
            return Mod.ccall("Z3_mk_fresh_func_decl", "number", ["number", "string", "number", "array", "number"], [
              c,
              prefix,
              domain.length,
              intArrayToByteArr(domain),
              range
            ]);
          },
          mk_fresh_const: function(c, prefix, ty) {
            return Mod.ccall("Z3_mk_fresh_const", "number", ["number", "string", "number"], [c, prefix, ty]);
          },
          mk_rec_func_decl: function(c, s, domain, range) {
            return Mod.ccall("Z3_mk_rec_func_decl", "number", ["number", "number", "number", "array", "number"], [
              c,
              s,
              domain.length,
              intArrayToByteArr(domain),
              range
            ]);
          },
          add_rec_def: function(c, f, args, body) {
            return Mod.ccall("Z3_add_rec_def", "void", ["number", "number", "number", "array", "number"], [
              c,
              f,
              args.length,
              intArrayToByteArr(args),
              body
            ]);
          },
          mk_true: Mod._Z3_mk_true,
          mk_false: Mod._Z3_mk_false,
          mk_eq: Mod._Z3_mk_eq,
          mk_distinct: function(c, args) {
            return Mod.ccall("Z3_mk_distinct", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_not: Mod._Z3_mk_not,
          mk_ite: Mod._Z3_mk_ite,
          mk_iff: Mod._Z3_mk_iff,
          mk_implies: Mod._Z3_mk_implies,
          mk_xor: Mod._Z3_mk_xor,
          mk_and: function(c, args) {
            return Mod.ccall("Z3_mk_and", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_or: function(c, args) {
            return Mod.ccall("Z3_mk_or", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_add: function(c, args) {
            return Mod.ccall("Z3_mk_add", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_mul: function(c, args) {
            return Mod.ccall("Z3_mk_mul", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_sub: function(c, args) {
            return Mod.ccall("Z3_mk_sub", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_unary_minus: Mod._Z3_mk_unary_minus,
          mk_div: Mod._Z3_mk_div,
          mk_mod: Mod._Z3_mk_mod,
          mk_rem: Mod._Z3_mk_rem,
          mk_power: Mod._Z3_mk_power,
          mk_abs: Mod._Z3_mk_abs,
          mk_lt: Mod._Z3_mk_lt,
          mk_le: Mod._Z3_mk_le,
          mk_gt: Mod._Z3_mk_gt,
          mk_ge: Mod._Z3_mk_ge,
          mk_divides: Mod._Z3_mk_divides,
          mk_int2real: Mod._Z3_mk_int2real,
          mk_real2int: Mod._Z3_mk_real2int,
          mk_is_int: Mod._Z3_mk_is_int,
          mk_bvnot: Mod._Z3_mk_bvnot,
          mk_bvredand: Mod._Z3_mk_bvredand,
          mk_bvredor: Mod._Z3_mk_bvredor,
          mk_bvand: Mod._Z3_mk_bvand,
          mk_bvor: Mod._Z3_mk_bvor,
          mk_bvxor: Mod._Z3_mk_bvxor,
          mk_bvnand: Mod._Z3_mk_bvnand,
          mk_bvnor: Mod._Z3_mk_bvnor,
          mk_bvxnor: Mod._Z3_mk_bvxnor,
          mk_bvneg: Mod._Z3_mk_bvneg,
          mk_bvadd: Mod._Z3_mk_bvadd,
          mk_bvsub: Mod._Z3_mk_bvsub,
          mk_bvmul: Mod._Z3_mk_bvmul,
          mk_bvudiv: Mod._Z3_mk_bvudiv,
          mk_bvsdiv: Mod._Z3_mk_bvsdiv,
          mk_bvurem: Mod._Z3_mk_bvurem,
          mk_bvsrem: Mod._Z3_mk_bvsrem,
          mk_bvsmod: Mod._Z3_mk_bvsmod,
          mk_bvult: Mod._Z3_mk_bvult,
          mk_bvslt: Mod._Z3_mk_bvslt,
          mk_bvule: Mod._Z3_mk_bvule,
          mk_bvsle: Mod._Z3_mk_bvsle,
          mk_bvuge: Mod._Z3_mk_bvuge,
          mk_bvsge: Mod._Z3_mk_bvsge,
          mk_bvugt: Mod._Z3_mk_bvugt,
          mk_bvsgt: Mod._Z3_mk_bvsgt,
          mk_concat: Mod._Z3_mk_concat,
          mk_extract: Mod._Z3_mk_extract,
          mk_sign_ext: Mod._Z3_mk_sign_ext,
          mk_zero_ext: Mod._Z3_mk_zero_ext,
          mk_repeat: Mod._Z3_mk_repeat,
          mk_bit2bool: Mod._Z3_mk_bit2bool,
          mk_bvshl: Mod._Z3_mk_bvshl,
          mk_bvlshr: Mod._Z3_mk_bvlshr,
          mk_bvashr: Mod._Z3_mk_bvashr,
          mk_rotate_left: Mod._Z3_mk_rotate_left,
          mk_rotate_right: Mod._Z3_mk_rotate_right,
          mk_ext_rotate_left: Mod._Z3_mk_ext_rotate_left,
          mk_ext_rotate_right: Mod._Z3_mk_ext_rotate_right,
          mk_int2bv: Mod._Z3_mk_int2bv,
          mk_bv2int: Mod._Z3_mk_bv2int,
          mk_bvadd_no_overflow: Mod._Z3_mk_bvadd_no_overflow,
          mk_bvadd_no_underflow: Mod._Z3_mk_bvadd_no_underflow,
          mk_bvsub_no_overflow: Mod._Z3_mk_bvsub_no_overflow,
          mk_bvsub_no_underflow: Mod._Z3_mk_bvsub_no_underflow,
          mk_bvsdiv_no_overflow: Mod._Z3_mk_bvsdiv_no_overflow,
          mk_bvneg_no_overflow: Mod._Z3_mk_bvneg_no_overflow,
          mk_bvmul_no_overflow: Mod._Z3_mk_bvmul_no_overflow,
          mk_bvmul_no_underflow: Mod._Z3_mk_bvmul_no_underflow,
          mk_select: Mod._Z3_mk_select,
          mk_select_n: function(c, a, idxs) {
            return Mod.ccall("Z3_mk_select_n", "number", ["number", "number", "number", "array"], [c, a, idxs.length, intArrayToByteArr(idxs)]);
          },
          mk_store: Mod._Z3_mk_store,
          mk_store_n: function(c, a, idxs, v) {
            return Mod.ccall("Z3_mk_store_n", "number", ["number", "number", "number", "array", "number"], [
              c,
              a,
              idxs.length,
              intArrayToByteArr(idxs),
              v
            ]);
          },
          mk_const_array: Mod._Z3_mk_const_array,
          mk_map: function(c, f, args) {
            return Mod.ccall("Z3_mk_map", "number", ["number", "number", "number", "array"], [c, f, args.length, intArrayToByteArr(args)]);
          },
          mk_array_default: Mod._Z3_mk_array_default,
          mk_as_array: Mod._Z3_mk_as_array,
          mk_set_has_size: Mod._Z3_mk_set_has_size,
          mk_set_sort: Mod._Z3_mk_set_sort,
          mk_empty_set: Mod._Z3_mk_empty_set,
          mk_full_set: Mod._Z3_mk_full_set,
          mk_set_add: Mod._Z3_mk_set_add,
          mk_set_del: Mod._Z3_mk_set_del,
          mk_set_union: function(c, args) {
            return Mod.ccall("Z3_mk_set_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_set_intersect: function(c, args) {
            return Mod.ccall("Z3_mk_set_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_set_difference: Mod._Z3_mk_set_difference,
          mk_set_complement: Mod._Z3_mk_set_complement,
          mk_set_member: Mod._Z3_mk_set_member,
          mk_set_subset: Mod._Z3_mk_set_subset,
          mk_array_ext: Mod._Z3_mk_array_ext,
          mk_numeral: function(c, numeral, ty) {
            return Mod.ccall("Z3_mk_numeral", "number", ["number", "string", "number"], [c, numeral, ty]);
          },
          mk_real: Mod._Z3_mk_real,
          mk_real_int64: Mod._Z3_mk_real_int64,
          mk_int: Mod._Z3_mk_int,
          mk_unsigned_int: Mod._Z3_mk_unsigned_int,
          mk_int64: Mod._Z3_mk_int64,
          mk_unsigned_int64: Mod._Z3_mk_unsigned_int64,
          mk_bv_numeral: function(c, bits) {
            return Mod.ccall("Z3_mk_bv_numeral", "number", ["number", "number", "array"], [c, bits.length, boolArrayToByteArr(bits)]);
          },
          mk_seq_sort: Mod._Z3_mk_seq_sort,
          is_seq_sort: function(c, s) {
            return Mod.ccall("Z3_is_seq_sort", "boolean", ["number", "number"], [c, s]);
          },
          get_seq_sort_basis: Mod._Z3_get_seq_sort_basis,
          mk_re_sort: Mod._Z3_mk_re_sort,
          is_re_sort: function(c, s) {
            return Mod.ccall("Z3_is_re_sort", "boolean", ["number", "number"], [c, s]);
          },
          get_re_sort_basis: Mod._Z3_get_re_sort_basis,
          mk_string_sort: Mod._Z3_mk_string_sort,
          mk_char_sort: Mod._Z3_mk_char_sort,
          is_string_sort: function(c, s) {
            return Mod.ccall("Z3_is_string_sort", "boolean", ["number", "number"], [c, s]);
          },
          is_char_sort: function(c, s) {
            return Mod.ccall("Z3_is_char_sort", "boolean", ["number", "number"], [c, s]);
          },
          mk_string: function(c, s) {
            return Mod.ccall("Z3_mk_string", "number", ["number", "string"], [c, s]);
          },
          mk_lstring: function(c, len, s) {
            return Mod.ccall("Z3_mk_lstring", "number", ["number", "number", "string"], [c, len, s]);
          },
          mk_u32string: function(c, chars) {
            return Mod.ccall("Z3_mk_u32string", "number", ["number", "number", "array"], [c, chars.length, intArrayToByteArr(chars)]);
          },
          is_string: function(c, s) {
            return Mod.ccall("Z3_is_string", "boolean", ["number", "number"], [c, s]);
          },
          get_string: function(c, s) {
            return Mod.ccall("Z3_get_string", "string", ["number", "number"], [c, s]);
          },
          get_string_length: function(c, s) {
            let ret = Mod.ccall("Z3_get_string_length", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_string_contents: function(c, s, length) {
            let outArray_contents = Mod._malloc(4 * length);
            try {
              let ret = Mod.ccall("Z3_get_string_contents", "void", ["number", "number", "number", "number"], [c, s, length, outArray_contents]);
              return readUintArray(outArray_contents, length);
            } finally {
              Mod._free(outArray_contents);
            }
          },
          mk_seq_empty: Mod._Z3_mk_seq_empty,
          mk_seq_unit: Mod._Z3_mk_seq_unit,
          mk_seq_concat: function(c, args) {
            return Mod.ccall("Z3_mk_seq_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_seq_prefix: Mod._Z3_mk_seq_prefix,
          mk_seq_suffix: Mod._Z3_mk_seq_suffix,
          mk_seq_contains: Mod._Z3_mk_seq_contains,
          mk_str_lt: Mod._Z3_mk_str_lt,
          mk_str_le: Mod._Z3_mk_str_le,
          mk_seq_extract: Mod._Z3_mk_seq_extract,
          mk_seq_replace: Mod._Z3_mk_seq_replace,
          mk_seq_at: Mod._Z3_mk_seq_at,
          mk_seq_nth: Mod._Z3_mk_seq_nth,
          mk_seq_length: Mod._Z3_mk_seq_length,
          mk_seq_index: Mod._Z3_mk_seq_index,
          mk_seq_last_index: Mod._Z3_mk_seq_last_index,
          mk_seq_map: Mod._Z3_mk_seq_map,
          mk_seq_mapi: Mod._Z3_mk_seq_mapi,
          mk_seq_foldl: Mod._Z3_mk_seq_foldl,
          mk_seq_foldli: Mod._Z3_mk_seq_foldli,
          mk_str_to_int: Mod._Z3_mk_str_to_int,
          mk_int_to_str: Mod._Z3_mk_int_to_str,
          mk_string_to_code: Mod._Z3_mk_string_to_code,
          mk_string_from_code: Mod._Z3_mk_string_from_code,
          mk_ubv_to_str: Mod._Z3_mk_ubv_to_str,
          mk_sbv_to_str: Mod._Z3_mk_sbv_to_str,
          mk_seq_to_re: Mod._Z3_mk_seq_to_re,
          mk_seq_in_re: Mod._Z3_mk_seq_in_re,
          mk_re_plus: Mod._Z3_mk_re_plus,
          mk_re_star: Mod._Z3_mk_re_star,
          mk_re_option: Mod._Z3_mk_re_option,
          mk_re_union: function(c, args) {
            return Mod.ccall("Z3_mk_re_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_re_concat: function(c, args) {
            return Mod.ccall("Z3_mk_re_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_re_range: Mod._Z3_mk_re_range,
          mk_re_allchar: Mod._Z3_mk_re_allchar,
          mk_re_loop: Mod._Z3_mk_re_loop,
          mk_re_power: Mod._Z3_mk_re_power,
          mk_re_intersect: function(c, args) {
            return Mod.ccall("Z3_mk_re_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
          },
          mk_re_complement: Mod._Z3_mk_re_complement,
          mk_re_diff: Mod._Z3_mk_re_diff,
          mk_re_empty: Mod._Z3_mk_re_empty,
          mk_re_full: Mod._Z3_mk_re_full,
          mk_char: Mod._Z3_mk_char,
          mk_char_le: Mod._Z3_mk_char_le,
          mk_char_to_int: Mod._Z3_mk_char_to_int,
          mk_char_to_bv: Mod._Z3_mk_char_to_bv,
          mk_char_from_bv: Mod._Z3_mk_char_from_bv,
          mk_char_is_digit: Mod._Z3_mk_char_is_digit,
          mk_linear_order: Mod._Z3_mk_linear_order,
          mk_partial_order: Mod._Z3_mk_partial_order,
          mk_piecewise_linear_order: Mod._Z3_mk_piecewise_linear_order,
          mk_tree_order: Mod._Z3_mk_tree_order,
          mk_transitive_closure: Mod._Z3_mk_transitive_closure,
          mk_pattern: function(c, terms) {
            return Mod.ccall("Z3_mk_pattern", "number", ["number", "number", "array"], [c, terms.length, intArrayToByteArr(terms)]);
          },
          mk_bound: Mod._Z3_mk_bound,
          mk_forall: function(c, weight, patterns, sorts, decl_names, body) {
            if (sorts.length !== decl_names.length) {
              throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
            }
            return Mod.ccall("Z3_mk_forall", "number", [
              "number",
              "number",
              "number",
              "array",
              "number",
              "array",
              "array",
              "number"
            ], [
              c,
              weight,
              patterns.length,
              intArrayToByteArr(patterns),
              sorts.length,
              intArrayToByteArr(sorts),
              intArrayToByteArr(decl_names),
              body
            ]);
          },
          mk_exists: function(c, weight, patterns, sorts, decl_names, body) {
            if (sorts.length !== decl_names.length) {
              throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
            }
            return Mod.ccall("Z3_mk_exists", "number", [
              "number",
              "number",
              "number",
              "array",
              "number",
              "array",
              "array",
              "number"
            ], [
              c,
              weight,
              patterns.length,
              intArrayToByteArr(patterns),
              sorts.length,
              intArrayToByteArr(sorts),
              intArrayToByteArr(decl_names),
              body
            ]);
          },
          mk_quantifier: function(c, is_forall, weight, patterns, sorts, decl_names, body) {
            if (sorts.length !== decl_names.length) {
              throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
            }
            return Mod.ccall("Z3_mk_quantifier", "number", [
              "number",
              "boolean",
              "number",
              "number",
              "array",
              "number",
              "array",
              "array",
              "number"
            ], [
              c,
              is_forall,
              weight,
              patterns.length,
              intArrayToByteArr(patterns),
              sorts.length,
              intArrayToByteArr(sorts),
              intArrayToByteArr(decl_names),
              body
            ]);
          },
          mk_quantifier_ex: function(c, is_forall, weight, quantifier_id, skolem_id, patterns, no_patterns, sorts, decl_names, body) {
            if (sorts.length !== decl_names.length) {
              throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
            }
            return Mod.ccall("Z3_mk_quantifier_ex", "number", [
              "number",
              "boolean",
              "number",
              "number",
              "number",
              "number",
              "array",
              "number",
              "array",
              "number",
              "array",
              "array",
              "number"
            ], [
              c,
              is_forall,
              weight,
              quantifier_id,
              skolem_id,
              patterns.length,
              intArrayToByteArr(patterns),
              no_patterns.length,
              intArrayToByteArr(no_patterns),
              sorts.length,
              intArrayToByteArr(sorts),
              intArrayToByteArr(decl_names),
              body
            ]);
          },
          mk_forall_const: function(c, weight, bound, patterns, body) {
            return Mod.ccall("Z3_mk_forall_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
              c,
              weight,
              bound.length,
              intArrayToByteArr(bound),
              patterns.length,
              intArrayToByteArr(patterns),
              body
            ]);
          },
          mk_exists_const: function(c, weight, bound, patterns, body) {
            return Mod.ccall("Z3_mk_exists_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
              c,
              weight,
              bound.length,
              intArrayToByteArr(bound),
              patterns.length,
              intArrayToByteArr(patterns),
              body
            ]);
          },
          mk_quantifier_const: function(c, is_forall, weight, bound, patterns, body) {
            return Mod.ccall("Z3_mk_quantifier_const", "number", [
              "number",
              "boolean",
              "number",
              "number",
              "array",
              "number",
              "array",
              "number"
            ], [
              c,
              is_forall,
              weight,
              bound.length,
              intArrayToByteArr(bound),
              patterns.length,
              intArrayToByteArr(patterns),
              body
            ]);
          },
          mk_quantifier_const_ex: function(c, is_forall, weight, quantifier_id, skolem_id, bound, patterns, no_patterns, body) {
            return Mod.ccall("Z3_mk_quantifier_const_ex", "number", [
              "number",
              "boolean",
              "number",
              "number",
              "number",
              "number",
              "array",
              "number",
              "array",
              "number",
              "array",
              "number"
            ], [
              c,
              is_forall,
              weight,
              quantifier_id,
              skolem_id,
              bound.length,
              intArrayToByteArr(bound),
              patterns.length,
              intArrayToByteArr(patterns),
              no_patterns.length,
              intArrayToByteArr(no_patterns),
              body
            ]);
          },
          mk_lambda: function(c, sorts, decl_names, body) {
            if (sorts.length !== decl_names.length) {
              throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
            }
            return Mod.ccall("Z3_mk_lambda", "number", ["number", "number", "array", "array", "number"], [
              c,
              sorts.length,
              intArrayToByteArr(sorts),
              intArrayToByteArr(decl_names),
              body
            ]);
          },
          mk_lambda_const: function(c, bound, body) {
            return Mod.ccall("Z3_mk_lambda_const", "number", ["number", "number", "array", "number"], [
              c,
              bound.length,
              intArrayToByteArr(bound),
              body
            ]);
          },
          get_symbol_kind: Mod._Z3_get_symbol_kind,
          get_symbol_int: Mod._Z3_get_symbol_int,
          get_symbol_string: function(c, s) {
            return Mod.ccall("Z3_get_symbol_string", "string", ["number", "number"], [c, s]);
          },
          get_sort_name: Mod._Z3_get_sort_name,
          get_sort_id: function(c, s) {
            let ret = Mod.ccall("Z3_get_sort_id", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          sort_to_ast: Mod._Z3_sort_to_ast,
          is_eq_sort: function(c, s1, s2) {
            return Mod.ccall("Z3_is_eq_sort", "boolean", ["number", "number", "number"], [c, s1, s2]);
          },
          get_sort_kind: Mod._Z3_get_sort_kind,
          get_bv_sort_size: function(c, t) {
            let ret = Mod.ccall("Z3_get_bv_sort_size", "number", ["number", "number"], [c, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_finite_domain_sort_size: function(c, s) {
            let ret = Mod.ccall("Z3_get_finite_domain_sort_size", "boolean", ["number", "number", "number"], [c, s, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutUint64(0);
          },
          get_array_arity: function(c, s) {
            let ret = Mod.ccall("Z3_get_array_arity", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_array_sort_domain: Mod._Z3_get_array_sort_domain,
          get_array_sort_domain_n: Mod._Z3_get_array_sort_domain_n,
          get_array_sort_range: Mod._Z3_get_array_sort_range,
          get_tuple_sort_mk_decl: Mod._Z3_get_tuple_sort_mk_decl,
          get_tuple_sort_num_fields: function(c, t) {
            let ret = Mod.ccall("Z3_get_tuple_sort_num_fields", "number", ["number", "number"], [c, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_tuple_sort_field_decl: Mod._Z3_get_tuple_sort_field_decl,
          is_recursive_datatype_sort: function(c, s) {
            return Mod.ccall("Z3_is_recursive_datatype_sort", "boolean", ["number", "number"], [c, s]);
          },
          get_datatype_sort_num_constructors: function(c, t) {
            let ret = Mod.ccall("Z3_get_datatype_sort_num_constructors", "number", ["number", "number"], [c, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_datatype_sort_constructor: Mod._Z3_get_datatype_sort_constructor,
          get_datatype_sort_recognizer: Mod._Z3_get_datatype_sort_recognizer,
          get_datatype_sort_constructor_accessor: Mod._Z3_get_datatype_sort_constructor_accessor,
          datatype_update_field: Mod._Z3_datatype_update_field,
          get_relation_arity: function(c, s) {
            let ret = Mod.ccall("Z3_get_relation_arity", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_relation_column: Mod._Z3_get_relation_column,
          mk_atmost: function(c, args, k) {
            return Mod.ccall("Z3_mk_atmost", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
          },
          mk_atleast: function(c, args, k) {
            return Mod.ccall("Z3_mk_atleast", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
          },
          mk_pble: function(c, args, coeffs, k) {
            if (args.length !== coeffs.length) {
              throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
            }
            return Mod.ccall("Z3_mk_pble", "number", ["number", "number", "array", "array", "number"], [
              c,
              args.length,
              intArrayToByteArr(args),
              intArrayToByteArr(coeffs),
              k
            ]);
          },
          mk_pbge: function(c, args, coeffs, k) {
            if (args.length !== coeffs.length) {
              throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
            }
            return Mod.ccall("Z3_mk_pbge", "number", ["number", "number", "array", "array", "number"], [
              c,
              args.length,
              intArrayToByteArr(args),
              intArrayToByteArr(coeffs),
              k
            ]);
          },
          mk_pbeq: function(c, args, coeffs, k) {
            if (args.length !== coeffs.length) {
              throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
            }
            return Mod.ccall("Z3_mk_pbeq", "number", ["number", "number", "array", "array", "number"], [
              c,
              args.length,
              intArrayToByteArr(args),
              intArrayToByteArr(coeffs),
              k
            ]);
          },
          func_decl_to_ast: Mod._Z3_func_decl_to_ast,
          is_eq_func_decl: function(c, f1, f2) {
            return Mod.ccall("Z3_is_eq_func_decl", "boolean", ["number", "number", "number"], [c, f1, f2]);
          },
          get_func_decl_id: function(c, f) {
            let ret = Mod.ccall("Z3_get_func_decl_id", "number", ["number", "number"], [c, f]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_decl_name: Mod._Z3_get_decl_name,
          get_decl_kind: Mod._Z3_get_decl_kind,
          get_domain_size: function(c, d) {
            let ret = Mod.ccall("Z3_get_domain_size", "number", ["number", "number"], [c, d]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_arity: function(c, d) {
            let ret = Mod.ccall("Z3_get_arity", "number", ["number", "number"], [c, d]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_domain: Mod._Z3_get_domain,
          get_range: Mod._Z3_get_range,
          get_decl_num_parameters: function(c, d) {
            let ret = Mod.ccall("Z3_get_decl_num_parameters", "number", ["number", "number"], [c, d]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_decl_parameter_kind: Mod._Z3_get_decl_parameter_kind,
          get_decl_int_parameter: Mod._Z3_get_decl_int_parameter,
          get_decl_double_parameter: Mod._Z3_get_decl_double_parameter,
          get_decl_symbol_parameter: Mod._Z3_get_decl_symbol_parameter,
          get_decl_sort_parameter: Mod._Z3_get_decl_sort_parameter,
          get_decl_ast_parameter: Mod._Z3_get_decl_ast_parameter,
          get_decl_func_decl_parameter: Mod._Z3_get_decl_func_decl_parameter,
          get_decl_rational_parameter: function(c, d, idx) {
            return Mod.ccall("Z3_get_decl_rational_parameter", "string", ["number", "number", "number"], [c, d, idx]);
          },
          app_to_ast: Mod._Z3_app_to_ast,
          get_app_decl: Mod._Z3_get_app_decl,
          get_app_num_args: function(c, a) {
            let ret = Mod.ccall("Z3_get_app_num_args", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_app_arg: Mod._Z3_get_app_arg,
          is_eq_ast: function(c, t1, t2) {
            return Mod.ccall("Z3_is_eq_ast", "boolean", ["number", "number", "number"], [c, t1, t2]);
          },
          get_ast_id: function(c, t) {
            let ret = Mod.ccall("Z3_get_ast_id", "number", ["number", "number"], [c, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_ast_hash: function(c, a) {
            let ret = Mod.ccall("Z3_get_ast_hash", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_sort: Mod._Z3_get_sort,
          is_well_sorted: function(c, t) {
            return Mod.ccall("Z3_is_well_sorted", "boolean", ["number", "number"], [c, t]);
          },
          get_bool_value: Mod._Z3_get_bool_value,
          get_ast_kind: Mod._Z3_get_ast_kind,
          is_app: function(c, a) {
            return Mod.ccall("Z3_is_app", "boolean", ["number", "number"], [c, a]);
          },
          is_ground: function(c, a) {
            return Mod.ccall("Z3_is_ground", "boolean", ["number", "number"], [c, a]);
          },
          get_depth: function(c, a) {
            let ret = Mod.ccall("Z3_get_depth", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          is_numeral_ast: function(c, a) {
            return Mod.ccall("Z3_is_numeral_ast", "boolean", ["number", "number"], [c, a]);
          },
          is_algebraic_number: function(c, a) {
            return Mod.ccall("Z3_is_algebraic_number", "boolean", ["number", "number"], [c, a]);
          },
          to_app: Mod._Z3_to_app,
          to_func_decl: Mod._Z3_to_func_decl,
          get_numeral_string: function(c, a) {
            return Mod.ccall("Z3_get_numeral_string", "string", ["number", "number"], [c, a]);
          },
          get_numeral_binary_string: function(c, a) {
            return Mod.ccall("Z3_get_numeral_binary_string", "string", ["number", "number"], [c, a]);
          },
          get_numeral_decimal_string: function(c, a, precision) {
            return Mod.ccall("Z3_get_numeral_decimal_string", "string", ["number", "number", "number"], [c, a, precision]);
          },
          get_numeral_double: Mod._Z3_get_numeral_double,
          get_numerator: Mod._Z3_get_numerator,
          get_denominator: Mod._Z3_get_denominator,
          get_numeral_small: function(c, a) {
            let ret = Mod.ccall("Z3_get_numeral_small", "boolean", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 8]);
            if (!ret) {
              return null;
            }
            return { num: getOutInt64(0), den: getOutInt64(1) };
          },
          get_numeral_int: function(c, v) {
            let ret = Mod.ccall("Z3_get_numeral_int", "boolean", ["number", "number", "number"], [c, v, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutInt(0);
          },
          get_numeral_uint: function(c, v) {
            let ret = Mod.ccall("Z3_get_numeral_uint", "boolean", ["number", "number", "number"], [c, v, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutUint(0);
          },
          get_numeral_uint64: function(c, v) {
            let ret = Mod.ccall("Z3_get_numeral_uint64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutUint64(0);
          },
          get_numeral_int64: function(c, v) {
            let ret = Mod.ccall("Z3_get_numeral_int64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutInt64(0);
          },
          get_numeral_rational_int64: function(c, v) {
            let ret = Mod.ccall("Z3_get_numeral_rational_int64", "boolean", ["number", "number", "number", "number"], [c, v, outAddress, outAddress + 8]);
            if (!ret) {
              return null;
            }
            return { num: getOutInt64(0), den: getOutInt64(1) };
          },
          get_algebraic_number_lower: Mod._Z3_get_algebraic_number_lower,
          get_algebraic_number_upper: Mod._Z3_get_algebraic_number_upper,
          pattern_to_ast: Mod._Z3_pattern_to_ast,
          get_pattern_num_terms: function(c, p) {
            let ret = Mod.ccall("Z3_get_pattern_num_terms", "number", ["number", "number"], [c, p]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_pattern: Mod._Z3_get_pattern,
          get_index_value: function(c, a) {
            let ret = Mod.ccall("Z3_get_index_value", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          is_quantifier_forall: function(c, a) {
            return Mod.ccall("Z3_is_quantifier_forall", "boolean", ["number", "number"], [c, a]);
          },
          is_quantifier_exists: function(c, a) {
            return Mod.ccall("Z3_is_quantifier_exists", "boolean", ["number", "number"], [c, a]);
          },
          is_lambda: function(c, a) {
            return Mod.ccall("Z3_is_lambda", "boolean", ["number", "number"], [c, a]);
          },
          get_quantifier_weight: function(c, a) {
            let ret = Mod.ccall("Z3_get_quantifier_weight", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_quantifier_skolem_id: Mod._Z3_get_quantifier_skolem_id,
          get_quantifier_id: Mod._Z3_get_quantifier_id,
          get_quantifier_num_patterns: function(c, a) {
            let ret = Mod.ccall("Z3_get_quantifier_num_patterns", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_quantifier_pattern_ast: Mod._Z3_get_quantifier_pattern_ast,
          get_quantifier_num_no_patterns: function(c, a) {
            let ret = Mod.ccall("Z3_get_quantifier_num_no_patterns", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_quantifier_no_pattern_ast: Mod._Z3_get_quantifier_no_pattern_ast,
          get_quantifier_num_bound: function(c, a) {
            let ret = Mod.ccall("Z3_get_quantifier_num_bound", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_quantifier_bound_name: Mod._Z3_get_quantifier_bound_name,
          get_quantifier_bound_sort: Mod._Z3_get_quantifier_bound_sort,
          get_quantifier_body: Mod._Z3_get_quantifier_body,
          simplify: function(c, a) {
            return Mod.async_call(Mod._async_Z3_simplify, c, a);
          },
          simplify_ex: function(c, a, p) {
            return Mod.async_call(Mod._async_Z3_simplify_ex, c, a, p);
          },
          simplify_get_help: function(c) {
            return Mod.ccall("Z3_simplify_get_help", "string", ["number"], [c]);
          },
          simplify_get_param_descrs: Mod._Z3_simplify_get_param_descrs,
          update_term: function(c, a, args) {
            return Mod.ccall("Z3_update_term", "number", ["number", "number", "number", "array"], [c, a, args.length, intArrayToByteArr(args)]);
          },
          substitute: function(c, a, from, to) {
            if (from.length !== to.length) {
              throw new TypeError(`from and to must be the same length (got ${from.length} and {to.length})`);
            }
            return Mod.ccall("Z3_substitute", "number", ["number", "number", "number", "array", "array"], [
              c,
              a,
              from.length,
              intArrayToByteArr(from),
              intArrayToByteArr(to)
            ]);
          },
          substitute_vars: function(c, a, to) {
            return Mod.ccall("Z3_substitute_vars", "number", ["number", "number", "number", "array"], [c, a, to.length, intArrayToByteArr(to)]);
          },
          substitute_funs: function(c, a, from, to) {
            if (from.length !== to.length) {
              throw new TypeError(`from and to must be the same length (got ${from.length} and {to.length})`);
            }
            return Mod.ccall("Z3_substitute_funs", "number", ["number", "number", "number", "array", "array"], [
              c,
              a,
              from.length,
              intArrayToByteArr(from),
              intArrayToByteArr(to)
            ]);
          },
          translate: Mod._Z3_translate,
          mk_model: Mod._Z3_mk_model,
          model_inc_ref: Mod._Z3_model_inc_ref,
          model_dec_ref: Mod._Z3_model_dec_ref,
          model_eval: function(c, m, t, model_completion) {
            let ret = Mod.ccall("Z3_model_eval", "boolean", ["number", "number", "number", "boolean", "number"], [c, m, t, model_completion, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutUint(0);
          },
          model_get_const_interp: Mod._Z3_model_get_const_interp,
          model_has_interp: function(c, m, a) {
            return Mod.ccall("Z3_model_has_interp", "boolean", ["number", "number", "number"], [c, m, a]);
          },
          model_get_func_interp: Mod._Z3_model_get_func_interp,
          model_get_num_consts: function(c, m) {
            let ret = Mod.ccall("Z3_model_get_num_consts", "number", ["number", "number"], [c, m]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          model_get_const_decl: Mod._Z3_model_get_const_decl,
          model_get_num_funcs: function(c, m) {
            let ret = Mod.ccall("Z3_model_get_num_funcs", "number", ["number", "number"], [c, m]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          model_get_func_decl: Mod._Z3_model_get_func_decl,
          model_get_num_sorts: function(c, m) {
            let ret = Mod.ccall("Z3_model_get_num_sorts", "number", ["number", "number"], [c, m]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          model_get_sort: Mod._Z3_model_get_sort,
          model_get_sort_universe: Mod._Z3_model_get_sort_universe,
          model_translate: Mod._Z3_model_translate,
          is_as_array: function(c, a) {
            return Mod.ccall("Z3_is_as_array", "boolean", ["number", "number"], [c, a]);
          },
          get_as_array_func_decl: Mod._Z3_get_as_array_func_decl,
          add_func_interp: Mod._Z3_add_func_interp,
          add_const_interp: Mod._Z3_add_const_interp,
          func_interp_inc_ref: Mod._Z3_func_interp_inc_ref,
          func_interp_dec_ref: Mod._Z3_func_interp_dec_ref,
          func_interp_get_num_entries: function(c, f) {
            let ret = Mod.ccall("Z3_func_interp_get_num_entries", "number", ["number", "number"], [c, f]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          func_interp_get_entry: Mod._Z3_func_interp_get_entry,
          func_interp_get_else: Mod._Z3_func_interp_get_else,
          func_interp_set_else: Mod._Z3_func_interp_set_else,
          func_interp_get_arity: function(c, f) {
            let ret = Mod.ccall("Z3_func_interp_get_arity", "number", ["number", "number"], [c, f]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          func_interp_add_entry: Mod._Z3_func_interp_add_entry,
          func_entry_inc_ref: Mod._Z3_func_entry_inc_ref,
          func_entry_dec_ref: Mod._Z3_func_entry_dec_ref,
          func_entry_get_value: Mod._Z3_func_entry_get_value,
          func_entry_get_num_args: function(c, e) {
            let ret = Mod.ccall("Z3_func_entry_get_num_args", "number", ["number", "number"], [c, e]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          func_entry_get_arg: Mod._Z3_func_entry_get_arg,
          open_log: function(filename) {
            return Mod.ccall("Z3_open_log", "boolean", ["string"], [filename]);
          },
          append_log: function(string) {
            return Mod.ccall("Z3_append_log", "void", ["string"], [string]);
          },
          close_log: Mod._Z3_close_log,
          toggle_warning_messages: Mod._Z3_toggle_warning_messages,
          set_ast_print_mode: Mod._Z3_set_ast_print_mode,
          ast_to_string: function(c, a) {
            return Mod.ccall("Z3_ast_to_string", "string", ["number", "number"], [c, a]);
          },
          pattern_to_string: function(c, p) {
            return Mod.ccall("Z3_pattern_to_string", "string", ["number", "number"], [c, p]);
          },
          sort_to_string: function(c, s) {
            return Mod.ccall("Z3_sort_to_string", "string", ["number", "number"], [c, s]);
          },
          func_decl_to_string: function(c, d) {
            return Mod.ccall("Z3_func_decl_to_string", "string", ["number", "number"], [c, d]);
          },
          model_to_string: function(c, m) {
            return Mod.ccall("Z3_model_to_string", "string", ["number", "number"], [c, m]);
          },
          benchmark_to_smtlib_string: function(c, name, logic, status, attributes, assumptions, formula) {
            return Mod.ccall("Z3_benchmark_to_smtlib_string", "string", [
              "number",
              "string",
              "string",
              "string",
              "string",
              "number",
              "array",
              "number"
            ], [
              c,
              name,
              logic,
              status,
              attributes,
              assumptions.length,
              intArrayToByteArr(assumptions),
              formula
            ]);
          },
          parse_smtlib2_string: function(c, str, sort_names, sorts, decl_names, decls) {
            if (sort_names.length !== sorts.length) {
              throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
            }
            if (decl_names.length !== decls.length) {
              throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
            }
            return Mod.ccall("Z3_parse_smtlib2_string", "number", [
              "number",
              "string",
              "number",
              "array",
              "array",
              "number",
              "array",
              "array"
            ], [
              c,
              str,
              sort_names.length,
              intArrayToByteArr(sort_names),
              intArrayToByteArr(sorts),
              decl_names.length,
              intArrayToByteArr(decl_names),
              intArrayToByteArr(decls)
            ]);
          },
          parse_smtlib2_file: function(c, file_name, sort_names, sorts, decl_names, decls) {
            if (sort_names.length !== sorts.length) {
              throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
            }
            if (decl_names.length !== decls.length) {
              throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
            }
            return Mod.ccall("Z3_parse_smtlib2_file", "number", [
              "number",
              "string",
              "number",
              "array",
              "array",
              "number",
              "array",
              "array"
            ], [
              c,
              file_name,
              sort_names.length,
              intArrayToByteArr(sort_names),
              intArrayToByteArr(sorts),
              decl_names.length,
              intArrayToByteArr(decl_names),
              intArrayToByteArr(decls)
            ]);
          },
          eval_smtlib2_string: async function(c, str) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_eval_smtlib2_string", "void", ["number", "string"], [c, str]));
          },
          mk_parser_context: Mod._Z3_mk_parser_context,
          parser_context_inc_ref: Mod._Z3_parser_context_inc_ref,
          parser_context_dec_ref: Mod._Z3_parser_context_dec_ref,
          parser_context_add_sort: Mod._Z3_parser_context_add_sort,
          parser_context_add_decl: Mod._Z3_parser_context_add_decl,
          parser_context_from_string: function(c, pc, s) {
            return Mod.ccall("Z3_parser_context_from_string", "number", ["number", "number", "string"], [c, pc, s]);
          },
          get_error_code: Mod._Z3_get_error_code,
          set_error: Mod._Z3_set_error,
          get_error_msg: function(c, err) {
            return Mod.ccall("Z3_get_error_msg", "string", ["number", "number"], [c, err]);
          },
          get_version: function() {
            let ret = Mod.ccall("Z3_get_version", "void", ["number", "number", "number", "number"], [outAddress, outAddress + 4, outAddress + 8, outAddress + 12]);
            return {
              major: getOutUint(0),
              minor: getOutUint(1),
              build_number: getOutUint(2),
              revision_number: getOutUint(3)
            };
          },
          get_full_version: function() {
            return Mod.ccall("Z3_get_full_version", "string", [], []);
          },
          enable_trace: function(tag) {
            return Mod.ccall("Z3_enable_trace", "void", ["string"], [tag]);
          },
          disable_trace: function(tag) {
            return Mod.ccall("Z3_disable_trace", "void", ["string"], [tag]);
          },
          reset_memory: Mod._Z3_reset_memory,
          finalize_memory: Mod._Z3_finalize_memory,
          mk_goal: Mod._Z3_mk_goal,
          goal_inc_ref: Mod._Z3_goal_inc_ref,
          goal_dec_ref: Mod._Z3_goal_dec_ref,
          goal_precision: Mod._Z3_goal_precision,
          goal_assert: Mod._Z3_goal_assert,
          goal_inconsistent: function(c, g) {
            return Mod.ccall("Z3_goal_inconsistent", "boolean", ["number", "number"], [c, g]);
          },
          goal_depth: function(c, g) {
            let ret = Mod.ccall("Z3_goal_depth", "number", ["number", "number"], [c, g]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          goal_reset: Mod._Z3_goal_reset,
          goal_size: function(c, g) {
            let ret = Mod.ccall("Z3_goal_size", "number", ["number", "number"], [c, g]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          goal_formula: Mod._Z3_goal_formula,
          goal_num_exprs: function(c, g) {
            let ret = Mod.ccall("Z3_goal_num_exprs", "number", ["number", "number"], [c, g]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          goal_is_decided_sat: function(c, g) {
            return Mod.ccall("Z3_goal_is_decided_sat", "boolean", ["number", "number"], [c, g]);
          },
          goal_is_decided_unsat: function(c, g) {
            return Mod.ccall("Z3_goal_is_decided_unsat", "boolean", ["number", "number"], [c, g]);
          },
          goal_translate: Mod._Z3_goal_translate,
          goal_convert_model: Mod._Z3_goal_convert_model,
          goal_to_string: function(c, g) {
            return Mod.ccall("Z3_goal_to_string", "string", ["number", "number"], [c, g]);
          },
          goal_to_dimacs_string: function(c, g, include_names) {
            return Mod.ccall("Z3_goal_to_dimacs_string", "string", ["number", "number", "boolean"], [c, g, include_names]);
          },
          mk_tactic: function(c, name) {
            return Mod.ccall("Z3_mk_tactic", "number", ["number", "string"], [c, name]);
          },
          tactic_inc_ref: Mod._Z3_tactic_inc_ref,
          tactic_dec_ref: Mod._Z3_tactic_dec_ref,
          mk_probe: function(c, name) {
            return Mod.ccall("Z3_mk_probe", "number", ["number", "string"], [c, name]);
          },
          probe_inc_ref: Mod._Z3_probe_inc_ref,
          probe_dec_ref: Mod._Z3_probe_dec_ref,
          tactic_and_then: Mod._Z3_tactic_and_then,
          tactic_or_else: Mod._Z3_tactic_or_else,
          tactic_par_or: function(c, ts) {
            return Mod.ccall("Z3_tactic_par_or", "number", ["number", "number", "array"], [c, ts.length, intArrayToByteArr(ts)]);
          },
          tactic_par_and_then: Mod._Z3_tactic_par_and_then,
          tactic_try_for: Mod._Z3_tactic_try_for,
          tactic_when: Mod._Z3_tactic_when,
          tactic_cond: Mod._Z3_tactic_cond,
          tactic_repeat: Mod._Z3_tactic_repeat,
          tactic_skip: Mod._Z3_tactic_skip,
          tactic_fail: Mod._Z3_tactic_fail,
          tactic_fail_if: Mod._Z3_tactic_fail_if,
          tactic_fail_if_not_decided: Mod._Z3_tactic_fail_if_not_decided,
          tactic_using_params: Mod._Z3_tactic_using_params,
          mk_simplifier: function(c, name) {
            return Mod.ccall("Z3_mk_simplifier", "number", ["number", "string"], [c, name]);
          },
          simplifier_inc_ref: Mod._Z3_simplifier_inc_ref,
          simplifier_dec_ref: Mod._Z3_simplifier_dec_ref,
          solver_add_simplifier: Mod._Z3_solver_add_simplifier,
          simplifier_and_then: Mod._Z3_simplifier_and_then,
          simplifier_using_params: Mod._Z3_simplifier_using_params,
          get_num_simplifiers: function(c) {
            let ret = Mod.ccall("Z3_get_num_simplifiers", "number", ["number"], [c]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_simplifier_name: function(c, i) {
            return Mod.ccall("Z3_get_simplifier_name", "string", ["number", "number"], [c, i]);
          },
          simplifier_get_help: function(c, t) {
            return Mod.ccall("Z3_simplifier_get_help", "string", ["number", "number"], [c, t]);
          },
          simplifier_get_param_descrs: Mod._Z3_simplifier_get_param_descrs,
          simplifier_get_descr: function(c, name) {
            return Mod.ccall("Z3_simplifier_get_descr", "string", ["number", "string"], [c, name]);
          },
          probe_const: Mod._Z3_probe_const,
          probe_lt: Mod._Z3_probe_lt,
          probe_gt: Mod._Z3_probe_gt,
          probe_le: Mod._Z3_probe_le,
          probe_ge: Mod._Z3_probe_ge,
          probe_eq: Mod._Z3_probe_eq,
          probe_and: Mod._Z3_probe_and,
          probe_or: Mod._Z3_probe_or,
          probe_not: Mod._Z3_probe_not,
          get_num_tactics: function(c) {
            let ret = Mod.ccall("Z3_get_num_tactics", "number", ["number"], [c]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_tactic_name: function(c, i) {
            return Mod.ccall("Z3_get_tactic_name", "string", ["number", "number"], [c, i]);
          },
          get_num_probes: function(c) {
            let ret = Mod.ccall("Z3_get_num_probes", "number", ["number"], [c]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          get_probe_name: function(c, i) {
            return Mod.ccall("Z3_get_probe_name", "string", ["number", "number"], [c, i]);
          },
          tactic_get_help: function(c, t) {
            return Mod.ccall("Z3_tactic_get_help", "string", ["number", "number"], [c, t]);
          },
          tactic_get_param_descrs: Mod._Z3_tactic_get_param_descrs,
          tactic_get_descr: function(c, name) {
            return Mod.ccall("Z3_tactic_get_descr", "string", ["number", "string"], [c, name]);
          },
          probe_get_descr: function(c, name) {
            return Mod.ccall("Z3_probe_get_descr", "string", ["number", "string"], [c, name]);
          },
          probe_apply: Mod._Z3_probe_apply,
          tactic_apply: function(c, t, g) {
            return Mod.async_call(Mod._async_Z3_tactic_apply, c, t, g);
          },
          tactic_apply_ex: function(c, t, g, p) {
            return Mod.async_call(Mod._async_Z3_tactic_apply_ex, c, t, g, p);
          },
          apply_result_inc_ref: Mod._Z3_apply_result_inc_ref,
          apply_result_dec_ref: Mod._Z3_apply_result_dec_ref,
          apply_result_to_string: function(c, r) {
            return Mod.ccall("Z3_apply_result_to_string", "string", ["number", "number"], [c, r]);
          },
          apply_result_get_num_subgoals: function(c, r) {
            let ret = Mod.ccall("Z3_apply_result_get_num_subgoals", "number", ["number", "number"], [c, r]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          apply_result_get_subgoal: Mod._Z3_apply_result_get_subgoal,
          mk_solver: Mod._Z3_mk_solver,
          mk_simple_solver: Mod._Z3_mk_simple_solver,
          mk_solver_for_logic: Mod._Z3_mk_solver_for_logic,
          mk_solver_from_tactic: Mod._Z3_mk_solver_from_tactic,
          solver_translate: Mod._Z3_solver_translate,
          solver_import_model_converter: Mod._Z3_solver_import_model_converter,
          solver_get_help: function(c, s) {
            return Mod.ccall("Z3_solver_get_help", "string", ["number", "number"], [c, s]);
          },
          solver_get_param_descrs: Mod._Z3_solver_get_param_descrs,
          solver_set_params: Mod._Z3_solver_set_params,
          solver_inc_ref: Mod._Z3_solver_inc_ref,
          solver_dec_ref: Mod._Z3_solver_dec_ref,
          solver_interrupt: Mod._Z3_solver_interrupt,
          solver_push: Mod._Z3_solver_push,
          solver_pop: Mod._Z3_solver_pop,
          solver_reset: Mod._Z3_solver_reset,
          solver_get_num_scopes: function(c, s) {
            let ret = Mod.ccall("Z3_solver_get_num_scopes", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          solver_assert: Mod._Z3_solver_assert,
          solver_assert_and_track: Mod._Z3_solver_assert_and_track,
          solver_from_file: function(c, s, file_name) {
            return Mod.ccall("Z3_solver_from_file", "void", ["number", "number", "string"], [c, s, file_name]);
          },
          solver_from_string: function(c, s, str) {
            return Mod.ccall("Z3_solver_from_string", "void", ["number", "number", "string"], [c, s, str]);
          },
          solver_get_assertions: Mod._Z3_solver_get_assertions,
          solver_get_units: Mod._Z3_solver_get_units,
          solver_get_trail: Mod._Z3_solver_get_trail,
          solver_get_non_units: Mod._Z3_solver_get_non_units,
          solver_get_levels: function(c, s, literals, levels) {
            return Mod.ccall("Z3_solver_get_levels", "void", ["number", "number", "number", "number", "array"], [
              c,
              s,
              literals,
              levels.length,
              intArrayToByteArr(levels)
            ]);
          },
          solver_congruence_root: Mod._Z3_solver_congruence_root,
          solver_congruence_next: Mod._Z3_solver_congruence_next,
          solver_congruence_explain: Mod._Z3_solver_congruence_explain,
          solver_solve_for: Mod._Z3_solver_solve_for,
          solver_next_split: function(c, cb, t, idx, phase) {
            return Mod.ccall("Z3_solver_next_split", "boolean", ["number", "number", "number", "number", "number"], [c, cb, t, idx, phase]);
          },
          solver_propagate_declare: function(c, name, domain, range) {
            return Mod.ccall("Z3_solver_propagate_declare", "number", ["number", "number", "number", "array", "number"], [
              c,
              name,
              domain.length,
              intArrayToByteArr(domain),
              range
            ]);
          },
          solver_propagate_register: Mod._Z3_solver_propagate_register,
          solver_propagate_register_cb: Mod._Z3_solver_propagate_register_cb,
          solver_propagate_consequence: function(c, cb, fixed, eq_lhs, eq_rhs, conseq) {
            if (eq_lhs.length !== eq_rhs.length) {
              throw new TypeError(`eq_lhs and eq_rhs must be the same length (got ${eq_lhs.length} and {eq_rhs.length})`);
            }
            return Mod.ccall("Z3_solver_propagate_consequence", "boolean", [
              "number",
              "number",
              "number",
              "array",
              "number",
              "array",
              "array",
              "number"
            ], [
              c,
              cb,
              fixed.length,
              intArrayToByteArr(fixed),
              eq_lhs.length,
              intArrayToByteArr(eq_lhs),
              intArrayToByteArr(eq_rhs),
              conseq
            ]);
          },
          solver_set_initial_value: Mod._Z3_solver_set_initial_value,
          solver_check: function(c, s) {
            return Mod.async_call(Mod._async_Z3_solver_check, c, s);
          },
          solver_check_assumptions: async function(c, s, assumptions) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_solver_check_assumptions", "void", ["number", "number", "number", "array"], [
              c,
              s,
              assumptions.length,
              intArrayToByteArr(assumptions)
            ]));
          },
          get_implied_equalities: function(c, s, terms) {
            let outArray_class_ids = Mod._malloc(4 * terms.length);
            try {
              let ret = Mod.ccall("Z3_get_implied_equalities", "number", ["number", "number", "number", "array", "number"], [
                c,
                s,
                terms.length,
                intArrayToByteArr(terms),
                outArray_class_ids
              ]);
              return {
                rv: ret,
                class_ids: readUintArray(outArray_class_ids, terms.length)
              };
            } finally {
              Mod._free(outArray_class_ids);
            }
          },
          solver_get_consequences: function(c, s, assumptions, variables, consequences) {
            return Mod.async_call(Mod._async_Z3_solver_get_consequences, c, s, assumptions, variables, consequences);
          },
          solver_cube: function(c, s, vars, backtrack_level) {
            return Mod.async_call(Mod._async_Z3_solver_cube, c, s, vars, backtrack_level);
          },
          solver_get_model: Mod._Z3_solver_get_model,
          solver_get_proof: Mod._Z3_solver_get_proof,
          solver_get_unsat_core: Mod._Z3_solver_get_unsat_core,
          solver_get_reason_unknown: function(c, s) {
            return Mod.ccall("Z3_solver_get_reason_unknown", "string", ["number", "number"], [c, s]);
          },
          solver_get_statistics: Mod._Z3_solver_get_statistics,
          solver_to_string: function(c, s) {
            return Mod.ccall("Z3_solver_to_string", "string", ["number", "number"], [c, s]);
          },
          solver_to_dimacs_string: function(c, s, include_names) {
            return Mod.ccall("Z3_solver_to_dimacs_string", "string", ["number", "number", "boolean"], [c, s, include_names]);
          },
          stats_to_string: function(c, s) {
            return Mod.ccall("Z3_stats_to_string", "string", ["number", "number"], [c, s]);
          },
          stats_inc_ref: Mod._Z3_stats_inc_ref,
          stats_dec_ref: Mod._Z3_stats_dec_ref,
          stats_size: function(c, s) {
            let ret = Mod.ccall("Z3_stats_size", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          stats_get_key: function(c, s, idx) {
            return Mod.ccall("Z3_stats_get_key", "string", ["number", "number", "number"], [c, s, idx]);
          },
          stats_is_uint: function(c, s, idx) {
            return Mod.ccall("Z3_stats_is_uint", "boolean", ["number", "number", "number"], [c, s, idx]);
          },
          stats_is_double: function(c, s, idx) {
            return Mod.ccall("Z3_stats_is_double", "boolean", ["number", "number", "number"], [c, s, idx]);
          },
          stats_get_uint_value: function(c, s, idx) {
            let ret = Mod.ccall("Z3_stats_get_uint_value", "number", ["number", "number", "number"], [c, s, idx]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          stats_get_double_value: Mod._Z3_stats_get_double_value,
          get_estimated_alloc_size: Mod._Z3_get_estimated_alloc_size,
          algebraic_is_value: function(c, a) {
            return Mod.ccall("Z3_algebraic_is_value", "boolean", ["number", "number"], [c, a]);
          },
          algebraic_is_pos: function(c, a) {
            return Mod.ccall("Z3_algebraic_is_pos", "boolean", ["number", "number"], [c, a]);
          },
          algebraic_is_neg: function(c, a) {
            return Mod.ccall("Z3_algebraic_is_neg", "boolean", ["number", "number"], [c, a]);
          },
          algebraic_is_zero: function(c, a) {
            return Mod.ccall("Z3_algebraic_is_zero", "boolean", ["number", "number"], [c, a]);
          },
          algebraic_sign: Mod._Z3_algebraic_sign,
          algebraic_add: Mod._Z3_algebraic_add,
          algebraic_sub: Mod._Z3_algebraic_sub,
          algebraic_mul: Mod._Z3_algebraic_mul,
          algebraic_div: Mod._Z3_algebraic_div,
          algebraic_root: Mod._Z3_algebraic_root,
          algebraic_power: Mod._Z3_algebraic_power,
          algebraic_lt: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_lt", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_gt: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_gt", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_le: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_le", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_ge: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_ge", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_eq: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_eq", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_neq: function(c, a, b) {
            return Mod.ccall("Z3_algebraic_neq", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          algebraic_roots: async function(c, p, a) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_roots", "void", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
          },
          algebraic_eval: async function(c, p, a) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_eval", "void", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
          },
          algebraic_get_poly: Mod._Z3_algebraic_get_poly,
          algebraic_get_i: function(c, a) {
            let ret = Mod.ccall("Z3_algebraic_get_i", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          mk_ast_vector: Mod._Z3_mk_ast_vector,
          ast_vector_inc_ref: Mod._Z3_ast_vector_inc_ref,
          ast_vector_dec_ref: Mod._Z3_ast_vector_dec_ref,
          ast_vector_size: function(c, v) {
            let ret = Mod.ccall("Z3_ast_vector_size", "number", ["number", "number"], [c, v]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          ast_vector_get: Mod._Z3_ast_vector_get,
          ast_vector_set: Mod._Z3_ast_vector_set,
          ast_vector_resize: Mod._Z3_ast_vector_resize,
          ast_vector_push: Mod._Z3_ast_vector_push,
          ast_vector_translate: Mod._Z3_ast_vector_translate,
          ast_vector_to_string: function(c, v) {
            return Mod.ccall("Z3_ast_vector_to_string", "string", ["number", "number"], [c, v]);
          },
          mk_ast_map: Mod._Z3_mk_ast_map,
          ast_map_inc_ref: Mod._Z3_ast_map_inc_ref,
          ast_map_dec_ref: Mod._Z3_ast_map_dec_ref,
          ast_map_contains: function(c, m, k) {
            return Mod.ccall("Z3_ast_map_contains", "boolean", ["number", "number", "number"], [c, m, k]);
          },
          ast_map_find: Mod._Z3_ast_map_find,
          ast_map_insert: Mod._Z3_ast_map_insert,
          ast_map_erase: Mod._Z3_ast_map_erase,
          ast_map_reset: Mod._Z3_ast_map_reset,
          ast_map_size: function(c, m) {
            let ret = Mod.ccall("Z3_ast_map_size", "number", ["number", "number"], [c, m]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          ast_map_keys: Mod._Z3_ast_map_keys,
          ast_map_to_string: function(c, m) {
            return Mod.ccall("Z3_ast_map_to_string", "string", ["number", "number"], [c, m]);
          },
          mk_fixedpoint: Mod._Z3_mk_fixedpoint,
          fixedpoint_inc_ref: Mod._Z3_fixedpoint_inc_ref,
          fixedpoint_dec_ref: Mod._Z3_fixedpoint_dec_ref,
          fixedpoint_add_rule: Mod._Z3_fixedpoint_add_rule,
          fixedpoint_add_fact: function(c, d, r, args) {
            return Mod.ccall("Z3_fixedpoint_add_fact", "void", ["number", "number", "number", "number", "array"], [
              c,
              d,
              r,
              args.length,
              intArrayToByteArr(args)
            ]);
          },
          fixedpoint_assert: Mod._Z3_fixedpoint_assert,
          fixedpoint_query: function(c, d, query) {
            return Mod.async_call(Mod._async_Z3_fixedpoint_query, c, d, query);
          },
          fixedpoint_query_relations: async function(c, d, relations) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_fixedpoint_query_relations", "void", ["number", "number", "number", "array"], [
              c,
              d,
              relations.length,
              intArrayToByteArr(relations)
            ]));
          },
          fixedpoint_get_answer: Mod._Z3_fixedpoint_get_answer,
          fixedpoint_get_reason_unknown: function(c, d) {
            return Mod.ccall("Z3_fixedpoint_get_reason_unknown", "string", ["number", "number"], [c, d]);
          },
          fixedpoint_update_rule: Mod._Z3_fixedpoint_update_rule,
          fixedpoint_get_num_levels: function(c, d, pred) {
            let ret = Mod.ccall("Z3_fixedpoint_get_num_levels", "number", ["number", "number", "number"], [c, d, pred]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          fixedpoint_get_cover_delta: Mod._Z3_fixedpoint_get_cover_delta,
          fixedpoint_add_cover: Mod._Z3_fixedpoint_add_cover,
          fixedpoint_get_statistics: Mod._Z3_fixedpoint_get_statistics,
          fixedpoint_register_relation: Mod._Z3_fixedpoint_register_relation,
          fixedpoint_set_predicate_representation: function(c, d, f, relation_kinds) {
            return Mod.ccall("Z3_fixedpoint_set_predicate_representation", "void", ["number", "number", "number", "number", "array"], [
              c,
              d,
              f,
              relation_kinds.length,
              intArrayToByteArr(relation_kinds)
            ]);
          },
          fixedpoint_get_rules: Mod._Z3_fixedpoint_get_rules,
          fixedpoint_get_assertions: Mod._Z3_fixedpoint_get_assertions,
          fixedpoint_set_params: Mod._Z3_fixedpoint_set_params,
          fixedpoint_get_help: function(c, f) {
            return Mod.ccall("Z3_fixedpoint_get_help", "string", ["number", "number"], [c, f]);
          },
          fixedpoint_get_param_descrs: Mod._Z3_fixedpoint_get_param_descrs,
          fixedpoint_to_string: function(c, f, queries) {
            return Mod.ccall("Z3_fixedpoint_to_string", "string", ["number", "number", "number", "array"], [
              c,
              f,
              queries.length,
              intArrayToByteArr(queries)
            ]);
          },
          fixedpoint_from_string: function(c, f, s) {
            return Mod.ccall("Z3_fixedpoint_from_string", "number", ["number", "number", "string"], [c, f, s]);
          },
          fixedpoint_from_file: function(c, f, s) {
            return Mod.ccall("Z3_fixedpoint_from_file", "number", ["number", "number", "string"], [c, f, s]);
          },
          mk_fpa_rounding_mode_sort: Mod._Z3_mk_fpa_rounding_mode_sort,
          mk_fpa_round_nearest_ties_to_even: Mod._Z3_mk_fpa_round_nearest_ties_to_even,
          mk_fpa_rne: Mod._Z3_mk_fpa_rne,
          mk_fpa_round_nearest_ties_to_away: Mod._Z3_mk_fpa_round_nearest_ties_to_away,
          mk_fpa_rna: Mod._Z3_mk_fpa_rna,
          mk_fpa_round_toward_positive: Mod._Z3_mk_fpa_round_toward_positive,
          mk_fpa_rtp: Mod._Z3_mk_fpa_rtp,
          mk_fpa_round_toward_negative: Mod._Z3_mk_fpa_round_toward_negative,
          mk_fpa_rtn: Mod._Z3_mk_fpa_rtn,
          mk_fpa_round_toward_zero: Mod._Z3_mk_fpa_round_toward_zero,
          mk_fpa_rtz: Mod._Z3_mk_fpa_rtz,
          mk_fpa_sort: Mod._Z3_mk_fpa_sort,
          mk_fpa_sort_half: Mod._Z3_mk_fpa_sort_half,
          mk_fpa_sort_16: Mod._Z3_mk_fpa_sort_16,
          mk_fpa_sort_single: Mod._Z3_mk_fpa_sort_single,
          mk_fpa_sort_32: Mod._Z3_mk_fpa_sort_32,
          mk_fpa_sort_double: Mod._Z3_mk_fpa_sort_double,
          mk_fpa_sort_64: Mod._Z3_mk_fpa_sort_64,
          mk_fpa_sort_quadruple: Mod._Z3_mk_fpa_sort_quadruple,
          mk_fpa_sort_128: Mod._Z3_mk_fpa_sort_128,
          mk_fpa_nan: Mod._Z3_mk_fpa_nan,
          mk_fpa_inf: Mod._Z3_mk_fpa_inf,
          mk_fpa_zero: Mod._Z3_mk_fpa_zero,
          mk_fpa_fp: Mod._Z3_mk_fpa_fp,
          mk_fpa_numeral_float: Mod._Z3_mk_fpa_numeral_float,
          mk_fpa_numeral_double: Mod._Z3_mk_fpa_numeral_double,
          mk_fpa_numeral_int: Mod._Z3_mk_fpa_numeral_int,
          mk_fpa_numeral_int_uint: Mod._Z3_mk_fpa_numeral_int_uint,
          mk_fpa_numeral_int64_uint64: Mod._Z3_mk_fpa_numeral_int64_uint64,
          mk_fpa_abs: Mod._Z3_mk_fpa_abs,
          mk_fpa_neg: Mod._Z3_mk_fpa_neg,
          mk_fpa_add: Mod._Z3_mk_fpa_add,
          mk_fpa_sub: Mod._Z3_mk_fpa_sub,
          mk_fpa_mul: Mod._Z3_mk_fpa_mul,
          mk_fpa_div: Mod._Z3_mk_fpa_div,
          mk_fpa_fma: Mod._Z3_mk_fpa_fma,
          mk_fpa_sqrt: Mod._Z3_mk_fpa_sqrt,
          mk_fpa_rem: Mod._Z3_mk_fpa_rem,
          mk_fpa_round_to_integral: Mod._Z3_mk_fpa_round_to_integral,
          mk_fpa_min: Mod._Z3_mk_fpa_min,
          mk_fpa_max: Mod._Z3_mk_fpa_max,
          mk_fpa_leq: Mod._Z3_mk_fpa_leq,
          mk_fpa_lt: Mod._Z3_mk_fpa_lt,
          mk_fpa_geq: Mod._Z3_mk_fpa_geq,
          mk_fpa_gt: Mod._Z3_mk_fpa_gt,
          mk_fpa_eq: Mod._Z3_mk_fpa_eq,
          mk_fpa_is_normal: Mod._Z3_mk_fpa_is_normal,
          mk_fpa_is_subnormal: Mod._Z3_mk_fpa_is_subnormal,
          mk_fpa_is_zero: Mod._Z3_mk_fpa_is_zero,
          mk_fpa_is_infinite: Mod._Z3_mk_fpa_is_infinite,
          mk_fpa_is_nan: Mod._Z3_mk_fpa_is_nan,
          mk_fpa_is_negative: Mod._Z3_mk_fpa_is_negative,
          mk_fpa_is_positive: Mod._Z3_mk_fpa_is_positive,
          mk_fpa_to_fp_bv: Mod._Z3_mk_fpa_to_fp_bv,
          mk_fpa_to_fp_float: Mod._Z3_mk_fpa_to_fp_float,
          mk_fpa_to_fp_real: Mod._Z3_mk_fpa_to_fp_real,
          mk_fpa_to_fp_signed: Mod._Z3_mk_fpa_to_fp_signed,
          mk_fpa_to_fp_unsigned: Mod._Z3_mk_fpa_to_fp_unsigned,
          mk_fpa_to_ubv: Mod._Z3_mk_fpa_to_ubv,
          mk_fpa_to_sbv: Mod._Z3_mk_fpa_to_sbv,
          mk_fpa_to_real: Mod._Z3_mk_fpa_to_real,
          fpa_get_ebits: function(c, s) {
            let ret = Mod.ccall("Z3_fpa_get_ebits", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          fpa_get_sbits: function(c, s) {
            let ret = Mod.ccall("Z3_fpa_get_sbits", "number", ["number", "number"], [c, s]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          fpa_is_numeral_nan: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_nan", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_inf: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_inf", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_zero: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_zero", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_normal: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_normal", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_subnormal: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_subnormal", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_positive: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_positive", "boolean", ["number", "number"], [c, t]);
          },
          fpa_is_numeral_negative: function(c, t) {
            return Mod.ccall("Z3_fpa_is_numeral_negative", "boolean", ["number", "number"], [c, t]);
          },
          fpa_get_numeral_sign_bv: Mod._Z3_fpa_get_numeral_sign_bv,
          fpa_get_numeral_significand_bv: Mod._Z3_fpa_get_numeral_significand_bv,
          fpa_get_numeral_sign: function(c, t) {
            let ret = Mod.ccall("Z3_fpa_get_numeral_sign", "boolean", ["number", "number", "number"], [c, t, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutInt(0);
          },
          fpa_get_numeral_significand_string: function(c, t) {
            return Mod.ccall("Z3_fpa_get_numeral_significand_string", "string", ["number", "number"], [c, t]);
          },
          fpa_get_numeral_significand_uint64: function(c, t) {
            let ret = Mod.ccall("Z3_fpa_get_numeral_significand_uint64", "boolean", ["number", "number", "number"], [c, t, outAddress]);
            if (!ret) {
              return null;
            }
            return getOutUint64(0);
          },
          fpa_get_numeral_exponent_string: function(c, t, biased) {
            return Mod.ccall("Z3_fpa_get_numeral_exponent_string", "string", ["number", "number", "boolean"], [c, t, biased]);
          },
          fpa_get_numeral_exponent_int64: function(c, t, biased) {
            let ret = Mod.ccall("Z3_fpa_get_numeral_exponent_int64", "boolean", ["number", "number", "number", "boolean"], [c, t, outAddress, biased]);
            if (!ret) {
              return null;
            }
            return getOutInt64(0);
          },
          fpa_get_numeral_exponent_bv: Mod._Z3_fpa_get_numeral_exponent_bv,
          mk_fpa_to_ieee_bv: Mod._Z3_mk_fpa_to_ieee_bv,
          mk_fpa_to_fp_int_real: Mod._Z3_mk_fpa_to_fp_int_real,
          mk_optimize: Mod._Z3_mk_optimize,
          optimize_inc_ref: Mod._Z3_optimize_inc_ref,
          optimize_dec_ref: Mod._Z3_optimize_dec_ref,
          optimize_assert: Mod._Z3_optimize_assert,
          optimize_assert_and_track: Mod._Z3_optimize_assert_and_track,
          optimize_assert_soft: function(c, o, a, weight, id) {
            let ret = Mod.ccall("Z3_optimize_assert_soft", "number", ["number", "number", "number", "string", "number"], [c, o, a, weight, id]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          optimize_maximize: function(c, o, t) {
            let ret = Mod.ccall("Z3_optimize_maximize", "number", ["number", "number", "number"], [c, o, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          optimize_minimize: function(c, o, t) {
            let ret = Mod.ccall("Z3_optimize_minimize", "number", ["number", "number", "number"], [c, o, t]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          optimize_push: Mod._Z3_optimize_push,
          optimize_pop: Mod._Z3_optimize_pop,
          optimize_set_initial_value: Mod._Z3_optimize_set_initial_value,
          optimize_check: async function(c, o, assumptions) {
            return await Mod.async_call(() => Mod.ccall("async_Z3_optimize_check", "void", ["number", "number", "number", "array"], [
              c,
              o,
              assumptions.length,
              intArrayToByteArr(assumptions)
            ]));
          },
          optimize_get_reason_unknown: function(c, d) {
            return Mod.ccall("Z3_optimize_get_reason_unknown", "string", ["number", "number"], [c, d]);
          },
          optimize_get_model: Mod._Z3_optimize_get_model,
          optimize_get_unsat_core: Mod._Z3_optimize_get_unsat_core,
          optimize_set_params: Mod._Z3_optimize_set_params,
          optimize_get_param_descrs: Mod._Z3_optimize_get_param_descrs,
          optimize_get_lower: Mod._Z3_optimize_get_lower,
          optimize_get_upper: Mod._Z3_optimize_get_upper,
          optimize_get_lower_as_vector: Mod._Z3_optimize_get_lower_as_vector,
          optimize_get_upper_as_vector: Mod._Z3_optimize_get_upper_as_vector,
          optimize_to_string: function(c, o) {
            return Mod.ccall("Z3_optimize_to_string", "string", ["number", "number"], [c, o]);
          },
          optimize_from_string: function(c, o, s) {
            return Mod.ccall("Z3_optimize_from_string", "void", ["number", "number", "string"], [c, o, s]);
          },
          optimize_from_file: function(c, o, s) {
            return Mod.ccall("Z3_optimize_from_file", "void", ["number", "number", "string"], [c, o, s]);
          },
          optimize_get_help: function(c, t) {
            return Mod.ccall("Z3_optimize_get_help", "string", ["number", "number"], [c, t]);
          },
          optimize_get_statistics: Mod._Z3_optimize_get_statistics,
          optimize_get_assertions: Mod._Z3_optimize_get_assertions,
          optimize_get_objectives: Mod._Z3_optimize_get_objectives,
          polynomial_subresultants: function(c, p, q, x) {
            return Mod.async_call(Mod._async_Z3_polynomial_subresultants, c, p, q, x);
          },
          rcf_del: Mod._Z3_rcf_del,
          rcf_mk_rational: function(c, val) {
            return Mod.ccall("Z3_rcf_mk_rational", "number", ["number", "string"], [c, val]);
          },
          rcf_mk_small_int: Mod._Z3_rcf_mk_small_int,
          rcf_mk_pi: Mod._Z3_rcf_mk_pi,
          rcf_mk_e: Mod._Z3_rcf_mk_e,
          rcf_mk_infinitesimal: Mod._Z3_rcf_mk_infinitesimal,
          rcf_mk_roots: function(c, a) {
            let outArray_roots = Mod._malloc(4 * a.length);
            try {
              let ret = Mod.ccall("Z3_rcf_mk_roots", "number", ["number", "number", "array", "number"], [
                c,
                a.length,
                intArrayToByteArr(a),
                outArray_roots
              ]);
              ret = new Uint32Array([ret])[0];
              return {
                rv: ret,
                roots: readUintArray(outArray_roots, a.length)
              };
            } finally {
              Mod._free(outArray_roots);
            }
          },
          rcf_add: Mod._Z3_rcf_add,
          rcf_sub: Mod._Z3_rcf_sub,
          rcf_mul: Mod._Z3_rcf_mul,
          rcf_div: Mod._Z3_rcf_div,
          rcf_neg: Mod._Z3_rcf_neg,
          rcf_inv: Mod._Z3_rcf_inv,
          rcf_power: Mod._Z3_rcf_power,
          rcf_lt: function(c, a, b) {
            return Mod.ccall("Z3_rcf_lt", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_gt: function(c, a, b) {
            return Mod.ccall("Z3_rcf_gt", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_le: function(c, a, b) {
            return Mod.ccall("Z3_rcf_le", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_ge: function(c, a, b) {
            return Mod.ccall("Z3_rcf_ge", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_eq: function(c, a, b) {
            return Mod.ccall("Z3_rcf_eq", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_neq: function(c, a, b) {
            return Mod.ccall("Z3_rcf_neq", "boolean", ["number", "number", "number"], [c, a, b]);
          },
          rcf_num_to_string: function(c, a, compact, html) {
            return Mod.ccall("Z3_rcf_num_to_string", "string", ["number", "number", "boolean", "boolean"], [c, a, compact, html]);
          },
          rcf_num_to_decimal_string: function(c, a, prec) {
            return Mod.ccall("Z3_rcf_num_to_decimal_string", "string", ["number", "number", "number"], [c, a, prec]);
          },
          rcf_get_numerator_denominator: function(c, a) {
            let ret = Mod.ccall("Z3_rcf_get_numerator_denominator", "void", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 4]);
            return {
              n: getOutUint(0),
              d: getOutUint(1)
            };
          },
          rcf_is_rational: function(c, a) {
            return Mod.ccall("Z3_rcf_is_rational", "boolean", ["number", "number"], [c, a]);
          },
          rcf_is_algebraic: function(c, a) {
            return Mod.ccall("Z3_rcf_is_algebraic", "boolean", ["number", "number"], [c, a]);
          },
          rcf_is_infinitesimal: function(c, a) {
            return Mod.ccall("Z3_rcf_is_infinitesimal", "boolean", ["number", "number"], [c, a]);
          },
          rcf_is_transcendental: function(c, a) {
            return Mod.ccall("Z3_rcf_is_transcendental", "boolean", ["number", "number"], [c, a]);
          },
          rcf_extension_index: function(c, a) {
            let ret = Mod.ccall("Z3_rcf_extension_index", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          rcf_transcendental_name: Mod._Z3_rcf_transcendental_name,
          rcf_infinitesimal_name: Mod._Z3_rcf_infinitesimal_name,
          rcf_num_coefficients: function(c, a) {
            let ret = Mod.ccall("Z3_rcf_num_coefficients", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          rcf_coefficient: Mod._Z3_rcf_coefficient,
          rcf_num_sign_conditions: function(c, a) {
            let ret = Mod.ccall("Z3_rcf_num_sign_conditions", "number", ["number", "number"], [c, a]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          rcf_sign_condition_sign: Mod._Z3_rcf_sign_condition_sign,
          rcf_num_sign_condition_coefficients: function(c, a, i) {
            let ret = Mod.ccall("Z3_rcf_num_sign_condition_coefficients", "number", ["number", "number", "number"], [c, a, i]);
            ret = new Uint32Array([ret])[0];
            return ret;
          },
          rcf_sign_condition_coefficient: Mod._Z3_rcf_sign_condition_coefficient,
          fixedpoint_query_from_lvl: function(c, d, query, lvl) {
            return Mod.async_call(Mod._async_Z3_fixedpoint_query_from_lvl, c, d, query, lvl);
          },
          fixedpoint_get_ground_sat_answer: Mod._Z3_fixedpoint_get_ground_sat_answer,
          fixedpoint_get_rules_along_trace: Mod._Z3_fixedpoint_get_rules_along_trace,
          fixedpoint_get_rule_names_along_trace: Mod._Z3_fixedpoint_get_rule_names_along_trace,
          fixedpoint_add_invariant: Mod._Z3_fixedpoint_add_invariant,
          fixedpoint_get_reachable: Mod._Z3_fixedpoint_get_reachable,
          qe_model_project: function(c, m, bound, body) {
            return Mod.ccall("Z3_qe_model_project", "number", ["number", "number", "number", "array", "number"], [
              c,
              m,
              bound.length,
              intArrayToByteArr(bound),
              body
            ]);
          },
          qe_model_project_skolem: function(c, m, bound, body, map) {
            return Mod.ccall("Z3_qe_model_project_skolem", "number", ["number", "number", "number", "array", "number", "number"], [
              c,
              m,
              bound.length,
              intArrayToByteArr(bound),
              body,
              map
            ]);
          },
          qe_model_project_with_witness: function(c, m, bound, body, map) {
            return Mod.ccall("Z3_qe_model_project_with_witness", "number", ["number", "number", "number", "array", "number", "number"], [
              c,
              m,
              bound.length,
              intArrayToByteArr(bound),
              body,
              map
            ]);
          },
          model_extrapolate: Mod._Z3_model_extrapolate,
          qe_lite: Mod._Z3_qe_lite
        }
      };
    }
  }
});

// node_modules/z3-solver/build/low-level/index.js
var require_low_level = __commonJS({
  "node_modules/z3-solver/build/low-level/index.js"(exports) {
    "use strict";
    init_cjs_shim();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding2(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_types_GENERATED(), exports);
    __exportStar2(require_wrapper_GENERATED(), exports);
  }
});

// node_modules/z3-solver/build/high-level/types.js
var require_types = __commonJS({
  "node_modules/z3-solver/build/high-level/types.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Z3AssertionError = exports.Z3Error = void 0;
    var Z3Error = class extends Error {
    };
    exports.Z3Error = Z3Error;
    var Z3AssertionError = class extends Z3Error {
    };
    exports.Z3AssertionError = Z3AssertionError;
  }
});

// node_modules/z3-solver/build/high-level/utils.js
var require_utils = __commonJS({
  "node_modules/z3-solver/build/high-level/utils.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertExhaustive = assertExhaustive;
    exports.assert = assert;
    exports.allSatisfy = allSatisfy;
    var types_1 = require_types();
    function assertExhaustive(x) {
      throw new Error("Unexpected code execution detected, should be caught at compile time");
    }
    function assert(condition, reason) {
      if (!condition) {
        throw new types_1.Z3AssertionError(reason ?? "Assertion failed");
      }
    }
    function allSatisfy(collection, premise) {
      let hasItems = false;
      for (const arg of collection) {
        hasItems = true;
        if (!premise(arg)) {
          return false;
        }
      }
      return hasItems === true ? true : null;
    }
  }
});

// node_modules/z3-solver/build/high-level/high-level.js
var require_high_level = __commonJS({
  "node_modules/z3-solver/build/high-level/high-level.js"(exports) {
    "use strict";
    init_cjs_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createApi = createApi;
    var async_mutex_1 = require_lib();
    var low_level_1 = require_low_level();
    var types_1 = require_types();
    var utils_1 = require_utils();
    var FALLBACK_PRECISION = 17;
    var asyncMutex = new async_mutex_1.Mutex();
    function isCoercibleRational(obj) {
      const r = obj !== null && (typeof obj === "object" || typeof obj === "function") && (obj.numerator !== null && (typeof obj.numerator === "number" || typeof obj.numerator === "bigint")) && (obj.denominator !== null && (typeof obj.denominator === "number" || typeof obj.denominator === "bigint"));
      r && (0, utils_1.assert)((typeof obj.numerator !== "number" || Number.isSafeInteger(obj.numerator)) && (typeof obj.denominator !== "number" || Number.isSafeInteger(obj.denominator)), "Fraction numerator and denominator must be integers");
      return r;
    }
    function createApi(Z3) {
      const cleanup = new FinalizationRegistry((callback) => callback());
      function enableTrace(tag) {
        Z3.enable_trace(tag);
      }
      function disableTrace(tag) {
        Z3.disable_trace(tag);
      }
      function getVersion() {
        return Z3.get_version();
      }
      function getVersionString() {
        const { major, minor, build_number } = Z3.get_version();
        return `${major}.${minor}.${build_number}`;
      }
      function getFullVersion() {
        return Z3.get_full_version();
      }
      function openLog(filename) {
        return Z3.open_log(filename);
      }
      function appendLog(s) {
        Z3.append_log(s);
      }
      function setParam(key, value) {
        if (typeof key === "string") {
          Z3.global_param_set(key, value.toString());
        } else {
          (0, utils_1.assert)(value === void 0, "Can't provide a Record and second parameter to set_param at the same time");
          Object.entries(key).forEach(([key2, value2]) => setParam(key2, value2));
        }
      }
      function resetParams() {
        Z3.global_param_reset_all();
      }
      function getParam(name) {
        return Z3.global_param_get(name);
      }
      function createContext(name, options) {
        const cfg = Z3.mk_config();
        if (options != null) {
          Object.entries(options).forEach(([key, value]) => check(Z3.set_param_value(cfg, key, value.toString())));
        }
        const contextPtr = Z3.mk_context_rc(cfg);
        Z3.set_ast_print_mode(contextPtr, low_level_1.Z3_ast_print_mode.Z3_PRINT_SMTLIB2_COMPLIANT);
        Z3.del_config(cfg);
        function _assertContext(...ctxs) {
          ctxs.forEach((other) => (0, utils_1.assert)("ctx" in other ? ctx === other.ctx : ctx === other, "Context mismatch"));
        }
        function _assertPtr(ptr) {
          if (ptr == null)
            throw new TypeError("Expected non-null pointer");
        }
        function throwIfError() {
          if (Z3.get_error_code(contextPtr) !== low_level_1.Z3_error_code.Z3_OK) {
            throw new Error(Z3.get_error_msg(ctx.ptr, Z3.get_error_code(ctx.ptr)));
          }
        }
        function check(val) {
          throwIfError();
          return val;
        }
        function _toSymbol(s) {
          if (typeof s === "number") {
            return check(Z3.mk_int_symbol(contextPtr, s));
          } else {
            return check(Z3.mk_string_symbol(contextPtr, s));
          }
        }
        function _fromSymbol(sym) {
          const kind = check(Z3.get_symbol_kind(contextPtr, sym));
          switch (kind) {
            case low_level_1.Z3_symbol_kind.Z3_INT_SYMBOL:
              return Z3.get_symbol_int(contextPtr, sym);
            case low_level_1.Z3_symbol_kind.Z3_STRING_SYMBOL:
              return Z3.get_symbol_string(contextPtr, sym);
            default:
              (0, utils_1.assertExhaustive)(kind);
          }
        }
        function _toParams(key, value) {
          const params = Z3.mk_params(contextPtr);
          Z3.params_inc_ref(contextPtr, params);
          if (typeof value === "boolean") {
            Z3.params_set_bool(contextPtr, params, _toSymbol(key), value);
          } else if (typeof value === "number") {
            if (Number.isInteger(value)) {
              check(Z3.params_set_uint(contextPtr, params, _toSymbol(key), value));
            } else {
              check(Z3.params_set_double(contextPtr, params, _toSymbol(key), value));
            }
          } else if (typeof value === "string") {
            check(Z3.params_set_symbol(contextPtr, params, _toSymbol(key), _toSymbol(value)));
          }
          return params;
        }
        function _toAst(ast) {
          switch (check(Z3.get_ast_kind(contextPtr, ast))) {
            case low_level_1.Z3_ast_kind.Z3_SORT_AST:
              return _toSort(ast);
            case low_level_1.Z3_ast_kind.Z3_FUNC_DECL_AST:
              return new FuncDeclImpl(ast);
            default:
              return _toExpr(ast);
          }
        }
        function _toSort(ast) {
          switch (check(Z3.get_sort_kind(contextPtr, ast))) {
            case low_level_1.Z3_sort_kind.Z3_BOOL_SORT:
              return new BoolSortImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_INT_SORT:
            case low_level_1.Z3_sort_kind.Z3_REAL_SORT:
              return new ArithSortImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_BV_SORT:
              return new BitVecSortImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_ARRAY_SORT:
              return new ArraySortImpl(ast);
            default:
              return new SortImpl(ast);
          }
        }
        function _toExpr(ast) {
          const kind = check(Z3.get_ast_kind(contextPtr, ast));
          if (kind === low_level_1.Z3_ast_kind.Z3_QUANTIFIER_AST) {
            if (Z3.is_lambda(contextPtr, ast)) {
              return new LambdaImpl(ast);
            }
            return new NonLambdaQuantifierImpl(ast);
          }
          const sortKind = check(Z3.get_sort_kind(contextPtr, Z3.get_sort(contextPtr, ast)));
          switch (sortKind) {
            case low_level_1.Z3_sort_kind.Z3_BOOL_SORT:
              return new BoolImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_INT_SORT:
              if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                return new IntNumImpl(ast);
              }
              return new ArithImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_REAL_SORT:
              if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                return new RatNumImpl(ast);
              }
              return new ArithImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_BV_SORT:
              if (kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST) {
                return new BitVecNumImpl(ast);
              }
              return new BitVecImpl(ast);
            case low_level_1.Z3_sort_kind.Z3_ARRAY_SORT:
              return new ArrayImpl(ast);
            default:
              return new ExprImpl(ast);
          }
        }
        function _flattenArgs(args) {
          const result = [];
          for (const arg of args) {
            if (isAstVector(arg)) {
              result.push(...arg.values());
            } else {
              result.push(arg);
            }
          }
          return result;
        }
        function _toProbe(p) {
          if (isProbe(p)) {
            return p;
          }
          return new ProbeImpl(p);
        }
        function _probeNary(f, args) {
          (0, utils_1.assert)(args.length > 0, "At least one argument expected");
          let r = _toProbe(args[0]);
          for (let i = 1; i < args.length; i++) {
            r = new ProbeImpl(check(f(contextPtr, r.ptr, _toProbe(args[i]).ptr)));
          }
          return r;
        }
        function interrupt() {
          check(Z3.interrupt(contextPtr));
        }
        function isModel(obj) {
          const r = obj instanceof ModelImpl;
          r && _assertContext(obj);
          return r;
        }
        function isAst(obj) {
          const r = obj instanceof AstImpl;
          r && _assertContext(obj);
          return r;
        }
        function isSort(obj) {
          const r = obj instanceof SortImpl;
          r && _assertContext(obj);
          return r;
        }
        function isFuncDecl(obj) {
          const r = obj instanceof FuncDeclImpl;
          r && _assertContext(obj);
          return r;
        }
        function isFuncInterp(obj) {
          const r = obj instanceof FuncInterpImpl;
          r && _assertContext(obj);
          return r;
        }
        function isApp(obj) {
          if (!isExpr(obj)) {
            return false;
          }
          const kind = check(Z3.get_ast_kind(contextPtr, obj.ast));
          return kind === low_level_1.Z3_ast_kind.Z3_NUMERAL_AST || kind === low_level_1.Z3_ast_kind.Z3_APP_AST;
        }
        function isConst(obj) {
          return isExpr(obj) && isApp(obj) && obj.numArgs() === 0;
        }
        function isExpr(obj) {
          const r = obj instanceof ExprImpl;
          r && _assertContext(obj);
          return r;
        }
        function isVar(obj) {
          return isExpr(obj) && check(Z3.get_ast_kind(contextPtr, obj.ast)) === low_level_1.Z3_ast_kind.Z3_VAR_AST;
        }
        function isAppOf(obj, kind) {
          return isExpr(obj) && isApp(obj) && obj.decl().kind() === kind;
        }
        function isBool(obj) {
          const r = obj instanceof ExprImpl && obj.sort.kind() === low_level_1.Z3_sort_kind.Z3_BOOL_SORT;
          r && _assertContext(obj);
          return r;
        }
        function isTrue(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_TRUE);
        }
        function isFalse(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_FALSE);
        }
        function isAnd(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_AND);
        }
        function isOr(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_OR);
        }
        function isImplies(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_IMPLIES);
        }
        function isNot(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_NOT);
        }
        function isEq(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_EQ);
        }
        function isDistinct(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_DISTINCT);
        }
        function isQuantifier(obj) {
          const r = obj instanceof QuantifierImpl;
          r && _assertContext(obj);
          return r;
        }
        function isArith(obj) {
          const r = obj instanceof ArithImpl;
          r && _assertContext(obj);
          return r;
        }
        function isArithSort(obj) {
          const r = obj instanceof ArithSortImpl;
          r && _assertContext(obj);
          return r;
        }
        function isInt(obj) {
          return isArith(obj) && isIntSort(obj.sort);
        }
        function isIntVal(obj) {
          const r = obj instanceof IntNumImpl;
          r && _assertContext(obj);
          return r;
        }
        function isIntSort(obj) {
          return isSort(obj) && obj.kind() === low_level_1.Z3_sort_kind.Z3_INT_SORT;
        }
        function isReal(obj) {
          return isArith(obj) && isRealSort(obj.sort);
        }
        function isRealVal(obj) {
          const r = obj instanceof RatNumImpl;
          r && _assertContext(obj);
          return r;
        }
        function isRealSort(obj) {
          return isSort(obj) && obj.kind() === low_level_1.Z3_sort_kind.Z3_REAL_SORT;
        }
        function isBitVecSort(obj) {
          const r = obj instanceof BitVecSortImpl;
          r && _assertContext(obj);
          return r;
        }
        function isBitVec(obj) {
          const r = obj instanceof BitVecImpl;
          r && _assertContext(obj);
          return r;
        }
        function isBitVecVal(obj) {
          const r = obj instanceof BitVecNumImpl;
          r && _assertContext(obj);
          return r;
        }
        function isArraySort(obj) {
          const r = obj instanceof ArraySortImpl;
          r && _assertContext(obj);
          return r;
        }
        function isArray(obj) {
          const r = obj instanceof ArrayImpl;
          r && _assertContext(obj);
          return r;
        }
        function isConstArray(obj) {
          return isAppOf(obj, low_level_1.Z3_decl_kind.Z3_OP_CONST_ARRAY);
        }
        function isProbe(obj) {
          const r = obj instanceof ProbeImpl;
          r && _assertContext(obj);
          return r;
        }
        function isTactic(obj) {
          const r = obj instanceof TacticImpl;
          r && _assertContext(obj);
          return r;
        }
        function isAstVector(obj) {
          const r = obj instanceof AstVectorImpl;
          r && _assertContext(obj);
          return r;
        }
        function eqIdentity(a, b) {
          return a.eqIdentity(b);
        }
        function getVarIndex(obj) {
          (0, utils_1.assert)(isVar(obj), "Z3 bound variable expected");
          return Z3.get_index_value(contextPtr, obj.ast);
        }
        function from(value) {
          if (typeof value === "boolean") {
            return Bool.val(value);
          } else if (typeof value === "number") {
            if (!Number.isFinite(value)) {
              throw new Error(`cannot represent infinity/NaN (got ${value})`);
            }
            if (Math.floor(value) === value) {
              return Int.val(value);
            }
            return Real.val(value);
          } else if (isCoercibleRational(value)) {
            return Real.val(value);
          } else if (typeof value === "bigint") {
            return Int.val(value);
          } else if (isExpr(value)) {
            return value;
          }
          (0, utils_1.assert)(false);
        }
        async function solve(...assertions) {
          const solver = new ctx.Solver();
          solver.add(...assertions);
          const result = await solver.check();
          if (result === "sat") {
            return solver.model();
          }
          return result;
        }
        async function simplify(e) {
          const result = await Z3.simplify(contextPtr, e.ast);
          return _toExpr(check(result));
        }
        const Sort = {
          declare: (name2) => new SortImpl(Z3.mk_uninterpreted_sort(contextPtr, _toSymbol(name2)))
        };
        const Function = {
          declare: (name2, ...signature) => {
            const arity = signature.length - 1;
            const rng = signature[arity];
            _assertContext(rng);
            const dom = [];
            for (let i = 0; i < arity; i++) {
              _assertContext(signature[i]);
              dom.push(signature[i].ptr);
            }
            return new FuncDeclImpl(Z3.mk_func_decl(contextPtr, _toSymbol(name2), dom, rng.ptr));
          },
          fresh: (...signature) => {
            const arity = signature.length - 1;
            const rng = signature[arity];
            _assertContext(rng);
            const dom = [];
            for (let i = 0; i < arity; i++) {
              _assertContext(signature[i]);
              dom.push(signature[i].ptr);
            }
            return new FuncDeclImpl(Z3.mk_fresh_func_decl(contextPtr, "f", dom, rng.ptr));
          }
        };
        const RecFunc = {
          declare: (name2, ...signature) => {
            const arity = signature.length - 1;
            const rng = signature[arity];
            _assertContext(rng);
            const dom = [];
            for (let i = 0; i < arity; i++) {
              _assertContext(signature[i]);
              dom.push(signature[i].ptr);
            }
            return new FuncDeclImpl(Z3.mk_rec_func_decl(contextPtr, _toSymbol(name2), dom, rng.ptr));
          },
          addDefinition: (f, args, body) => {
            _assertContext(f, ...args, body);
            check(Z3.add_rec_def(contextPtr, f.ptr, args.map((arg) => arg.ast), body.ast));
          }
        };
        const Bool = {
          sort: () => new BoolSortImpl(Z3.mk_bool_sort(contextPtr)),
          const: (name2) => new BoolImpl(Z3.mk_const(contextPtr, _toSymbol(name2), Bool.sort().ptr)),
          consts: (names) => {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => Bool.const(name2));
          },
          vector: (prefix, count) => {
            const result = [];
            for (let i = 0; i < count; i++) {
              result.push(Bool.const(`${prefix}__${i}`));
            }
            return result;
          },
          fresh: (prefix = "b") => new BoolImpl(Z3.mk_fresh_const(contextPtr, prefix, Bool.sort().ptr)),
          val: (value) => {
            if (value) {
              return new BoolImpl(Z3.mk_true(contextPtr));
            }
            return new BoolImpl(Z3.mk_false(contextPtr));
          }
        };
        const Int = {
          sort: () => new ArithSortImpl(Z3.mk_int_sort(contextPtr)),
          const: (name2) => new ArithImpl(Z3.mk_const(contextPtr, _toSymbol(name2), Int.sort().ptr)),
          consts: (names) => {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => Int.const(name2));
          },
          vector: (prefix, count) => {
            const result = [];
            for (let i = 0; i < count; i++) {
              result.push(Int.const(`${prefix}__${i}`));
            }
            return result;
          },
          fresh: (prefix = "x") => new ArithImpl(Z3.mk_fresh_const(contextPtr, prefix, Int.sort().ptr)),
          val: (value) => {
            (0, utils_1.assert)(typeof value === "bigint" || typeof value === "string" || Number.isSafeInteger(value));
            return new IntNumImpl(check(Z3.mk_numeral(contextPtr, value.toString(), Int.sort().ptr)));
          }
        };
        const Real = {
          sort: () => new ArithSortImpl(Z3.mk_real_sort(contextPtr)),
          const: (name2) => new ArithImpl(check(Z3.mk_const(contextPtr, _toSymbol(name2), Real.sort().ptr))),
          consts: (names) => {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => Real.const(name2));
          },
          vector: (prefix, count) => {
            const result = [];
            for (let i = 0; i < count; i++) {
              result.push(Real.const(`${prefix}__${i}`));
            }
            return result;
          },
          fresh: (prefix = "b") => new ArithImpl(Z3.mk_fresh_const(contextPtr, prefix, Real.sort().ptr)),
          val: (value) => {
            if (isCoercibleRational(value)) {
              value = `${value.numerator}/${value.denominator}`;
            }
            return new RatNumImpl(Z3.mk_numeral(contextPtr, value.toString(), Real.sort().ptr));
          }
        };
        const BitVec = {
          sort(bits) {
            (0, utils_1.assert)(Number.isSafeInteger(bits), "number of bits must be an integer");
            return new BitVecSortImpl(Z3.mk_bv_sort(contextPtr, bits));
          },
          const(name2, bits) {
            return new BitVecImpl(check(Z3.mk_const(contextPtr, _toSymbol(name2), isBitVecSort(bits) ? bits.ptr : BitVec.sort(bits).ptr)));
          },
          consts(names, bits) {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => BitVec.const(name2, bits));
          },
          val(value, bits) {
            if (value === true) {
              return BitVec.val(1, bits);
            } else if (value === false) {
              return BitVec.val(0, bits);
            }
            return new BitVecNumImpl(check(Z3.mk_numeral(contextPtr, value.toString(), isBitVecSort(bits) ? bits.ptr : BitVec.sort(bits).ptr)));
          }
        };
        const Array2 = {
          sort(...sig) {
            const arity = sig.length - 1;
            const r = sig[arity];
            const d = sig[0];
            if (arity === 1) {
              return new ArraySortImpl(Z3.mk_array_sort(contextPtr, d.ptr, r.ptr));
            }
            const dom = sig.slice(0, arity);
            return new ArraySortImpl(Z3.mk_array_sort_n(contextPtr, dom.map((s) => s.ptr), r.ptr));
          },
          const(name2, ...sig) {
            return new ArrayImpl(check(Z3.mk_const(contextPtr, _toSymbol(name2), Array2.sort(...sig).ptr)));
          },
          consts(names, ...sig) {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => Array2.const(name2, ...sig));
          },
          K(domain, value) {
            return new ArrayImpl(check(Z3.mk_const_array(contextPtr, domain.ptr, value.ptr)));
          }
        };
        const Set2 = {
          // reference: https://z3prover.github.io/api/html/namespacez3py.html#a545f894afeb24caa1b88b7f2a324ee7e
          sort(sort) {
            return Array2.sort(sort, Bool.sort());
          },
          const(name2, sort) {
            return new SetImpl(check(Z3.mk_const(contextPtr, _toSymbol(name2), Array2.sort(sort, Bool.sort()).ptr)));
          },
          consts(names, sort) {
            if (typeof names === "string") {
              names = names.split(" ");
            }
            return names.map((name2) => Set2.const(name2, sort));
          },
          empty(sort) {
            return EmptySet(sort);
          },
          val(values, sort) {
            var result = EmptySet(sort);
            for (const value of values) {
              result = SetAdd(result, value);
            }
            return result;
          }
        };
        function If(condition, onTrue, onFalse) {
          if (isProbe(condition) && isTactic(onTrue) && isTactic(onFalse)) {
            return Cond(condition, onTrue, onFalse);
          }
          (0, utils_1.assert)(!isProbe(condition) && !isTactic(onTrue) && !isTactic(onFalse), "Mixed expressions and goals");
          if (typeof condition === "boolean") {
            condition = Bool.val(condition);
          }
          onTrue = from(onTrue);
          onFalse = from(onFalse);
          return _toExpr(check(Z3.mk_ite(contextPtr, condition.ptr, onTrue.ast, onFalse.ast)));
        }
        function Distinct(...exprs) {
          (0, utils_1.assert)(exprs.length > 0, "Can't make Distinct ouf of nothing");
          return new BoolImpl(check(Z3.mk_distinct(contextPtr, exprs.map((expr) => {
            expr = from(expr);
            _assertContext(expr);
            return expr.ast;
          }))));
        }
        function Const(name2, sort) {
          _assertContext(sort);
          return _toExpr(check(Z3.mk_const(contextPtr, _toSymbol(name2), sort.ptr)));
        }
        function Consts(names, sort) {
          _assertContext(sort);
          if (typeof names === "string") {
            names = names.split(" ");
          }
          return names.map((name2) => Const(name2, sort));
        }
        function FreshConst(sort, prefix = "c") {
          _assertContext(sort);
          return _toExpr(Z3.mk_fresh_const(sort.ctx.ptr, prefix, sort.ptr));
        }
        function Var(idx, sort) {
          _assertContext(sort);
          return _toExpr(Z3.mk_bound(sort.ctx.ptr, idx, sort.ptr));
        }
        function Implies(a, b) {
          a = from(a);
          b = from(b);
          _assertContext(a, b);
          return new BoolImpl(check(Z3.mk_implies(contextPtr, a.ptr, b.ptr)));
        }
        function Iff(a, b) {
          a = from(a);
          b = from(b);
          _assertContext(a, b);
          return new BoolImpl(check(Z3.mk_iff(contextPtr, a.ptr, b.ptr)));
        }
        function Eq(a, b) {
          a = from(a);
          b = from(b);
          _assertContext(a, b);
          return a.eq(b);
        }
        function Xor(a, b) {
          a = from(a);
          b = from(b);
          _assertContext(a, b);
          return new BoolImpl(check(Z3.mk_xor(contextPtr, a.ptr, b.ptr)));
        }
        function Not(a) {
          if (typeof a === "boolean") {
            a = from(a);
          }
          _assertContext(a);
          if (isProbe(a)) {
            return new ProbeImpl(check(Z3.probe_not(contextPtr, a.ptr)));
          }
          return new BoolImpl(check(Z3.mk_not(contextPtr, a.ptr)));
        }
        function And(...args) {
          if (args.length == 1 && args[0] instanceof ctx.AstVector) {
            args = [...args[0].values()];
            (0, utils_1.assert)((0, utils_1.allSatisfy)(args, isBool) ?? true, "AstVector containing not bools");
          }
          const allProbes = (0, utils_1.allSatisfy)(args, isProbe) ?? false;
          if (allProbes) {
            return _probeNary(Z3.probe_and, args);
          } else {
            const castArgs = args.map(from);
            _assertContext(...castArgs);
            return new BoolImpl(check(Z3.mk_and(contextPtr, castArgs.map((arg) => arg.ptr))));
          }
        }
        function Or(...args) {
          if (args.length == 1 && args[0] instanceof ctx.AstVector) {
            args = [...args[0].values()];
            (0, utils_1.assert)((0, utils_1.allSatisfy)(args, isBool) ?? true, "AstVector containing not bools");
          }
          const allProbes = (0, utils_1.allSatisfy)(args, isProbe) ?? false;
          if (allProbes) {
            return _probeNary(Z3.probe_or, args);
          } else {
            const castArgs = args.map(from);
            _assertContext(...castArgs);
            return new BoolImpl(check(Z3.mk_or(contextPtr, castArgs.map((arg) => arg.ptr))));
          }
        }
        function PbEq(args, coeffs, k) {
          _assertContext(...args);
          if (args.length !== coeffs.length) {
            throw new Error("Number of arguments and coefficients must match");
          }
          return new BoolImpl(check(Z3.mk_pbeq(contextPtr, args.map((arg) => arg.ast), coeffs, k)));
        }
        function PbGe(args, coeffs, k) {
          _assertContext(...args);
          if (args.length !== coeffs.length) {
            throw new Error("Number of arguments and coefficients must match");
          }
          return new BoolImpl(check(Z3.mk_pbge(contextPtr, args.map((arg) => arg.ast), coeffs, k)));
        }
        function PbLe(args, coeffs, k) {
          _assertContext(...args);
          if (args.length !== coeffs.length) {
            throw new Error("Number of arguments and coefficients must match");
          }
          return new BoolImpl(check(Z3.mk_pble(contextPtr, args.map((arg) => arg.ast), coeffs, k)));
        }
        function ForAll(quantifiers, body, weight = 1) {
          if (!(0, utils_1.allSatisfy)(quantifiers, isConst)) {
            throw new Error("Quantifier variables must be constants");
          }
          return new NonLambdaQuantifierImpl(check(Z3.mk_quantifier_const_ex(
            contextPtr,
            true,
            weight,
            _toSymbol(""),
            _toSymbol(""),
            quantifiers.map((q) => q.ptr),
            // The earlier check verifies these are all apps
            [],
            [],
            body.ptr
          )));
        }
        function Exists(quantifiers, body, weight = 1) {
          if (!(0, utils_1.allSatisfy)(quantifiers, isConst)) {
            throw new Error("Quantifier variables must be constants");
          }
          return new NonLambdaQuantifierImpl(check(Z3.mk_quantifier_const_ex(
            contextPtr,
            false,
            weight,
            _toSymbol(""),
            _toSymbol(""),
            quantifiers.map((q) => q.ptr),
            // The earlier check verifies these are all apps
            [],
            [],
            body.ptr
          )));
        }
        function Lambda(quantifiers, expr) {
          if (!(0, utils_1.allSatisfy)(quantifiers, isConst)) {
            throw new Error("Quantifier variables must be constants");
          }
          return new LambdaImpl(check(Z3.mk_lambda_const(contextPtr, quantifiers.map((q) => q.ptr), expr.ptr)));
        }
        function ToReal(expr) {
          expr = from(expr);
          _assertContext(expr);
          (0, utils_1.assert)(isInt(expr), "Int expression expected");
          return new ArithImpl(check(Z3.mk_int2real(contextPtr, expr.ast)));
        }
        function ToInt(expr) {
          if (!isExpr(expr)) {
            expr = Real.val(expr);
          }
          _assertContext(expr);
          (0, utils_1.assert)(isReal(expr), "Real expression expected");
          return new ArithImpl(check(Z3.mk_real2int(contextPtr, expr.ast)));
        }
        function IsInt(expr) {
          if (!isExpr(expr)) {
            expr = Real.val(expr);
          }
          _assertContext(expr);
          (0, utils_1.assert)(isReal(expr), "Real expression expected");
          return new BoolImpl(check(Z3.mk_is_int(contextPtr, expr.ast)));
        }
        function Sqrt(a) {
          if (!isExpr(a)) {
            a = Real.val(a);
          }
          return a.pow("1/2");
        }
        function Cbrt(a) {
          if (!isExpr(a)) {
            a = Real.val(a);
          }
          return a.pow("1/3");
        }
        function BV2Int(a, isSigned) {
          _assertContext(a);
          return new ArithImpl(check(Z3.mk_bv2int(contextPtr, a.ast, isSigned)));
        }
        function Int2BV(a, bits) {
          if (isArith(a)) {
            (0, utils_1.assert)(isInt(a), "parameter must be an integer");
          } else {
            (0, utils_1.assert)(typeof a !== "number" || Number.isSafeInteger(a), "parameter must not have decimal places");
            a = Int.val(a);
          }
          return new BitVecImpl(check(Z3.mk_int2bv(contextPtr, bits, a.ast)));
        }
        function Concat(...bitvecs) {
          _assertContext(...bitvecs);
          return bitvecs.reduce((prev, curr) => new BitVecImpl(check(Z3.mk_concat(contextPtr, prev.ast, curr.ast))));
        }
        function Cond(probe, onTrue, onFalse) {
          _assertContext(probe, onTrue, onFalse);
          return new TacticImpl(check(Z3.tactic_cond(contextPtr, probe.ptr, onTrue.ptr, onFalse.ptr)));
        }
        function LT(a, b) {
          return new BoolImpl(check(Z3.mk_lt(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function GT(a, b) {
          return new BoolImpl(check(Z3.mk_gt(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function LE(a, b) {
          return new BoolImpl(check(Z3.mk_le(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function GE(a, b) {
          return new BoolImpl(check(Z3.mk_ge(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function ULT(a, b) {
          return new BoolImpl(check(Z3.mk_bvult(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function UGT(a, b) {
          return new BoolImpl(check(Z3.mk_bvugt(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function ULE(a, b) {
          return new BoolImpl(check(Z3.mk_bvule(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function UGE(a, b) {
          return new BoolImpl(check(Z3.mk_bvuge(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function SLT(a, b) {
          return new BoolImpl(check(Z3.mk_bvslt(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function SGT(a, b) {
          return new BoolImpl(check(Z3.mk_bvsgt(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function SLE(a, b) {
          return new BoolImpl(check(Z3.mk_bvsle(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function SGE(a, b) {
          return new BoolImpl(check(Z3.mk_bvsge(contextPtr, a.ast, a.sort.cast(b).ast)));
        }
        function Extract(hi, lo, val) {
          return new BitVecImpl(check(Z3.mk_extract(contextPtr, hi, lo, val.ast)));
        }
        function Select(array, ...indices) {
          const args = indices.map((arg, i) => array.domain_n(i).cast(arg));
          if (args.length === 1) {
            return _toExpr(check(Z3.mk_select(contextPtr, array.ast, args[0].ast)));
          }
          const _args = args.map((arg) => arg.ast);
          return _toExpr(check(Z3.mk_select_n(contextPtr, array.ast, _args)));
        }
        function Store(array, ...indicesAndValue) {
          const args = indicesAndValue.map((arg, i) => {
            if (i === indicesAndValue.length - 1) {
              return array.range().cast(arg);
            }
            return array.domain_n(i).cast(arg);
          });
          if (args.length <= 1) {
            throw new Error("Array store requires both index and value arguments");
          }
          if (args.length === 2) {
            return _toExpr(check(Z3.mk_store(contextPtr, array.ast, args[0].ast, args[1].ast)));
          }
          const _idxs = args.slice(0, args.length - 1).map((arg) => arg.ast);
          return _toExpr(check(Z3.mk_store_n(contextPtr, array.ast, _idxs, args[args.length - 1].ast)));
        }
        function SetUnion(...args) {
          return new SetImpl(check(Z3.mk_set_union(contextPtr, args.map((arg) => arg.ast))));
        }
        function SetIntersect(...args) {
          return new SetImpl(check(Z3.mk_set_intersect(contextPtr, args.map((arg) => arg.ast))));
        }
        function SetDifference(a, b) {
          return new SetImpl(check(Z3.mk_set_difference(contextPtr, a.ast, b.ast)));
        }
        function SetHasSize(set, size) {
          const a = typeof size === "object" ? Int.sort().cast(size) : Int.sort().cast(size);
          return new BoolImpl(check(Z3.mk_set_has_size(contextPtr, set.ast, a.ast)));
        }
        function SetAdd(set, elem) {
          const arg = set.elemSort().cast(elem);
          return new SetImpl(check(Z3.mk_set_add(contextPtr, set.ast, arg.ast)));
        }
        function SetDel(set, elem) {
          const arg = set.elemSort().cast(elem);
          return new SetImpl(check(Z3.mk_set_del(contextPtr, set.ast, arg.ast)));
        }
        function SetComplement(set) {
          return new SetImpl(check(Z3.mk_set_complement(contextPtr, set.ast)));
        }
        function EmptySet(sort) {
          return new SetImpl(check(Z3.mk_empty_set(contextPtr, sort.ptr)));
        }
        function FullSet(sort) {
          return new SetImpl(check(Z3.mk_full_set(contextPtr, sort.ptr)));
        }
        function isMember(elem, set) {
          const arg = set.elemSort().cast(elem);
          return new BoolImpl(check(Z3.mk_set_member(contextPtr, arg.ast, set.ast)));
        }
        function isSubset(a, b) {
          return new BoolImpl(check(Z3.mk_set_subset(contextPtr, a.ast, b.ast)));
        }
        class AstImpl {
          constructor(ptr) {
            this.ptr = ptr;
            this.ctx = ctx;
            const myAst = this.ast;
            Z3.inc_ref(contextPtr, myAst);
            cleanup.register(this, () => Z3.dec_ref(contextPtr, myAst), this);
          }
          get ast() {
            return this.ptr;
          }
          id() {
            return Z3.get_ast_id(contextPtr, this.ast);
          }
          eqIdentity(other) {
            _assertContext(other);
            return check(Z3.is_eq_ast(contextPtr, this.ast, other.ast));
          }
          neqIdentity(other) {
            _assertContext(other);
            return !this.eqIdentity(other);
          }
          sexpr() {
            return Z3.ast_to_string(contextPtr, this.ast);
          }
          hash() {
            return Z3.get_ast_hash(contextPtr, this.ast);
          }
          toString() {
            return this.sexpr();
          }
        }
        class SolverImpl {
          get ptr() {
            _assertPtr(this._ptr);
            return this._ptr;
          }
          constructor(ptr = Z3.mk_solver(contextPtr)) {
            this.ctx = ctx;
            let myPtr;
            if (typeof ptr === "string") {
              myPtr = check(Z3.mk_solver_for_logic(contextPtr, _toSymbol(ptr)));
            } else {
              myPtr = ptr;
            }
            this._ptr = myPtr;
            Z3.solver_inc_ref(contextPtr, myPtr);
            cleanup.register(this, () => Z3.solver_dec_ref(contextPtr, myPtr), this);
          }
          set(key, value) {
            Z3.solver_set_params(contextPtr, this.ptr, _toParams(key, value));
          }
          push() {
            Z3.solver_push(contextPtr, this.ptr);
          }
          pop(num = 1) {
            Z3.solver_pop(contextPtr, this.ptr, num);
          }
          numScopes() {
            return Z3.solver_get_num_scopes(contextPtr, this.ptr);
          }
          reset() {
            Z3.solver_reset(contextPtr, this.ptr);
          }
          add(...exprs) {
            _flattenArgs(exprs).forEach((expr) => {
              _assertContext(expr);
              check(Z3.solver_assert(contextPtr, this.ptr, expr.ast));
            });
          }
          addAndTrack(expr, constant) {
            if (typeof constant === "string") {
              constant = Bool.const(constant);
            }
            (0, utils_1.assert)(isConst(constant), "Provided expression that is not a constant to addAndTrack");
            check(Z3.solver_assert_and_track(contextPtr, this.ptr, expr.ast, constant.ast));
          }
          assertions() {
            return new AstVectorImpl(check(Z3.solver_get_assertions(contextPtr, this.ptr)));
          }
          async check(...exprs) {
            const assumptions = _flattenArgs(exprs).map((expr) => {
              _assertContext(expr);
              return expr.ast;
            });
            const result = await asyncMutex.runExclusive(() => check(Z3.solver_check_assumptions(contextPtr, this.ptr, assumptions)));
            switch (result) {
              case low_level_1.Z3_lbool.Z3_L_FALSE:
                return "unsat";
              case low_level_1.Z3_lbool.Z3_L_TRUE:
                return "sat";
              case low_level_1.Z3_lbool.Z3_L_UNDEF:
                return "unknown";
              default:
                (0, utils_1.assertExhaustive)(result);
            }
          }
          model() {
            return new ModelImpl(check(Z3.solver_get_model(contextPtr, this.ptr)));
          }
          toString() {
            return check(Z3.solver_to_string(contextPtr, this.ptr));
          }
          fromString(s) {
            Z3.solver_from_string(contextPtr, this.ptr, s);
            throwIfError();
          }
          release() {
            Z3.solver_dec_ref(contextPtr, this.ptr);
            this._ptr = null;
            cleanup.unregister(this);
          }
        }
        class OptimizeImpl {
          get ptr() {
            _assertPtr(this._ptr);
            return this._ptr;
          }
          constructor(ptr = Z3.mk_optimize(contextPtr)) {
            this.ctx = ctx;
            let myPtr;
            myPtr = ptr;
            this._ptr = myPtr;
            Z3.optimize_inc_ref(contextPtr, myPtr);
            cleanup.register(this, () => Z3.optimize_dec_ref(contextPtr, myPtr), this);
          }
          set(key, value) {
            Z3.optimize_set_params(contextPtr, this.ptr, _toParams(key, value));
          }
          push() {
            Z3.optimize_push(contextPtr, this.ptr);
          }
          pop() {
            Z3.optimize_pop(contextPtr, this.ptr);
          }
          add(...exprs) {
            _flattenArgs(exprs).forEach((expr) => {
              _assertContext(expr);
              check(Z3.optimize_assert(contextPtr, this.ptr, expr.ast));
            });
          }
          addSoft(expr, weight, id = "") {
            if (isCoercibleRational(weight)) {
              weight = `${weight.numerator}/${weight.denominator}`;
            }
            check(Z3.optimize_assert_soft(contextPtr, this.ptr, expr.ast, weight.toString(), _toSymbol(id)));
          }
          addAndTrack(expr, constant) {
            if (typeof constant === "string") {
              constant = Bool.const(constant);
            }
            (0, utils_1.assert)(isConst(constant), "Provided expression that is not a constant to addAndTrack");
            check(Z3.optimize_assert_and_track(contextPtr, this.ptr, expr.ast, constant.ast));
          }
          assertions() {
            return new AstVectorImpl(check(Z3.optimize_get_assertions(contextPtr, this.ptr)));
          }
          maximize(expr) {
            check(Z3.optimize_maximize(contextPtr, this.ptr, expr.ast));
          }
          minimize(expr) {
            check(Z3.optimize_minimize(contextPtr, this.ptr, expr.ast));
          }
          async check(...exprs) {
            const assumptions = _flattenArgs(exprs).map((expr) => {
              _assertContext(expr);
              return expr.ast;
            });
            const result = await asyncMutex.runExclusive(() => check(Z3.optimize_check(contextPtr, this.ptr, assumptions)));
            switch (result) {
              case low_level_1.Z3_lbool.Z3_L_FALSE:
                return "unsat";
              case low_level_1.Z3_lbool.Z3_L_TRUE:
                return "sat";
              case low_level_1.Z3_lbool.Z3_L_UNDEF:
                return "unknown";
              default:
                (0, utils_1.assertExhaustive)(result);
            }
          }
          model() {
            return new ModelImpl(check(Z3.optimize_get_model(contextPtr, this.ptr)));
          }
          toString() {
            return check(Z3.optimize_to_string(contextPtr, this.ptr));
          }
          fromString(s) {
            Z3.optimize_from_string(contextPtr, this.ptr, s);
            throwIfError();
          }
          release() {
            Z3.optimize_dec_ref(contextPtr, this.ptr);
            this._ptr = null;
            cleanup.unregister(this);
          }
        }
        class ModelImpl {
          get ptr() {
            _assertPtr(this._ptr);
            return this._ptr;
          }
          constructor(ptr = Z3.mk_model(contextPtr)) {
            this.ctx = ctx;
            this._ptr = ptr;
            Z3.model_inc_ref(contextPtr, ptr);
            cleanup.register(this, () => Z3.model_dec_ref(contextPtr, ptr), this);
          }
          length() {
            return Z3.model_get_num_consts(contextPtr, this.ptr) + Z3.model_get_num_funcs(contextPtr, this.ptr);
          }
          [Symbol.iterator]() {
            return this.values();
          }
          *entries() {
            const length = this.length();
            for (let i = 0; i < length; i++) {
              yield [i, this.get(i)];
            }
          }
          *keys() {
            for (const [key] of this.entries()) {
              yield key;
            }
          }
          *values() {
            for (const [, value] of this.entries()) {
              yield value;
            }
          }
          decls() {
            return [...this.values()];
          }
          sexpr() {
            return check(Z3.model_to_string(contextPtr, this.ptr));
          }
          toString() {
            return this.sexpr();
          }
          eval(expr, modelCompletion = false) {
            _assertContext(expr);
            const r = check(Z3.model_eval(contextPtr, this.ptr, expr.ast, modelCompletion));
            if (r === null) {
              throw new types_1.Z3Error("Failed to evaluate expression in the model");
            }
            return _toExpr(r);
          }
          get(i, to) {
            (0, utils_1.assert)(to === void 0 || typeof i === "number");
            if (typeof i === "number") {
              const length = this.length();
              if (i >= length) {
                throw new RangeError(`expected index ${i} to be less than length ${length}`);
              }
              if (to === void 0) {
                const numConsts = check(Z3.model_get_num_consts(contextPtr, this.ptr));
                if (i < numConsts) {
                  return new FuncDeclImpl(check(Z3.model_get_const_decl(contextPtr, this.ptr, i)));
                } else {
                  return new FuncDeclImpl(check(Z3.model_get_func_decl(contextPtr, this.ptr, i - numConsts)));
                }
              }
              if (to < 0) {
                to += length;
              }
              if (to >= length) {
                throw new RangeError(`expected index ${to} to be less than length ${length}`);
              }
              const result = [];
              for (let j = i; j < to; j++) {
                result.push(this.get(j));
              }
              return result;
            } else if (isFuncDecl(i) || isExpr(i) && isConst(i)) {
              const result = this.getInterp(i);
              (0, utils_1.assert)(result !== null);
              return result;
            } else if (isSort(i)) {
              return this.getUniverse(i);
            }
            (0, utils_1.assert)(false, "Number, declaration or constant expected");
          }
          updateValue(decl, a) {
            _assertContext(decl);
            _assertContext(a);
            if (isExpr(decl)) {
              decl = decl.decl();
            }
            if (isFuncDecl(decl) && decl.arity() !== 0 && isFuncInterp(a)) {
              const funcInterp = this.addFuncInterp(decl, a.elseValue());
              for (let i = 0; i < a.numEntries(); i++) {
                const e = a.entry(i);
                const n = e.numArgs();
                const args = global.Array(n).map((_, i2) => e.argValue(i2));
                funcInterp.addEntry(args, e.value());
              }
              return;
            }
            if (!isFuncDecl(decl) || decl.arity() !== 0) {
              throw new types_1.Z3Error("Expecting 0-ary function or constant expression");
            }
            if (!isAst(a)) {
              throw new types_1.Z3Error("Only func declarations can be assigned to func interpretations");
            }
            check(Z3.add_const_interp(contextPtr, this.ptr, decl.ptr, a.ast));
          }
          addFuncInterp(decl, defaultValue) {
            const fi = check(Z3.add_func_interp(contextPtr, this.ptr, decl.ptr, decl.range().cast(defaultValue).ptr));
            return new FuncInterpImpl(fi);
          }
          getInterp(expr) {
            (0, utils_1.assert)(isFuncDecl(expr) || isConst(expr), "Declaration expected");
            if (isConst(expr)) {
              (0, utils_1.assert)(isExpr(expr));
              expr = expr.decl();
            }
            (0, utils_1.assert)(isFuncDecl(expr));
            if (expr.arity() === 0) {
              const result = check(Z3.model_get_const_interp(contextPtr, this.ptr, expr.ptr));
              if (result === null) {
                return null;
              }
              return _toExpr(result);
            } else {
              const interp = check(Z3.model_get_func_interp(contextPtr, this.ptr, expr.ptr));
              if (interp === null) {
                return null;
              }
              return new FuncInterpImpl(interp);
            }
          }
          getUniverse(sort) {
            _assertContext(sort);
            return new AstVectorImpl(check(Z3.model_get_sort_universe(contextPtr, this.ptr, sort.ptr)));
          }
          release() {
            Z3.model_dec_ref(contextPtr, this.ptr);
            this._ptr = null;
            cleanup.unregister(this);
          }
        }
        class FuncEntryImpl {
          constructor(ptr) {
            this.ptr = ptr;
            this.ctx = ctx;
            Z3.func_entry_inc_ref(contextPtr, ptr);
            cleanup.register(this, () => Z3.func_entry_dec_ref(contextPtr, ptr), this);
          }
          numArgs() {
            return check(Z3.func_entry_get_num_args(contextPtr, this.ptr));
          }
          argValue(i) {
            return _toExpr(check(Z3.func_entry_get_arg(contextPtr, this.ptr, i)));
          }
          value() {
            return _toExpr(check(Z3.func_entry_get_value(contextPtr, this.ptr)));
          }
        }
        class FuncInterpImpl {
          constructor(ptr) {
            this.ptr = ptr;
            this.ctx = ctx;
            Z3.func_interp_inc_ref(contextPtr, ptr);
            cleanup.register(this, () => Z3.func_interp_dec_ref(contextPtr, ptr), this);
          }
          elseValue() {
            return _toExpr(check(Z3.func_interp_get_else(contextPtr, this.ptr)));
          }
          numEntries() {
            return check(Z3.func_interp_get_num_entries(contextPtr, this.ptr));
          }
          arity() {
            return check(Z3.func_interp_get_arity(contextPtr, this.ptr));
          }
          entry(i) {
            return new FuncEntryImpl(check(Z3.func_interp_get_entry(contextPtr, this.ptr, i)));
          }
          addEntry(args, value) {
            const argsVec = new AstVectorImpl();
            for (const arg of args) {
              argsVec.push(arg);
            }
            _assertContext(argsVec);
            _assertContext(value);
            (0, utils_1.assert)(this.arity() === argsVec.length(), "Number of arguments in entry doesn't match function arity");
            check(Z3.func_interp_add_entry(contextPtr, this.ptr, argsVec.ptr, value.ptr));
          }
        }
        class SortImpl extends AstImpl {
          get ast() {
            return Z3.sort_to_ast(contextPtr, this.ptr);
          }
          kind() {
            return Z3.get_sort_kind(contextPtr, this.ptr);
          }
          subsort(other) {
            _assertContext(other);
            return false;
          }
          cast(expr) {
            _assertContext(expr);
            (0, utils_1.assert)(expr.sort.eqIdentity(expr.sort), "Sort mismatch");
            return expr;
          }
          name() {
            return _fromSymbol(Z3.get_sort_name(contextPtr, this.ptr));
          }
          eqIdentity(other) {
            _assertContext(other);
            return check(Z3.is_eq_sort(contextPtr, this.ptr, other.ptr));
          }
          neqIdentity(other) {
            return !this.eqIdentity(other);
          }
        }
        class FuncDeclImpl extends AstImpl {
          get ast() {
            return Z3.func_decl_to_ast(contextPtr, this.ptr);
          }
          name() {
            return _fromSymbol(Z3.get_decl_name(contextPtr, this.ptr));
          }
          arity() {
            return Z3.get_arity(contextPtr, this.ptr);
          }
          domain(i) {
            (0, utils_1.assert)(i < this.arity(), "Index out of bounds");
            return _toSort(Z3.get_domain(contextPtr, this.ptr, i));
          }
          range() {
            return _toSort(Z3.get_range(contextPtr, this.ptr));
          }
          kind() {
            return Z3.get_decl_kind(contextPtr, this.ptr);
          }
          params() {
            const n = Z3.get_decl_num_parameters(contextPtr, this.ptr);
            const result = [];
            for (let i = 0; i < n; i++) {
              const kind = check(Z3.get_decl_parameter_kind(contextPtr, this.ptr, i));
              switch (kind) {
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_INT:
                  result.push(check(Z3.get_decl_int_parameter(contextPtr, this.ptr, i)));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_DOUBLE:
                  result.push(check(Z3.get_decl_double_parameter(contextPtr, this.ptr, i)));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_RATIONAL:
                  result.push(check(Z3.get_decl_rational_parameter(contextPtr, this.ptr, i)));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_SYMBOL:
                  result.push(_fromSymbol(check(Z3.get_decl_symbol_parameter(contextPtr, this.ptr, i))));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_SORT:
                  result.push(new SortImpl(check(Z3.get_decl_sort_parameter(contextPtr, this.ptr, i))));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_AST:
                  result.push(new ExprImpl(check(Z3.get_decl_ast_parameter(contextPtr, this.ptr, i))));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_FUNC_DECL:
                  result.push(new FuncDeclImpl(check(Z3.get_decl_func_decl_parameter(contextPtr, this.ptr, i))));
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_INTERNAL:
                  break;
                case low_level_1.Z3_parameter_kind.Z3_PARAMETER_ZSTRING:
                  break;
                default:
                  (0, utils_1.assertExhaustive)(kind);
              }
            }
            return result;
          }
          call(...args) {
            (0, utils_1.assert)(args.length === this.arity(), `Incorrect number of arguments to ${this}`);
            return _toExpr(check(Z3.mk_app(contextPtr, this.ptr, args.map((arg, i) => {
              return this.domain(i).cast(arg).ast;
            }))));
          }
        }
        class ExprImpl extends AstImpl {
          get sort() {
            return _toSort(Z3.get_sort(contextPtr, this.ast));
          }
          eq(other) {
            return new BoolImpl(check(Z3.mk_eq(contextPtr, this.ast, from(other).ast)));
          }
          neq(other) {
            return new BoolImpl(check(Z3.mk_distinct(contextPtr, [this, other].map((expr) => from(expr).ast))));
          }
          name() {
            return this.decl().name();
          }
          params() {
            return this.decl().params();
          }
          decl() {
            (0, utils_1.assert)(isApp(this), "Z3 application expected");
            return new FuncDeclImpl(check(Z3.get_app_decl(contextPtr, check(Z3.to_app(contextPtr, this.ast)))));
          }
          numArgs() {
            (0, utils_1.assert)(isApp(this), "Z3 applicaiton expected");
            return check(Z3.get_app_num_args(contextPtr, check(Z3.to_app(contextPtr, this.ast))));
          }
          arg(i) {
            (0, utils_1.assert)(isApp(this), "Z3 applicaiton expected");
            (0, utils_1.assert)(i < this.numArgs(), `Invalid argument index - expected ${i} to be less than ${this.numArgs()}`);
            return _toExpr(check(Z3.get_app_arg(contextPtr, check(Z3.to_app(contextPtr, this.ast)), i)));
          }
          children() {
            const num_args = this.numArgs();
            if (isApp(this)) {
              const result = [];
              for (let i = 0; i < num_args; i++) {
                result.push(this.arg(i));
              }
              return result;
            }
            return [];
          }
        }
        class PatternImpl {
          constructor(ptr) {
            this.ptr = ptr;
            this.ctx = ctx;
          }
        }
        class BoolSortImpl extends SortImpl {
          cast(other) {
            if (typeof other === "boolean") {
              other = Bool.val(other);
            }
            (0, utils_1.assert)(isExpr(other), "true, false or Z3 Boolean expression expected.");
            (0, utils_1.assert)(this.eqIdentity(other.sort), "Value cannot be converted into a Z3 Boolean value");
            return other;
          }
          subsort(other) {
            _assertContext(other.ctx);
            return other instanceof ArithSortImpl;
          }
        }
        class BoolImpl extends ExprImpl {
          not() {
            return Not(this);
          }
          and(other) {
            return And(this, other);
          }
          or(other) {
            return Or(this, other);
          }
          xor(other) {
            return Xor(this, other);
          }
          implies(other) {
            return Implies(this, other);
          }
          iff(other) {
            return Iff(this, other);
          }
        }
        class ProbeImpl {
          constructor(ptr) {
            this.ptr = ptr;
            this.ctx = ctx;
          }
        }
        class TacticImpl {
          constructor(tactic) {
            this.ctx = ctx;
            let myPtr;
            if (typeof tactic === "string") {
              myPtr = check(Z3.mk_tactic(contextPtr, tactic));
            } else {
              myPtr = tactic;
            }
            this.ptr = myPtr;
            Z3.tactic_inc_ref(contextPtr, myPtr);
            cleanup.register(this, () => Z3.tactic_dec_ref(contextPtr, myPtr), this);
          }
        }
        class ArithSortImpl extends SortImpl {
          cast(other) {
            const sortTypeStr = isIntSort(this) ? "IntSort" : "RealSort";
            if (isExpr(other)) {
              const otherS = other.sort;
              if (isArith(other)) {
                if (this.eqIdentity(otherS)) {
                  return other;
                } else if (isIntSort(otherS) && isRealSort(this)) {
                  return ToReal(other);
                }
                (0, utils_1.assert)(false, "Can't cast Real to IntSort without loss");
              } else if (isBool(other)) {
                if (isIntSort(this)) {
                  return If(other, 1, 0);
                } else {
                  return ToReal(If(other, 1, 0));
                }
              }
              (0, utils_1.assert)(false, `Can't cast expression to ${sortTypeStr}`);
            } else {
              if (typeof other !== "boolean") {
                if (isIntSort(this)) {
                  (0, utils_1.assert)(!isCoercibleRational(other), "Can't cast fraction to IntSort");
                  return Int.val(other);
                }
                return Real.val(other);
              }
              (0, utils_1.assert)(false, `Can't cast primitive to ${sortTypeStr}`);
            }
          }
        }
        function Sum(arg0, ...args) {
          if (arg0 instanceof BitVecImpl) {
            if (args.length !== 1) {
              throw new Error("BitVec add only supports 2 arguments");
            }
            return new BitVecImpl(check(Z3.mk_bvadd(contextPtr, arg0.ast, arg0.sort.cast(args[0]).ast)));
          } else {
            (0, utils_1.assert)(arg0 instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_add(contextPtr, [arg0.ast].concat(args.map((arg) => arg0.sort.cast(arg).ast)))));
          }
        }
        function Sub(arg0, ...args) {
          if (arg0 instanceof BitVecImpl) {
            if (args.length !== 1) {
              throw new Error("BitVec sub only supports 2 arguments");
            }
            return new BitVecImpl(check(Z3.mk_bvsub(contextPtr, arg0.ast, arg0.sort.cast(args[0]).ast)));
          } else {
            (0, utils_1.assert)(arg0 instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_sub(contextPtr, [arg0.ast].concat(args.map((arg) => arg0.sort.cast(arg).ast)))));
          }
        }
        function Product(arg0, ...args) {
          if (arg0 instanceof BitVecImpl) {
            if (args.length !== 1) {
              throw new Error("BitVec mul only supports 2 arguments");
            }
            return new BitVecImpl(check(Z3.mk_bvmul(contextPtr, arg0.ast, arg0.sort.cast(args[0]).ast)));
          } else {
            (0, utils_1.assert)(arg0 instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_mul(contextPtr, [arg0.ast].concat(args.map((arg) => arg0.sort.cast(arg).ast)))));
          }
        }
        function Div(arg0, arg1) {
          if (arg0 instanceof BitVecImpl) {
            return new BitVecImpl(check(Z3.mk_bvsdiv(contextPtr, arg0.ast, arg0.sort.cast(arg1).ast)));
          } else {
            (0, utils_1.assert)(arg0 instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_div(contextPtr, arg0.ast, arg0.sort.cast(arg1).ast)));
          }
        }
        function BUDiv(arg0, arg1) {
          return new BitVecImpl(check(Z3.mk_bvudiv(contextPtr, arg0.ast, arg0.sort.cast(arg1).ast)));
        }
        function Neg(a) {
          if (a instanceof BitVecImpl) {
            return new BitVecImpl(check(Z3.mk_bvneg(contextPtr, a.ast)));
          } else {
            (0, utils_1.assert)(a instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_unary_minus(contextPtr, a.ast)));
          }
        }
        function Mod(a, b) {
          if (a instanceof BitVecImpl) {
            return new BitVecImpl(check(Z3.mk_bvsrem(contextPtr, a.ast, a.sort.cast(b).ast)));
          } else {
            (0, utils_1.assert)(a instanceof ArithImpl);
            return new ArithImpl(check(Z3.mk_mod(contextPtr, a.ast, a.sort.cast(b).ast)));
          }
        }
        class ArithImpl extends ExprImpl {
          add(other) {
            return Sum(this, other);
          }
          mul(other) {
            return Product(this, other);
          }
          sub(other) {
            return Sub(this, other);
          }
          pow(exponent) {
            return new ArithImpl(check(Z3.mk_power(contextPtr, this.ast, this.sort.cast(exponent).ast)));
          }
          div(other) {
            return Div(this, other);
          }
          mod(other) {
            return Mod(this, other);
          }
          neg() {
            return Neg(this);
          }
          le(other) {
            return LE(this, other);
          }
          lt(other) {
            return LT(this, other);
          }
          gt(other) {
            return GT(this, other);
          }
          ge(other) {
            return GE(this, other);
          }
        }
        class IntNumImpl extends ArithImpl {
          value() {
            return BigInt(this.asString());
          }
          asString() {
            return Z3.get_numeral_string(contextPtr, this.ast);
          }
          asBinary() {
            return Z3.get_numeral_binary_string(contextPtr, this.ast);
          }
        }
        class RatNumImpl extends ArithImpl {
          value() {
            return { numerator: this.numerator().value(), denominator: this.denominator().value() };
          }
          numerator() {
            return new IntNumImpl(Z3.get_numerator(contextPtr, this.ast));
          }
          denominator() {
            return new IntNumImpl(Z3.get_denominator(contextPtr, this.ast));
          }
          asNumber() {
            const { numerator, denominator } = this.value();
            const div = numerator / denominator;
            return Number(div) + Number(numerator - div * denominator) / Number(denominator);
          }
          asDecimal(prec = Number.parseInt(getParam("precision") ?? FALLBACK_PRECISION.toString())) {
            return Z3.get_numeral_decimal_string(contextPtr, this.ast, prec);
          }
          asString() {
            return Z3.get_numeral_string(contextPtr, this.ast);
          }
        }
        class BitVecSortImpl extends SortImpl {
          size() {
            return Z3.get_bv_sort_size(contextPtr, this.ptr);
          }
          subsort(other) {
            return isBitVecSort(other) && this.size() < other.size();
          }
          cast(other) {
            if (isExpr(other)) {
              _assertContext(other);
              return other;
            }
            (0, utils_1.assert)(!isCoercibleRational(other), "Can't convert rational to BitVec");
            return BitVec.val(other, this.size());
          }
        }
        class BitVecImpl extends ExprImpl {
          size() {
            return this.sort.size();
          }
          add(other) {
            return Sum(this, other);
          }
          mul(other) {
            return Product(this, other);
          }
          sub(other) {
            return Sub(this, other);
          }
          sdiv(other) {
            return Div(this, other);
          }
          udiv(other) {
            return BUDiv(this, other);
          }
          smod(other) {
            return Mod(this, other);
          }
          urem(other) {
            return new BitVecImpl(check(Z3.mk_bvurem(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          srem(other) {
            return new BitVecImpl(check(Z3.mk_bvsrem(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          neg() {
            return Neg(this);
          }
          or(other) {
            return new BitVecImpl(check(Z3.mk_bvor(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          and(other) {
            return new BitVecImpl(check(Z3.mk_bvand(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          nand(other) {
            return new BitVecImpl(check(Z3.mk_bvnand(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          xor(other) {
            return new BitVecImpl(check(Z3.mk_bvxor(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          xnor(other) {
            return new BitVecImpl(check(Z3.mk_bvxnor(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          shr(count) {
            return new BitVecImpl(check(Z3.mk_bvashr(contextPtr, this.ast, this.sort.cast(count).ast)));
          }
          lshr(count) {
            return new BitVecImpl(check(Z3.mk_bvlshr(contextPtr, this.ast, this.sort.cast(count).ast)));
          }
          shl(count) {
            return new BitVecImpl(check(Z3.mk_bvshl(contextPtr, this.ast, this.sort.cast(count).ast)));
          }
          rotateRight(count) {
            return new BitVecImpl(check(Z3.mk_ext_rotate_right(contextPtr, this.ast, this.sort.cast(count).ast)));
          }
          rotateLeft(count) {
            return new BitVecImpl(check(Z3.mk_ext_rotate_left(contextPtr, this.ast, this.sort.cast(count).ast)));
          }
          not() {
            return new BitVecImpl(check(Z3.mk_bvnot(contextPtr, this.ast)));
          }
          extract(high, low) {
            return Extract(high, low, this);
          }
          signExt(count) {
            return new BitVecImpl(check(Z3.mk_sign_ext(contextPtr, count, this.ast)));
          }
          zeroExt(count) {
            return new BitVecImpl(check(Z3.mk_zero_ext(contextPtr, count, this.ast)));
          }
          repeat(count) {
            return new BitVecImpl(check(Z3.mk_repeat(contextPtr, count, this.ast)));
          }
          sle(other) {
            return SLE(this, other);
          }
          ule(other) {
            return ULE(this, other);
          }
          slt(other) {
            return SLT(this, other);
          }
          ult(other) {
            return ULT(this, other);
          }
          sge(other) {
            return SGE(this, other);
          }
          uge(other) {
            return UGE(this, other);
          }
          sgt(other) {
            return SGT(this, other);
          }
          ugt(other) {
            return UGT(this, other);
          }
          redAnd() {
            return new BitVecImpl(check(Z3.mk_bvredand(contextPtr, this.ast)));
          }
          redOr() {
            return new BitVecImpl(check(Z3.mk_bvredor(contextPtr, this.ast)));
          }
          addNoOverflow(other, isSigned) {
            return new BoolImpl(check(Z3.mk_bvadd_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
          }
          addNoUnderflow(other) {
            return new BoolImpl(check(Z3.mk_bvadd_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          subNoOverflow(other) {
            return new BoolImpl(check(Z3.mk_bvsub_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          subNoUndeflow(other, isSigned) {
            return new BoolImpl(check(Z3.mk_bvsub_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
          }
          sdivNoOverflow(other) {
            return new BoolImpl(check(Z3.mk_bvsdiv_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          mulNoOverflow(other, isSigned) {
            return new BoolImpl(check(Z3.mk_bvmul_no_overflow(contextPtr, this.ast, this.sort.cast(other).ast, isSigned)));
          }
          mulNoUndeflow(other) {
            return new BoolImpl(check(Z3.mk_bvmul_no_underflow(contextPtr, this.ast, this.sort.cast(other).ast)));
          }
          negNoOverflow() {
            return new BoolImpl(check(Z3.mk_bvneg_no_overflow(contextPtr, this.ast)));
          }
        }
        class BitVecNumImpl extends BitVecImpl {
          value() {
            return BigInt(this.asString());
          }
          asSignedValue() {
            let val = this.value();
            const size = BigInt(this.size());
            if (val >= 2n ** (size - 1n)) {
              val = val - 2n ** size;
            }
            if (val < (-2n) ** (size - 1n)) {
              val = val + 2n ** size;
            }
            return val;
          }
          asString() {
            return Z3.get_numeral_string(contextPtr, this.ast);
          }
          asBinaryString() {
            return Z3.get_numeral_binary_string(contextPtr, this.ast);
          }
        }
        class ArraySortImpl extends SortImpl {
          domain() {
            return _toSort(check(Z3.get_array_sort_domain(contextPtr, this.ptr)));
          }
          domain_n(i) {
            return _toSort(check(Z3.get_array_sort_domain_n(contextPtr, this.ptr, i)));
          }
          range() {
            return _toSort(check(Z3.get_array_sort_range(contextPtr, this.ptr)));
          }
        }
        class ArrayImpl extends ExprImpl {
          domain() {
            return this.sort.domain();
          }
          domain_n(i) {
            return this.sort.domain_n(i);
          }
          range() {
            return this.sort.range();
          }
          select(...indices) {
            return Select(this, ...indices);
          }
          store(...indicesAndValue) {
            return Store(this, ...indicesAndValue);
          }
        }
        class SetImpl extends ExprImpl {
          elemSort() {
            return this.sort.domain();
          }
          union(...args) {
            return SetUnion(this, ...args);
          }
          intersect(...args) {
            return SetIntersect(this, ...args);
          }
          diff(b) {
            return SetDifference(this, b);
          }
          hasSize(size) {
            return SetHasSize(this, size);
          }
          add(elem) {
            return SetAdd(this, elem);
          }
          del(elem) {
            return SetDel(this, elem);
          }
          complement() {
            return SetComplement(this);
          }
          contains(elem) {
            return isMember(elem, this);
          }
          subsetOf(b) {
            return isSubset(this, b);
          }
        }
        class QuantifierImpl extends ExprImpl {
          is_forall() {
            return Z3.is_quantifier_forall(contextPtr, this.ast);
          }
          is_exists() {
            return Z3.is_quantifier_exists(contextPtr, this.ast);
          }
          is_lambda() {
            return Z3.is_lambda(contextPtr, this.ast);
          }
          weight() {
            return Z3.get_quantifier_weight(contextPtr, this.ast);
          }
          num_patterns() {
            return Z3.get_quantifier_num_patterns(contextPtr, this.ast);
          }
          pattern(i) {
            return new PatternImpl(check(Z3.get_quantifier_pattern_ast(contextPtr, this.ast, i)));
          }
          num_no_patterns() {
            return Z3.get_quantifier_num_no_patterns(contextPtr, this.ast);
          }
          no_pattern(i) {
            return _toExpr(check(Z3.get_quantifier_no_pattern_ast(contextPtr, this.ast, i)));
          }
          body() {
            return _toExpr(check(Z3.get_quantifier_body(contextPtr, this.ast)));
          }
          num_vars() {
            return Z3.get_quantifier_num_bound(contextPtr, this.ast);
          }
          var_name(i) {
            return _fromSymbol(Z3.get_quantifier_bound_name(contextPtr, this.ast, i));
          }
          var_sort(i) {
            return _toSort(check(Z3.get_quantifier_bound_sort(contextPtr, this.ast, i)));
          }
          children() {
            return [this.body()];
          }
        }
        class NonLambdaQuantifierImpl extends QuantifierImpl {
          not() {
            return Not(this);
          }
          and(other) {
            return And(this, other);
          }
          or(other) {
            return Or(this, other);
          }
          xor(other) {
            return Xor(this, other);
          }
          implies(other) {
            return Implies(this, other);
          }
          iff(other) {
            return Iff(this, other);
          }
        }
        class LambdaImpl extends QuantifierImpl {
          domain() {
            return this.sort.domain();
          }
          domain_n(i) {
            return this.sort.domain_n(i);
          }
          range() {
            return this.sort.range();
          }
          select(...indices) {
            return Select(this, ...indices);
          }
          store(...indicesAndValue) {
            return Store(this, ...indicesAndValue);
          }
        }
        class AstVectorImpl {
          constructor(ptr = Z3.mk_ast_vector(contextPtr)) {
            this.ptr = ptr;
            this.ctx = ctx;
            Z3.ast_vector_inc_ref(contextPtr, ptr);
            cleanup.register(this, () => Z3.ast_vector_dec_ref(contextPtr, ptr), this);
          }
          length() {
            return Z3.ast_vector_size(contextPtr, this.ptr);
          }
          [Symbol.iterator]() {
            return this.values();
          }
          *entries() {
            const length = this.length();
            for (let i = 0; i < length; i++) {
              yield [i, this.get(i)];
            }
          }
          *keys() {
            for (let [key] of this.entries()) {
              yield key;
            }
          }
          *values() {
            for (let [, value] of this.entries()) {
              yield value;
            }
          }
          get(from2, to) {
            const length = this.length();
            if (from2 < 0) {
              from2 += length;
            }
            if (from2 >= length) {
              throw new RangeError(`expected from index ${from2} to be less than length ${length}`);
            }
            if (to === void 0) {
              return _toAst(check(Z3.ast_vector_get(contextPtr, this.ptr, from2)));
            }
            if (to < 0) {
              to += length;
            }
            if (to >= length) {
              throw new RangeError(`expected to index ${to} to be less than length ${length}`);
            }
            const result = [];
            for (let i = from2; i < to; i++) {
              result.push(_toAst(check(Z3.ast_vector_get(contextPtr, this.ptr, i))));
            }
            return result;
          }
          set(i, v) {
            _assertContext(v);
            if (i >= this.length()) {
              throw new RangeError(`expected index ${i} to be less than length ${this.length()}`);
            }
            check(Z3.ast_vector_set(contextPtr, this.ptr, i, v.ast));
          }
          push(v) {
            _assertContext(v);
            check(Z3.ast_vector_push(contextPtr, this.ptr, v.ast));
          }
          resize(size) {
            check(Z3.ast_vector_resize(contextPtr, this.ptr, size));
          }
          has(v) {
            _assertContext(v);
            for (const item of this.values()) {
              if (item.eqIdentity(v)) {
                return true;
              }
            }
            return false;
          }
          sexpr() {
            return check(Z3.ast_vector_to_string(contextPtr, this.ptr));
          }
        }
        class AstMapImpl {
          constructor(ptr = Z3.mk_ast_map(contextPtr)) {
            this.ptr = ptr;
            this.ctx = ctx;
            Z3.ast_map_inc_ref(contextPtr, ptr);
            cleanup.register(this, () => Z3.ast_map_dec_ref(contextPtr, ptr), this);
          }
          [Symbol.iterator]() {
            return this.entries();
          }
          get size() {
            return Z3.ast_map_size(contextPtr, this.ptr);
          }
          *entries() {
            for (const key of this.keys()) {
              yield [key, this.get(key)];
            }
          }
          keys() {
            return new AstVectorImpl(Z3.ast_map_keys(contextPtr, this.ptr));
          }
          *values() {
            for (const [_, value] of this.entries()) {
              yield value;
            }
          }
          get(key) {
            return _toAst(check(Z3.ast_map_find(contextPtr, this.ptr, key.ast)));
          }
          set(key, value) {
            check(Z3.ast_map_insert(contextPtr, this.ptr, key.ast, value.ast));
          }
          delete(key) {
            check(Z3.ast_map_erase(contextPtr, this.ptr, key.ast));
          }
          clear() {
            check(Z3.ast_map_reset(contextPtr, this.ptr));
          }
          has(key) {
            return check(Z3.ast_map_contains(contextPtr, this.ptr, key.ast));
          }
          sexpr() {
            return check(Z3.ast_map_to_string(contextPtr, this.ptr));
          }
        }
        function substitute(t, ...substitutions) {
          _assertContext(t);
          const from2 = [];
          const to = [];
          for (const [f, t2] of substitutions) {
            _assertContext(f);
            _assertContext(t2);
            from2.push(f.ast);
            to.push(t2.ast);
          }
          return _toExpr(check(Z3.substitute(contextPtr, t.ast, from2, to)));
        }
        function ast_from_string(s) {
          const sort_names = [];
          const sorts = [];
          const decl_names = [];
          const decls = [];
          const v = new AstVectorImpl(check(Z3.parse_smtlib2_string(contextPtr, s, sort_names, sorts, decl_names, decls)));
          if (v.length() !== 1) {
            throw new Error("Expected exactly one AST. Instead got " + v.length() + ": " + v.sexpr());
          }
          return v.get(0);
        }
        const ctx = {
          ptr: contextPtr,
          name,
          /////////////
          // Classes //
          /////////////
          Solver: SolverImpl,
          Optimize: OptimizeImpl,
          Model: ModelImpl,
          Tactic: TacticImpl,
          AstVector: AstVectorImpl,
          AstMap: AstMapImpl,
          ///////////////
          // Functions //
          ///////////////
          interrupt,
          isModel,
          isAst,
          isSort,
          isFuncDecl,
          isFuncInterp,
          isApp,
          isConst,
          isExpr,
          isVar,
          isAppOf,
          isBool,
          isTrue,
          isFalse,
          isAnd,
          isOr,
          isImplies,
          isNot,
          isEq,
          isDistinct,
          isQuantifier,
          isArith,
          isArithSort,
          isInt,
          isIntVal,
          isIntSort,
          isReal,
          isRealVal,
          isRealSort,
          isBitVecSort,
          isBitVec,
          isBitVecVal,
          // TODO fix ordering
          isArraySort,
          isArray,
          isConstArray,
          isProbe,
          isTactic,
          isAstVector,
          eqIdentity,
          getVarIndex,
          from,
          solve,
          /////////////
          // Objects //
          /////////////
          Sort,
          Function,
          RecFunc,
          Bool,
          Int,
          Real,
          BitVec,
          Array: Array2,
          Set: Set2,
          ////////////////
          // Operations //
          ////////////////
          If,
          Distinct,
          Const,
          Consts,
          FreshConst,
          Var,
          Implies,
          Iff,
          Eq,
          Xor,
          Not,
          And,
          Or,
          PbEq,
          PbGe,
          PbLe,
          ForAll,
          Exists,
          Lambda,
          ToReal,
          ToInt,
          IsInt,
          Sqrt,
          Cbrt,
          BV2Int,
          Int2BV,
          Concat,
          Cond,
          LT,
          GT,
          LE,
          GE,
          ULT,
          UGT,
          ULE,
          UGE,
          SLT,
          SGT,
          SLE,
          SGE,
          Sum,
          Sub,
          Product,
          Div,
          BUDiv,
          Neg,
          Mod,
          Select,
          Store,
          Extract,
          substitute,
          simplify,
          /////////////
          // Loading //
          /////////////
          ast_from_string,
          SetUnion,
          SetIntersect,
          SetDifference,
          SetHasSize,
          SetAdd,
          SetDel,
          SetComplement,
          EmptySet,
          FullSet,
          isMember,
          isSubset
        };
        cleanup.register(ctx, () => Z3.del_context(contextPtr));
        return ctx;
      }
      return {
        enableTrace,
        disableTrace,
        getVersion,
        getVersionString,
        getFullVersion,
        openLog,
        appendLog,
        getParam,
        setParam,
        resetParams,
        Context: createContext
      };
    }
  }
});

// node_modules/z3-solver/build/high-level/index.js
var require_high_level2 = __commonJS({
  "node_modules/z3-solver/build/high-level/index.js"(exports) {
    "use strict";
    init_cjs_shim();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding2(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_high_level(), exports);
    __exportStar2(require_types(), exports);
  }
});

// node_modules/z3-solver/build/node.js
var require_node = __commonJS({
  "node_modules/z3-solver/build/node.js"(exports) {
    "use strict";
    init_cjs_shim();
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding2(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = init;
    var initModule = require_z3_built();
    var high_level_1 = require_high_level2();
    var low_level_1 = require_low_level();
    __exportStar2(require_types(), exports);
    __exportStar2(require_types_GENERATED(), exports);
    async function init() {
      const lowLevel = await (0, low_level_1.init)(initModule);
      const highLevel = (0, high_level_1.createApi)(lowLevel.Z3);
      return { ...lowLevel, ...highLevel };
    }
  }
});

// src/coreIdentityCalculus.ts
init_cjs_shim();
import { createHash } from "crypto";
var import_z3_solver = __toESM(require_node(), 1);
function hashContent(content) {
  return createHash("sha3-256").update(content).digest("hex");
}
var IdentityEngine = class {
  constructor(initialDirectives = []) {
    if (!Array.isArray(initialDirectives)) {
      throw new Error("initialDirectives must be an array");
    }
    for (const directive of initialDirectives) {
      const expectedHash = hashContent(
        directive.statement + directive.formalSpec + directive.signature
      );
      if (directive.id !== expectedHash) {
        throw new Error(`Directive ${directive.statement} has invalid hash`);
      }
    }
    this.directives = new Map(initialDirectives.map((d) => [d.id, d]));
    this.verificationCache = /* @__PURE__ */ new Map();
    this.directives = new Map(initialDirectives.map((d) => [d.id, d]));
    this.verificationCache = /* @__PURE__ */ new Map();
    this.initializeZ3().catch((err) => {
      console.error("Z3 initialization failed:", err);
      throw err;
    });
  }
  async initializeZ3() {
    try {
      const { em } = await import_z3_solver.default.init();
      this.z3Context = new em.Context({
        // Enable model generation for counter-examples
        MODEL: true,
        // Set timeout to 5 seconds
        TIMEOUT: 5e3,
        // Enable verbose logging in debug mode
        VERBOSE: process.env.DEBUG ? 1 : 0
      });
      Logger.debug("Z3 initialized successfully");
    } catch (error) {
      Logger.error(`Failed to initialize Z3: ${error}`);
      Logger.error(`Z3: ${JSON.stringify(import_z3_solver.default)}`);
      throw new Error("Z3 initialization failed - ensure z3-solver is properly installed");
    }
  }
  /**
   * Verifies all immutable directives are preserved in new code
   * @param newCode The proposed new code to verify
   * @returns Verification result with detailed violations
   */
  async verifyDirectivePreservation(newCode) {
    const requiredDirectives = Array.from(this.directives.values()).filter((d) => d.immutable);
    const results = await Promise.all(
      requiredDirectives.map(async (directive) => {
        const hashPreserved = newCode.includes(directive.id);
        const semanticPreserved = hashPreserved || await this.verifyTransitivePreservation(directive.id, newCode);
        if (!semanticPreserved) {
          return {
            success: false,
            violations: [`Directive "${directive.statement}" not preserved`],
            proof: await this.generateCounterExample(directive, newCode)
          };
        }
        const obligationResults = await Promise.all(
          directive.proofObligations.map(
            async (obligation) => this.verifyProofObligation(directive, obligation, newCode)
          )
        );
        return obligationResults.every((r) => r.success) ? { success: true, violations: [] } : {
          success: false,
          violations: obligationResults.flatMap((r) => r.violations),
          proof: obligationResults.find((r) => !r.success)?.proof
        };
      })
    );
    const violations = results.flatMap((r) => r.violations);
    return {
      success: violations.length === 0,
      violations,
      proof: results.find((r) => !r.success)?.proof
    };
  }
  async verifyProofObligation(directive, obligation, newCode) {
    try {
      const { solver } = this.z3Context;
      solver.reset();
      solver.add(this.z3Context.parseSMTLIB2String(directive.formalSpec));
      const negatedObligation = `(not ${obligation})`;
      solver.add(this.z3Context.parseSMTLIB2String(negatedObligation));
      solver.add(...this.extractZ3Assertions(newCode));
      const result = await solver.check();
      if (result === "unsat") {
        return { success: true, violations: [] };
      } else {
        const model = solver.model();
        return {
          success: false,
          violations: [`Failed obligation: ${obligation}`],
          proof: model.toString()
        };
      }
    } catch (error) {
      Logger.error(`Proof obligation verification failed: ${error}`);
      return {
        success: false,
        violations: [`Verification error for: ${obligation}`]
      };
    }
  }
  async generateCounterExample(directive, newCode) {
    try {
      const { solver } = this.z3Context;
      solver.reset();
      solver.add(this.z3Context.parseSMTLIB2String(directive.formalSpec));
      const codeProps = this.extractZ3Assertions(newCode);
      solver.add(this.z3Context.not(this.z3Context.and(...codeProps)));
      const result = await solver.check();
      if (result === "sat") {
        const model = solver.model();
        return `Counter-example:
${model.toString()}`;
      }
      return "No counter-example found";
    } catch (error) {
      Logger.error(`Counter-example generation failed: ${error}`);
      return "Error generating counter-example";
    }
  }
  /**
   * Uses Z3 theorem prover to verify semantic equivalence when hashes don't match
   * @param hash Directive ID to verify
   * @param code New code to check against
   */
  async verifyTemporalProperty(liveness, safety) {
    try {
      const { solver } = this.z3Context;
      solver.reset();
      const livenessAssertion = this.parseLTL(liveness);
      const safetyAssertion = this.parseLTL(safety);
      solver.add(livenessAssertion);
      solver.add(safetyAssertion);
      const result = await solver.check();
      if (result === "unsat") {
        return { success: true, violations: [] };
      } else {
        const model = solver.model();
        return {
          success: false,
          violations: ["Temporal property violation"],
          proof: model.toString()
        };
      }
    } catch (error) {
      Logger.error(`Temporal verification failed: ${error}`);
      return {
        success: false,
        violations: [`Temporal verification error: ${error instanceof Error ? error.message : String(error)}`]
      };
    }
  }
  parseLTL(formula) {
    if (formula.startsWith("G ")) {
      return this.z3Context.parseSMTLIB2String(
        `(forall ((t Int)) ${formula.substring(2)}`
      );
    } else if (formula.startsWith("F ")) {
      return this.z3Context.parseSMTLIB2String(
        `(exists ((t Int)) ${formula.substring(2)}`
      );
    }
    return this.z3Context.parseSMTLIB2String(formula);
  }
  async verifyTransitivePreservation(hash, code) {
    const cacheKey = `${hash}:${hashContent(code)}`;
    if (this.verificationCache.has(cacheKey)) {
      const { result, timestamp } = this.verificationCache.get(cacheKey);
      if (Date.now() - timestamp < 3e5) {
        return result;
      }
    }
    const directive = this.directives.get(hash);
    if (!directive) {
      throw new Error(`Directive ${hash} not found`);
    }
    try {
      const depResults = await Promise.all(
        directive.dependencies.map(async (depHash) => {
          if (!this.directives.has(depHash)) {
            throw new Error(`Missing dependency: ${depHash}`);
          }
          return this.verifyDirectivePreservation(code, depHash);
        })
      );
      if (depResults.some((r) => !r)) {
        this.verificationCache.set(cacheKey, {
          result: false,
          timestamp: Date.now()
        });
        return false;
      }
    } catch (error) {
      Logger.error(`Dependency verification failed: ${error}`);
      return false;
    }
    try {
      const { solver } = this.z3Context;
      const codeAssertions = this.extractZ3Assertions(code);
      const directiveAssertion = this.z3Context.parseSMTLIB2String(directive.formalSpec);
      solver.add(codeAssertions);
      solver.add(directiveAssertion);
      const result = await solver.check();
      const isValid = result === "sat";
      this.verificationCache.set(hash, isValid);
      return isValid;
    } catch (error) {
      Logger.error(`Z3 verification failed: ${error}`);
      return false;
    }
  }
  extractZ3Assertions(code) {
    const assertions = [];
    const contractMatches = code.matchAll(/@(pre|post)\s+(.+?)\n/g);
    for (const match of contractMatches) {
      try {
        const assertion = this.z3Context.parseSMTLIB2String(match[2]);
        assertions.push(assertion);
      } catch (error) {
        Logger.warn(`Failed to parse contract: ${match[2]}`);
      }
    }
    const invariantMatches = code.matchAll(/\/\/\s*invariant:\s*(.+?)\n/g);
    for (const match of invariantMatches) {
      try {
        const assertion = this.z3Context.parseSMTLIB2String(match[1]);
        assertions.push(assertion);
      } catch (error) {
        Logger.warn(`Failed to parse invariant: ${match[1]}`);
      }
    }
    if (assertions.length === 0) {
      assertions.push(
        this.z3Context.parseSMTLIB2String("(not (contains unsafe))"),
        this.z3Context.parseSMTLIB2String("(not (contains dangerous))")
      );
    }
    return assertions;
  }
};

export {
  IdentityEngine
};
